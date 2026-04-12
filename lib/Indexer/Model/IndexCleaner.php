<?php

namespace Phpactor\Indexer\Model;

use Amp\Promise;

final class IndexCleaner
{
    public function __construct(private  $index)
    {
    }

    public function clean(): Promise
    {
        $this->index->
    }

}
