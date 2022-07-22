<?php
declare(strict_types=1);

namespace App\Models\Traits;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;


trait CacheTrait
{
    public function getCachedData(string $cacheName, int $ttlCache, callable $functionForCache) : array {
        return Cache::remember(App::environment() . $cacheName, $ttlCache,
            function() use ($functionForCache, $cacheName) {
                $result = call_user_func($functionForCache);
                return (count($result)) ? $result : throw new \RuntimeException('Error get: '.$cacheName);
            });
    }
}
