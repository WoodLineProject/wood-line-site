<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\TextileManagement;

use App\Http\Classes\LogicalModels\Common\Structure\CDateTime;
use App\Models\MSSQL\TableModels\{Textile, Dic_textile_color, Dic_textile_maker, Dic_textile_type, Textile_photo_path};
use Illuminate\Support\Facades\Storage;

class TextileManagementModel
{
    private const PHOTO_PATH = 'public/image/textilePhoto';
    private const FORMAT = '.jpeg';
    private const PHOTO_URL = '/storage/app/public/image/textilePhoto';

    public function __construct(
        private Textile            $textile,
        private Dic_textile_color  $textileColor,
        private Dic_textile_maker  $textileMaker,
        private Dic_textile_type   $textileType,
        private Textile_photo_path $photoPath,
    ){}

    public function addTextileItem(array $data): bool
    {
        return $this->textile->insert([
            'name' => $data['name'],
            'type_id' => $data['type_id'],
            'maker_id' => $data['maker_id'],
            'color_id' => $data['color_id'],
        ]);
    }
    public function editTextileItem(array $data): bool
    {
        return $this->textile
            ->where('id', $data['id'])
            ->update([
                'name' => $data['name'],
                'type_id' => $data['type_id'],
                'maker_id' => $data['maker_id'],
                'color_id' => $data['color_id'],
            ]);
    }
    public function deleteTextileItem(array $data): bool
    {
        $this->deletePhotoByTextileItem($data);
        return $this->textile
            ->where('id', $data['id'])
            ->delete();
    }

    public function addType(array $data): bool
    {
        return $this->textileType->insert([
            'name_ukr' => $data['name_ukr'],
            'name_rus' => $data['name_rus'],
        ]);
    }
    public function editType(array $data): bool
    {
        return $this->textileType
            ->where('id', $data['id'])
            ->update([
                'name_ukr' => $data['name_ukr'],
                'name_rus' => $data['name_rus'],
                ]);
    }
    public function deleteType(array $data): bool
    {
        $this->textile
            ->where('type_id', $data['id'])
            ->update([
               'type_id' => null
            ]);

        return $this->textileType
            ->where('id', $data['id'])
            ->delete();
    }

    public function addMakerType(array $data): bool
    {
        return $this->textileMaker->insert([
            'name_ukr' => $data['name_ukr'],
            'name_rus' => $data['name_rus'],
        ]);
    }
    public function editMakerType(array $data): bool
    {
        return $this->textileMaker
            ->where('id', $data['id'])
            ->update([
                'name_ukr' => $data['name_ukr'],
                'name_rus' => $data['name_rus'],
            ]);
    }
    public function deleteMakerType(array $data): bool
    {
        $this->textileMaker
            ->where('maker_id', $data['id'])
            ->update([
                'maker_id' => null
            ]);

        return $this->textileMaker
            ->where('id', $data['id'])
            ->delete();
    }

    public function addColorType(array $data): bool
    {
        return $this->textileColor->insert([
            'name_ukr' => $data['name_ukr'],
            'name_rus' => $data['name_rus'],
        ]);
    }
    public function editColorType(array $data): bool
    {
        return $this->textileColor
            ->where('id', $data['id'])
            ->update([
                'name_ukr' => $data['name_ukr'],
                'name_rus' => $data['name_rus'],
            ]);
    }
    public function deleteColorType(array $data): bool
    {
        $this->textileColor
            ->where('color_id', $data['id'])
            ->update([
                'color_id' => null
            ]);

        return $this->textileColor
            ->where('id', $data['id'])
            ->delete();
    }

    private function deletePhotoByTextileItem(array $data): void
    {
        $photoArray = $this->photoPath
            ->where('textile_id', $data['id'])
            ->get()
            ->toArray();
        foreach ($photoArray as $photo)
        {
            $this->deletePhoto($photo);
        }
    }

    public function getPhotoById(array $data): array
    {
        $dbArray = $this->photoPath
            ->where('textile_id', $data['id'])
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
                $newFileName = 'id_'.$data['id'].'_'.CDateTime::getCurrentDateTimeStamp().'_'.$key.self::FORMAT;
                Storage::disk('local')->putFileAs(
                    self::PHOTO_PATH,
                    $file,
                    $newFileName
                );
                $this->photoPath
                    ->insert([
                        'textile_id' => $data['id'],
                        'name' => $newFileName,
                        'path' => self::PHOTO_URL.'/'.$newFileName
                    ]);
            }
            return true;
        }catch (\Exception $e){return false;}
    }
}
