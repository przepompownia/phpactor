<?php

namespace Phpactor\Extension\WorseReflectionAnalyse;

use Phpactor\Container\Container;
use Phpactor\Extension\Console\ConsoleExtension;
use Phpactor\Extension\SourceCodeFilesystem\SourceCodeFilesystemExtension;
use Phpactor\Container\ContainerBuilder;
use Phpactor\Container\Extension;
use Phpactor\Extension\WorseReflectionAnalyse\Command\AnalyseCommand;
use Phpactor\Extension\WorseReflectionAnalyse\Model\Analyser;
use Phpactor\Extension\WorseReflectionAnalyse\SourceLocator\AnalysedFilesIndex;
use Phpactor\Extension\WorseReflectionAnalyse\SourceLocator\AnalysedFilesSourceLocator;
use Phpactor\Extension\WorseReflection\WorseReflectionExtension;
use Phpactor\MapResolver\Resolver;
use Phpactor\WorseReflection\ReflectorBuilder;

class WorseReflectionAnalyseExtension implements Extension
{
    public function configure(Resolver $schema): void
    {
    }

    public function load(ContainerBuilder $container): void
    {
        $this->registerCommands($container);
        $this->registerSourceLocator($container);
    }
    private function registerCommands(ContainerBuilder $container): void
    {
        $container->register(AnalyseCommand::class, function (Container $container) {
            return new AnalyseCommand(
                new Analyser(
                    $container->get(SourceCodeFilesystemExtension::SERVICE_REGISTRY),
                    $container->get(WorseReflectionExtension::SERVICE_REFLECTOR),
                    $container->get(AnalysedFilesIndex::class),
                )
            );
        }, [ ConsoleExtension::TAG_COMMAND => [
            'name' => 'worse:analyse',
        ]]);
    }

    private function registerSourceLocator(ContainerBuilder $container): void
    {
        $container->register(AnalysedFilesIndex::class, function (Container $container) {
            return new AnalysedFilesIndex(ReflectorBuilder::create()->build());
        });

        $container->register(AnalysedFilesSourceLocator::class, function (Container $container) {
            return new AnalysedFilesSourceLocator($container->get(AnalysedFilesIndex::class));
        }, [ WorseReflectionExtension::TAG_SOURCE_LOCATOR => [
            'priority' => 128,
        ]]);
    }
}
