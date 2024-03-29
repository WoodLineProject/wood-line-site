<?php

namespace App\Http\Classes\LogicalModels\Common\Dic;

use App\Models\MSSQL\TableModels\{Dic_age_type, Dic_layout_type, Dic_product_type, Product, Product_photo_path};
use Illuminate\Database\Eloquent\Builder;

class DicModel
{
    public function __construct(
        private Dic_product_type $productType,
        private Dic_layout_type $layoutType,
        private Dic_age_type $ageType,
        private Product $product,
        private Product_photo_path $photoPath,
    ){}

    public function getTypes(): array
    {
        return $this->productType
            ->get()
            ->toArray();
    }
    public function getLayoutTypes(): array
    {
        return $this->layoutType
            ->get()
            ->toArray();
    }
    public function getAgeTypes(): array
    {
        return $this->ageType
            ->get()
            ->toArray();
    }
    public function getProducts(): array
    {
        return $this->getProductQuery()
            ->select([
                'product.id',
                'product.name',
                'product.product_type_id',
                'productType.name_rus as productTypeRus',
                'productType.name_ukr as productTypeUkr',
                'product.layout_type_id',
                'layoutType.name_rus as layoutTypeRus',
                'layoutType.name_ukr as layoutTypeUkr',
                'product.age_type_id',
                'ageType.name_rus as ageTypeRus',
                'ageType.name_ukr as ageTypeUkr',
                'product.is_angular',
                'product.all_sizes',
                'product.sleep_sizes',
                'product.count_pillow',
                'product.description',
            ])
            ->get()
            ->toArray();
    }
    private function getProductQuery(): Builder
    {
        return $this->product->from($this->product->getTable(),'product')
            ->leftJoin($this->productType->getTable(). ' as productType','productType.id','=','product.product_type_id')
            ->leftJoin($this->layoutType->getTable(). ' as layoutType','layoutType.id','=','product.layout_type_id')
            ->leftJoin($this->ageType->getTable(). ' as ageType','ageType.id','=','product.age_type_id');
    }
    public function getProductsMergePhoto(): array
    {
        return $this->getProductQuery()
            ->leftJoin($this->photoPath->getTable() . ' as photoPath', 'photoPath.product_id', '=', 'product.id')
            ->select([
                'product.id',
                'product.name',
                'product.product_type_id',
                'product.layout_type_id',
                'product.age_type_id',
                'product.description',
                'photoPath.path'
            ])
            ->groupBy('product.id')
            ->get()
            ->toArray();
    }

    public function getProductById(array $data): array
    {
        return $this->getProductQuery()
            ->select([
                'product.id',
                'product.name',
                'product.product_type_id',
                'productType.name_rus as productTypeRus',
                'productType.name_ukr as productTypeUkr',
                'product.layout_type_id',
                'layoutType.name_rus as layoutTypeRus',
                'layoutType.name_ukr as layoutTypeUkr',
                'product.age_type_id',
                'ageType.name_rus as ageTypeRus',
                'ageType.name_ukr as ageTypeUkr',
                'product.is_angular',
                'product.all_sizes',
                'product.sleep_sizes',
                'product.count_pillow',
                'product.description',
            ])
            ->where('product.id',$data['id'])
            ?->first()
            ->toArray() ?? [];
    }
    public function getPhotoById(array $data): array
    {
        return $this->photoPath
            ->where('product_id',$data['id'])
            ->get()
            ->toArray();
    }
}
