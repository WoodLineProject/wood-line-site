<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\ProductManagement;

use App\Http\Classes\LogicalModels\Common\Structure\CDateTime;
use App\Models\MSSQL\TableModels\{Dic_age_type, Dic_layout_type, Dic_product_type, Product, Product_photo_path};
use Illuminate\Support\Facades\Storage;

class ProductManagementModel
{
    private const PHOTO_PATH = 'public/image/productPhoto';
    private const FORMAT = '.jpeg';
    private const PHOTO_URL = '/storage/app/public/image/productPhoto';


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
        $this->deletePhotoByProductItem($data);
        return $this->product
            ->where('id', $data['id'])
            ->delete();
    }

    private function deletePhotoByProductItem(array $data): void
    {
        $photoArray = $this->photoPath
            ->where('product_id',$data['id'])
            ->get()
            ->toArray();
        foreach ($photoArray as $photo)
        {
            $this->deletePhoto($photo);
        }
    }

    public function getPhotoById(array $data): array
    {
        $dbArray =  $this->photoPath
            ->where('product_id', $data['id'])
            ->get([
                'id',
                'name',
                'path'
            ])
            ->toArray();

        return $dbArray;
    }
    public function deletePhoto(array $data): bool
    {
        Storage::disk('local')->delete(self::PHOTO_PATH.'/'.$data["name"]);
        return $this->photoPath
            ->where('id', $data['id'])
            ->delete();
    }
    public function uploadPhoto(array $data, array $files): bool
    {
        try {
            foreach ($files as $key => $file) {
                $newFilaName = 'id_'.$data['id'].'_'.CDateTime::getCurrentDateTimeStamp().'_'.$key.self::FORMAT;
                Storage::disk('local')->putFileAs(
                    self::PHOTO_PATH,
                    $file,
                    $newFilaName
                );
                $this->photoPath
                    ->insert([
                        'product_id' => $data['id'],
                        'name' => $newFilaName,
                        'path' => self::PHOTO_URL.'/'.$newFilaName
                    ]);
            }
            return true;
        }catch (\Exception $e){return false;}
    }
}
