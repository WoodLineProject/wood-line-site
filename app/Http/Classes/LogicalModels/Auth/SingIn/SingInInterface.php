<?php

namespace App\Http\Classes\LogicalModels\Auth\SingIn;

interface SingInInterface
{
    public function singIn(array $data): bool;
}
