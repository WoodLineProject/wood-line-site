<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\UserManagement;

interface UserManagementInterface
{
    public function getAllUsers(): array;

    public function getAllRoles(): array;

    public function editUser(array $data): bool;

    public function addUser(array $data): bool;

    public function deleteUser(array $data): bool;

    public function changePass(array $data): bool;
}
