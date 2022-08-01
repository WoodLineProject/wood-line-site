<?php

namespace App\Http\Classes\LogicalModels\Common\Dic;

interface DicInterface
{
    public function getTypes(): array;
    public function getLayoutTypes(): array;
    public function getAgeTypes(): array;
    public function getProducts(): array;
    public function getProductsMergePhoto(): array;
}
