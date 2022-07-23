<?php

use App\Http\Controllers\AdminPanel\ProductManagement\ProductManagementController;
use Illuminate\Support\Facades\Route;
use App\Http\Classes\LogicalModels\Common\Structure\Roles;

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::ADMIN,Roles::OWNER])
]
],
    function (){
        Route::get('/product-management', function() {
            return view('welcome');
        });
        Route::post('/add-product-type',  [ProductManagementController::class, 'addType']);
        Route::post('/edit-product-type',  [ProductManagementController::class, 'editType']);
    });

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::OWNER])
]
],
    function (){
        /*Route::post('/custom-edit-user',  [UserManagementController::class, 'editUser']);
        Route::post('/custom-delete-user',  [UserManagementController::class, 'deleteUser']);
        Route::post('//custom-change-pass',  [UserManagementController::class, 'changePass']);*/
    });