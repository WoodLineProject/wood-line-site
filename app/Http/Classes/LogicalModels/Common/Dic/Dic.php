<?php

namespace App\Http\Classes\LogicalModels\Common\Dic;

class Dic implements DicInterface
{
    public function __construct(
        private DicModel $model
    ){}

    public function getTypes(): array
    {
        return $this->model->getTypes();
    }
    public function getLayoutTypes(): array
    {
        return $this->model->getLayoutTypes();
    }
    public function getAgeTypes(): array
    {
        return $this->model->getAgeTypes();
    }
    public function getProducts(): array
    {
        return $this->model->getProducts();
    }
    public function getProductsMergePhoto(): array
    {
        return $this->model->getProductsMergePhoto();
    }
    public function getProductById(array $data): array
    {
        return $this->model->getProductById($data);
    }
    public function getPhotoById(array $data): array
    {
        return $this->model->getPhotoById($data);
    }
}
