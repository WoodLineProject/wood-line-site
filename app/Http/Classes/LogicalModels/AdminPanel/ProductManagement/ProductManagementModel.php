<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

use App\Models\MSSQL\TableModels\{Dic_age_type, Dic_layout_type, Dic_product_type, Product, Product_photo_path};

class ProductManagementModel
{

    public function __construct(
        private Dic_product_type $productType,
        private Product $product,
        private Dic_layout_type $layoutType,
        private Dic_age_type $ageType,
        private Product_photo_path $photoPath,
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
    public function deleteType(array $data): bool
    {
        $this->product
            ->where('product_type_id',$data['id'])
            ->update([
                'product_type_id' => null
            ]);

        return $this->productType
            ->where('id', $data['id'])
            ->delete();
    }

    public function addLayoutType(array $data): bool
    {
        return $this->layoutType->insert([
            'name_ukr' => $data['name_ukr'],
            'name_rus' => $data['name_rus'],
        ]);
    }
    public function editLayoutType(array $data): bool
    {
        return $this->layoutType
            ->where('id', $data['id'])
            ->update([
                'name_ukr' => $data['name_ukr'],
                'name_rus' => $data['name_rus'],
            ]);
    }
    public function deleteLayoutType(array $data): bool
    {
        $this->product
            ->where('layout_type_id',$data['id'])
            ->update([
                'layout_type_id' => null
            ]);

        return $this->layoutType
            ->where('id', $data['id'])
            ->delete();
    }

    public function addAgeType(array $data): bool
    {
        return $this->ageType->insert([
            'name_ukr' => $data['name_ukr'],
            'name_rus' => $data['name_rus'],
        ]);
    }
    public function editAgeType(array $data): bool
    {
        return $this->ageType
            ->where('id', $data['id'])
            ->update([
                'name_ukr' => $data['name_ukr'],
                'name_rus' => $data['name_rus'],
            ]);
    }
    public function deleteAgeType(array $data): bool
    {
        $this->product
            ->where('age_type_id',$data['id'])
            ->update([
                'age_type_id' => null
            ]);

        return $this->ageType
            ->where('id', $data['id'])
            ->delete();
    }

    public function addProductItem(array $data): bool
    {
        return $this->product->insert([
            'name' => $data['name'],
            'product_type_id' => $data['product_type_id'],
            'layout_type_id' => $data['layout_type_id'],
            'age_type_id' => $data['age_type_id'],
            'is_angular' => $data['is_angular'],
            'all_sizes' => $data['all_sizes'],
            'sleep_sizes' => $data['sleep_sizes'],
            'count_pillow' => $data['count_pillow'],
            'description' => $data['description'],
        ]);
    }
    public function editProductItem(array $data): bool
    {
        return $this->product
            ->where('id', $data['id'])
            ->update([
                'name' => $data['name'],
                'product_type_id' => $data['product_type_id'],
                'layout_type_id' => $data['layout_type_id'],
                'age_type_id' => $data['age_type_id'],
                'is_angular' => $data['is_angular'],
                'all_sizes' => $data['all_sizes'],
                'sleep_sizes' => $data['sleep_sizes'],
                'count_pillow' => $data['count_pillow'],
                'description' => $data['description'],
            ]);
    }
    public function deleteProductItem(array $data): bool
    {
        return $this->product
            ->where('id', $data['id'])
            ->delete();
    }

    public function getPhotoById(array $data): array
    {
        return $this->photoPath
            ->where('product_id', $data['id'])
            ->get('name')
            ->toArray();
    }
}
