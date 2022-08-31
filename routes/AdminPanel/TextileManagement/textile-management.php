<?php

use App\Http\Controllers\AdminPanel\TextileManagement\TextileManagementController;
use Illuminate\Support\Facades\Route;
use App\Http\Classes\LogicalModels\Common\Structure\Roles;

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::ADMIN,Roles::OWNER])
]
],
    function (){
        Route::get('/textile-management', function() {
            return view('welcome');
        });

        Route::post('/add-textile-type',  [TextileManagementController::class, 'addType']);
        Route::post('/edit-textile-type',  [TextileManagementController::class, 'editType']);

        Route::post('/add-maker-type',  [TextileManagementController::class, 'addMakerType']);
        Route::post('/edit-maker-type',  [TextileManagementController::class, 'editMakerType']);

        Route::post('/add-color-type',  [TextileManagementController::class, 'addColorType']);
        Route::post('/edit-color-type',  [TextileManagementController::class, 'editColorType']);

        Route::post('/add-textile-item',  [TextileManagementController::class, 'addTextileItem']);
        Route::post('/edit-textile-item',  [TextileManagementController::class, 'editTextileItem']);

        Route::post('/get-photo-by-id',  [TextileManagementController::class, 'getPhotoById']);
        Route::post('/upload-photo',  [TextileManagementController::class, 'uploadPhoto']);
    });

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::OWNER])
]
],
    function (){

        Route::post('/delete-textile-type',  [TextileManagementController::class, 'deleteType']);

        Route::post('/delete-maker-type',  [TextileManagementController::class, 'deleteMakerType']);

        Route::post('/delete-color-type',  [TextileManagementController::class, 'deleteColorType']);

        Route::post('/delete-textile-item',  [TextileManagementController::class, 'deleteTextileItem']);

        Route::post('/delete-photo',  [TextileManagementController::class, 'deletePhoto']);
    });
