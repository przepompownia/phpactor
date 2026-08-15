<?php

namespace Phpactor\Extension\WorseReflectionAnalyse\SourceLocator;

use Phpactor\TextDocument\TextDocument;
use Phpactor\WorseReflection\Core\Exception\SourceNotFound;
use Phpactor\WorseReflection\Core\Name;
use Phpactor\WorseReflection\Core\SourceCodeLocator;

final class AnalysedFilesSourceLocator implements SourceCodeLocator
{
    public function __construct(private AnalysedFilesIndex $index)
    {
    }

    public function locate(Name $name): TextDocument
    {
        if (null === $document = $this->index->documentForName($name)) {
            throw new SourceNotFound(sprintf(
                'Class "%s" not found in analysed files',
                (string) $name
            ));
        }

        return $document;
    }
}
