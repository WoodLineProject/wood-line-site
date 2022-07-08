<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\UserManagement;

interface UserManagementInterface
{
    public function getAllUsers(): array;

    public function getAllRoles(): array;
}
