<?php

namespace Phpactor\Extension\LanguageServer\Middleware;

use Amp\Promise;
use Phpactor\LanguageServer\Core\Middleware\Middleware;
use Phpactor\LanguageServer\Core\Middleware\RequestHandler;
use Phpactor\LanguageServer\Core\Rpc\Message;

use function Amp\call;

class BlackfireProbeMiddleware implements Middleware
{
    public function process(Message $request, RequestHandler $handler): Promise
    {
        if ('textDocument/completion' !== $request->method) {
            return $handler->handle($request);
        }

        return call(function () use ($request, $handler) {
            $config = new \Blackfire\Profile\Configuration();
            $config->setTitle($request->method);
            $blackfire = new \Blackfire\Client();
            $probe = $blackfire->createProbe($config);
            $response = yield $handler->handle($request);
            $profile = $blackfire->endProbe($probe);

            return $response;
        });
    }
}
