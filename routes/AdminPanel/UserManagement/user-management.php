<?php
use App\Http\Controllers\AdminPanel\UserManagement\UserManagementController;
use Illuminate\Support\Facades\Route;
use App\Http\Classes\LogicalModels\Common\Structure\Roles;

Route::group(['middleware' => [
        'auth:sanctum',
        'checkRole:' . implode(",",[Roles::ADMIN,Roles::OWNER])
        ]
    ],
    function (){
        Route::get('/user-management', function() {
            return view('welcome');
        });
        Route::post('/get-users',  [UserManagementController::class, 'getAllUsers']);
        Route::post('/get-roles',  [UserManagementController::class, 'getAllRoles']);
});
