<?php

namespace App\Http\Classes\LogicalModels\Common\Dic;

use App\Models\MSSQL\TableModels\Dic_product_type;

class DicModel
{
    public function __construct(
        private Dic_product_type $productType
    ){}

    public function getTypes(): array
    {
        return $this->productType
            ->get()
            ->toArray();
    }
}
