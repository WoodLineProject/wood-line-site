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
}
