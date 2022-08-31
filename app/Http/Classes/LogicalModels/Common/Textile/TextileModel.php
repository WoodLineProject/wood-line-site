<?php

namespace App\Http\Classes\LogicalModels\Common\Textile;

use App\Models\MSSQL\TableModels\{Textile, Textile_photo_path, Dic_textile_type, Dic_textile_maker, Dic_textile_color};
use Illuminate\Database\Eloquent\Builder;

class TextileModel
{
    public function __construct
    (
        private Textile $textile,
        private Textile_photo_path $photoPath,
        private Dic_textile_type $textileType,
        private Dic_textile_maker $textileMaker,
        private Dic_textile_color $textileColor,
    ){}

    public function getTextiles(): array
    {
        return $this->getTextileQuery()
            ->select([
                'textile.id',
                'textile.name',
                'textile.type_id',
                'textileType.name_rus as textileTypeRus',
                'textileType.name_ukr as textileTypeUkr',
                'textile.maker_id',
                'textileMaker.name_rus as textileMakerRus',
                'textileMaker.name_ukr as textileMakerUkr',
                'textile.color_id',
                'textileColor.name_rus as textileColorRus',
                'textileColor.name_ukr as textileColorUkr',
            ])
            ->get()
            ->toArray();
    }
    private function getTextileQuery(): Builder
    {
        return $this->textile->from($this->textile->getTable(), 'textile')
            ->leftJoin($this->textileType->getTable(). ' as textileType', 'textileType.id', '=', 'textile.type_id')
            ->leftJoin($this->textileMaker->getTable(). ' as textileMaker', 'textileMaker.id', '=', 'textile.maker_id')
            ->leftJoin($this->textileColor->getTable(). ' as textileColor', 'textileColor.id', '=', 'textile.color_id');
    }

    public function getTypes(): array
    {
        return $this->textileType
            ->get()
            ->toArray();
    }
    public function getMakers(): array
    {
        return $this->textileMaker
            ->get()
            ->toArray();
    }
    public function getColors(): array
    {
        return $this->textileColor
            ->get()
            ->toArray();
    }

    public function getTextilesMergePhoto(): array
    {
        return $this->getTextileQuery()
            ->leftJoin($this->photoPath->getTable(). ' as photoPath', 'photoPath.textile_id', '=', 'textile.id')
            ->select([
                'textile.id',
                'textile.name',
                'textile.type_id',
                'textile.maker_id',
                'textile.color_id',
                'photoPath.path'
            ])
            ->groupBy('textile.id')
            ->get()
            ->toArray();
    }

    public function getTextileById(array $data): array
    {
        return $this->getTextileQuery()
            ->select([
                'textile.id',
                'textile.name',
                'textile.type_id',
                'textileType.name_rus as textileTypeRus',
                'textileType.name_ukr as textileTypeUkr',
                'textile.maker_id',
                'textileMaker.name_rus as textileMakerRus',
                'textileMaker.name_ukr as textileMakerUkr',
                'textile.color_id',
                'textileColor.name_rus as textileColorRus',
                'textileColor.name_ukr as textileColorUkr',
            ])
            ->where('textile.id', $data['id'])
            ?->first()
            ->toArray ?? [];
    }

    public function getPhotoById(array $data): array
    {
        return $this->photoPath
            ->where('textile_id', $data['id'])
            ->get()
            ->toArray();
    }
}
