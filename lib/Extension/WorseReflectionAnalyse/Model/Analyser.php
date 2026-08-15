<?php

namespace Phpactor\Extension\WorseReflectionAnalyse\Model;

use Generator;
use Phpactor\Extension\WorseReflectionAnalyse\SourceLocator\AnalysedFilesIndex;
use Phpactor\Filesystem\Domain\FileList;
use Phpactor\Filesystem\Domain\FilePath;
use Phpactor\Filesystem\Domain\FilesystemRegistry;
use Phpactor\TextDocument\TextDocument;
use Phpactor\TextDocument\TextDocumentBuilder;
use Phpactor\WorseReflection\Core\Diagnostic;
use Phpactor\WorseReflection\Core\Diagnostics;
use Phpactor\WorseReflection\Core\Reflector\SourceCodeReflector;
use RuntimeException;
use Symfony\Component\Filesystem\Path;
use Throwable;
use function Amp\Promise\wait;

class Analyser
{
    public function __construct(
        private FilesystemRegistry $filesystem,
        private SourceCodeReflector $reflector,
        private AnalysedFilesIndex $index,
    ) {
    }

    /**
     * @return Generator<string,Diagnostics<Diagnostic>>
     */
    public function analyse(string $path): Generator
    {
        $cwd = (string)getcwd();
        $absPath = Path::makeAbsolute($path, $cwd);
        if (file_exists($absPath) && is_file($absPath)) {
            yield $path => wait($this->reflector->diagnostics(TextDocumentBuilder::fromUri($absPath)->build()));
            return;
        }

        /** @var array<string,TextDocument> $documents */
        $documents = [];
        foreach ($this->fileList($absPath) as $file) {
            $document = TextDocumentBuilder::fromUri($file->path())->build();
            $documents[$file->path()] = $document;
            $this->index->index($document);
        }

        foreach ($documents as $filePath => $document) {
            try {
                yield Path::makeRelative(
                    $filePath,
                    $cwd
                ) => wait($this->reflector->diagnostics($document));
            } catch (Throwable $error) {
                throw new RuntimeException(sprintf(
                    'Error while analysing file "%s": %s',
                    $filePath,
                    $error->getMessage()
                ), 0, $error);
            }
        }
    }

    public function fileList(string $path): FileList
    {
        $cwd = (string)getcwd();
        $absPath = Path::makeAbsolute($path, $cwd);

        $filesystem = $this->filesystem->get('git');
        return $filesystem->fileList()->phpFiles()->within(FilePath::fromString($absPath));
    }
}
