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
    public function deleteType(array $data): bool
    {
        return $this->model->deleteType($data);
    }

    public function addLayoutType(array $data): bool
    {
        return $this->model->addLayoutType($data);
    }
    public function editLayoutType(array $data): bool
    {
        return $this->model->editLayoutType($data);
    }
    public function deleteLayoutType(array $data): bool
    {
        return $this->model->deleteLayoutType($data);
    }

    public function addAgeType(array $data): bool
    {
        return $this->model->addAgeType($data);
    }
    public function editAgeType(array $data): bool
    {
        return $this->model->editAgeType($data);
    }
    public function deleteAgeType(array $data): bool
    {
        return $this->model->deleteAgeType($data);
    }

    public function addProductItem(array $data): bool
    {
        return $this->model->addProductItem($data);
    }
    public function editProductItem(array $data): bool
    {
        return $this->model->editProductItem($data);
    }
    public function deleteProductItem(array $data): bool
    {
        return $this->model->deleteProductItem($data);
    }
}
