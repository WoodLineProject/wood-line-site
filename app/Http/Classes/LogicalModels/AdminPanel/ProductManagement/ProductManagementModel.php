<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

use App\Models\MSSQL\TableModels\{Dic_product_type,};

class ProductManagementModel
{

    public function __construct(
        private Dic_product_type $productType
    ){}

    public function addType(array $data): bool
    {
        return $this->productType->insert([
            'name_ukr' => $data['name_ukr'],
            'name_rus' => $data['name_rus'],
        ]);
    }
    public function editType(array $data): bool
    {
        return $this->productType
            ->where('id', $data['id'])
            ->update([
                'name_ukr' => $data['name_ukr'],
                'name_rus' => $data['name_rus'],
            ]);
    }
}
