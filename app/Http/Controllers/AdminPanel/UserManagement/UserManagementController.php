<?php

namespace App\Http\Controllers\AdminPanel\UserManagement;

use App\Http\Classes\LogicalModels\AdminPanel\UserManagement\UserManagement;
use App\Http\Controllers\WebController;
use App\Http\Requests\UserManagement\{
    EditUserRequest,
    AddUserRequest,
    DeleteUserRequest,
    ChangePassRequest,
};
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

    public function editUser(EditUserRequest $request): JsonResponse
    {
        $result = $this->model->editUser($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function addUser(AddUserRequest $request): JsonResponse
    {
        $result = $this->model->addUser($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteUser(DeleteUserRequest $request): JsonResponse
    {
        $result = $this->model->deleteUser($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function changePass(ChangePassRequest $request): JsonResponse
    {
        $result = $this->model->changePass($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
}
