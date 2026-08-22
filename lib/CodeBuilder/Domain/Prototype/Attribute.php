<?php

namespace Phpactor\CodeBuilder\Domain\Prototype;

final class Attribute extends Prototype
{
    /**
     * @param Value[] $values
     */
    public function __construct(public string $name, public array $values)
    {
    }
}
