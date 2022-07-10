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

    public function editUser(array $data): bool
    {
        return $this->model->editUser($data);
    }

    public function addUser(array $data): bool
    {
        return $this->model->addUser($data);
    }

    public function deleteUser(array $data): bool
    {
        return $this->model->deleteUser($data);
    }

    public function changePass(array $data): bool
    {
        return $this->model->changePass($data);
    }
}
