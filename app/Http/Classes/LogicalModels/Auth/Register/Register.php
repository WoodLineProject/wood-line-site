<?php

namespace App\Http\Classes\LogicalModels\Auth\Register;

class Register implements RegisterInterface
{
    public function __construct(
        private RegisterModel $model
    ){}

    public function register(array $data): bool
    {
        return $this->model->register($data);
    }
}
