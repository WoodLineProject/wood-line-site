<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

class ProductManagement implements  ProductManagementInterface
{
    public function __construct(
        private ProductManagementModel $model
    ){}

    public function getTypes(): array
    {
        return $this->model->getTypes();
    }
}
