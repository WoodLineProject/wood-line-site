<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

class ProductManagement implements  ProductManagementInterface
{
    public function __construct(
        private ProductManagementModel $model
    ){}

    public function addType(array $data): bool
    {
        return $this->model->addType($data);
    }
    public function editType(array $data): bool
    {
        return $this->model->editType($data);
    }
}
