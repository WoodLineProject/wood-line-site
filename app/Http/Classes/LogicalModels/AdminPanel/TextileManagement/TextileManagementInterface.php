<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\TextileManagement;

interface TextileManagementInterface
{
    public function addTextileItem(array $data): bool;
    public function editTextileItem(array $data): bool;
    public function deleteTextileItem(array $data): bool;

    public function addType(array $data): bool;
    public function editType(array $data): bool;
    public function deleteType(array $data): bool;

    public function addColorType(array $data): bool;
    public function editColorType(array $data): bool;
    public function deleteColorType(array $data): bool;

    public function addMakerType(array $data): bool;
    public function editMakerType(array $data): bool;
    public function deleteMakerType(array $data): bool;

    public function getPhotoById(array $data): array;
    public function deletePhoto(array $data): bool;
    public function uploadPhoto(array $data, array $files): bool;
}
