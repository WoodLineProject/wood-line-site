<?php

use App\Http\Classes\LogicalModels\Common\Structure\Roles;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
// не трогать
Route::get('/', function() {
    return view('welcome');
});
Route::get('/{any}', function() {
    return view('welcome');
});
Auth::routes();
//------------------------


//owner all

//open route
Route::post('/test2',  [TestController::class, 'test']);
// only user
Route::group(['middleware' => [
            'auth:sanctum',
            'checkRole:' . implode(",",[Roles::USER])
        ]
    ],
    function (){
        Route::post('/test3',  [TestController::class, 'test']);
});
// only admin
Route::group(['middleware' => [
            'auth:sanctum',
            'checkRole:' . implode(",",[Roles::ADMIN])
        ]
    ],
    function (){
        Route::post('/test4',  [TestController::class, 'test']);
});
Route::group(['middleware' => [
            'auth:sanctum',
            'checkRole:' . implode(",",[Roles::OWNER])
        ]
    ],
    function (){
        Route::post('/test5',  [TestController::class, 'test']);
    });


include "BaseRoute/base-route.php";
include "AdminPanel/admin-panel.php";
