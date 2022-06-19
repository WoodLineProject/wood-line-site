<?php

use App\Http\Controllers\testController\TestController;

Route::group(
    [
        'prefix' => '',
    ],
    function () {
            Route::get('/test', [TestController::class, 'index']);

    });
