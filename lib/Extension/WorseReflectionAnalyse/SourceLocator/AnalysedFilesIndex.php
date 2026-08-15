<?php

namespace Phpactor\Extension\WorseReflectionAnalyse\SourceLocator;

use Phpactor\TextDocument\TextDocument;
use Phpactor\WorseReflection\Core\Name;
use Phpactor\WorseReflection\Core\Reflector\SourceCodeReflector;

/**
 * Maps class/function names declared in the set of files being analysed by
 * `worse:analyse` back to the document that declares them, so that siblings
 * within the analysed path can resolve each other without relying on
 * Composer autoloading.
 */
final class AnalysedFilesIndex
{
    /**
     * @var array<string, TextDocument>
     */
    private array $byName = [];

    public function __construct(private SourceCodeReflector $reflector)
    {
    }

    public function index(TextDocument $textDocument): void
    {
        foreach ($this->reflector->reflectClassesIn($textDocument) as $reflectionClass) {
            $this->byName[$reflectionClass->name()->full()] = $textDocument;
        }

        foreach ($this->reflector->reflectFunctionsIn($textDocument) as $reflectionFunction) {
            $this->byName[$reflectionFunction->name()->full()] = $textDocument;
        }
    }

    public function documentForName(Name $name): ?TextDocument
    {
        return $this->byName[$name->full()] ?? null;
    }
}
