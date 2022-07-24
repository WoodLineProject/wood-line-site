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

        Route::post('/add-layout-type',  [ProductManagementController::class, 'addLayoutType']);
        Route::post('/edit-layout-type',  [ProductManagementController::class, 'editLayoutType']);

        Route::post('/add-age-type',  [ProductManagementController::class, 'addAgeType']);
        Route::post('/edit-age-type',  [ProductManagementController::class, 'editAgeType']);

        Route::post('/add-product-item',  [ProductManagementController::class, 'addProductItem']);
        Route::post('/edit-product-item',  [ProductManagementController::class, 'editProductItem']);

        Route::post('/get-photo-by-id',  [ProductManagementController::class, 'getPhotoById']);
    });

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::OWNER])
]
],
    function (){

        Route::post('/delete-product-type',  [ProductManagementController::class, 'deleteType']);

        Route::post('/delete-layout-type',  [ProductManagementController::class, 'deleteLayoutType']);

        Route::post('/delete-age-type',  [ProductManagementController::class, 'deleteAgeType']);

        Route::post('/delete-product-item',  [ProductManagementController::class, 'deleteProductItem']);
    });
