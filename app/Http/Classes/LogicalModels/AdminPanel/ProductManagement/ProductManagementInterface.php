<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

interface ProductManagementInterface
{
    public function addType(array $data): bool;
    public function editType(array $data): bool;
    public function deleteType(array $data): bool;

    public function addLayoutType(array $data): bool;
    public function editLayoutType(array $data): bool;
    public function deleteLayoutType(array $data): bool;

    public function addAgeType(array $data): bool;
    public function editAgeType(array $data): bool;
    public function deleteAgeType(array $data): bool;

    public function addProductItem(array $data): bool;
    public function editProductItem(array $data): bool;
    public function deleteProductItem(array $data): bool;
}
