<?php

namespace App\Http\Classes\LogicalModels\Auth\SingIn;

class SingIn implements SingInInterface
{
    public function __construct(
        private SingInModel $model
    ){}
    public function singIn(array $data): array
    {
        $user = $this->model->getUser($data);
        if(count($user)){

        }
    }
}
