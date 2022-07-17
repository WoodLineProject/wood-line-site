<?php

use App\Http\Classes\LogicalModels\Common\Structure\Roles;

use App\Http\Controllers\AdminPanel\EmailSenderPanel\EmailSenderPanelController;
use Illuminate\Support\Facades\Route;

Route::group (['middleware' => [
    'auth:sanctum',
    'checkRole:' .implode(",", [Roles::ADMIN, Roles::OWNER])
        ]
    ],
    function() {
        Route::get('/email-sender-panel', function () {
            return view('welcome');
        });
        Route::post('/get-simple-users', [EmailSenderPanelController::class, 'getSimpleUsers']);
    }
);
