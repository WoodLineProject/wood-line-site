<?php

namespace App\Http\Classes\LogicalModels\CallMy;

interface CallMyInterface
{
    public function callMy(array $data): bool;
}
