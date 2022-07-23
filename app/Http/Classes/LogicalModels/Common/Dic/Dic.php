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
}
