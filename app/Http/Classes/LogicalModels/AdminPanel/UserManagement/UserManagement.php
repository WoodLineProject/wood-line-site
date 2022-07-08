<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\UserManagement;

class UserManagement implements UserManagementInterface
{
    public function __construct(
        private UserManagementModel $model
    ){}

    public function getAllUsers(): array
    {
        return $this->model->getAllUsers();
    }

    public function getAllRoles(): array
    {
        return $this->model->getAllRoles();
    }
}
