<?php

namespace App\Http\Controllers\AdminPanel\UserManagement;

use App\Http\Classes\LogicalModels\AdminPanel\UserManagement\UserManagement;
use App\Http\Controllers\WebController;
use  \Illuminate\Http\JsonResponse;


class UserManagementController extends WebController
{
    public function __construct(
        private UserManagement $model
    ){}

    public function getAllUsers(): JsonResponse
    {
        $result = $this->model->getAllUsers();
        return $this->makeGoodResponse($result);
    }

    public function getAllRoles(): JsonResponse
    {
        $result = $this->model->getAllRoles();
        return $this->makeGoodResponse($result);
    }
}
