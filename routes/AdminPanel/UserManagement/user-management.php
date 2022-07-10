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
        Route::post('/custom-add-user',  [UserManagementController::class, 'addUser']);
});

Route::group(['middleware' => [
    'auth:sanctum',
    'checkRole:' . implode(",",[Roles::OWNER])
        ]
    ],
    function (){
        Route::post('/custom-edit-user',  [UserManagementController::class, 'editUser']);
        Route::post('/custom-delete-user',  [UserManagementController::class, 'deleteUser']);
        Route::post('//custom-change-pass',  [UserManagementController::class, 'changePass']);
    });
