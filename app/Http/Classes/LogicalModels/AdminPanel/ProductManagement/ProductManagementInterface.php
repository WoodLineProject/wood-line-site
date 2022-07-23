<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

interface ProductManagementInterface
{
    public function addType(array $data): bool;

    public function editType(array $data): bool;
}
