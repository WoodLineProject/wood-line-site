<?php

use App\Http\Classes\LogicalModels\Common\Structure\Roles;

use App\Http\Controllers\AdminPanel\OrdersCallBackPanel\OrdersCallBackPanelController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::ADMIN,Roles::OWNER])
        ]
    ],
    function (){
        Route::get('/orders-call-back-panel', function() {
            return view('welcome');
        });
        Route::post('/get-orders-call-back',  [OrdersCallBackPanelController::class, 'getOrdersCallBack']);
        Route::post('/orders-call-back-make-complete',  [OrdersCallBackPanelController::class, 'makeComplete']);
});
