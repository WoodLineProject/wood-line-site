<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

use App\Models\MSSQL\TableModels\{Dic_product_type,};

class ProductManagementModel
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
