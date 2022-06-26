<?php

namespace App\Http\Classes\LogicalModels\Auth\Register;

interface RegisterInterface
{
    public function register(array $data): bool;
}
