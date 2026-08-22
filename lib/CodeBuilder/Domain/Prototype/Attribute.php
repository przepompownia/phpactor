<?php

namespace Phpactor\CodeBuilder\Domain\Prototype;

final class Attribute extends Prototype
{
    /**
     * @param list<Value> $arguments
     */
    public function __construct(
        public string $name,
        public array $arguments
    ) {
    }
}
