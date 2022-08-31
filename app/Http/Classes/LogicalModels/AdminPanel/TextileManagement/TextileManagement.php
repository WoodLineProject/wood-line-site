<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\TextileManagement;

class TextileManagement implements TextileManagementInterface
{
    public function __construct(
        private TextileManagementModel $model
    ){}

    public function addTextileItem(array $data): bool
    {
        return $this->model->addTextileItem($data);
    }
    public function editTextileItem(array $data): bool
    {
        return $this->model->editTextileItem($data);
    }
    public function deleteTextileItem(array $data): bool
    {
        return $this->model->deleteTextileItem($data);
    }

    public function addType(array $data): bool
    {
        return $this->model->addType($data);
    }
    public function editType(array $data): bool
    {
        return $this->model->editType($data);
    }
    public function deleteType(array $data): bool
    {
        return $this->model->deleteType($data);
    }

    public function addColorType(array $data): bool
    {
        return $this->model->addColorType($data);
    }
    public function editColorType(array $data): bool
    {
        return $this->model->editColorType($data);
    }
    public function deleteColorType(array $data): bool
    {
        return $this->model->deleteColorType($data);
    }

    public function addMakerType(array $data): bool
    {
        return $this->model->addMakerType($data);
    }
    public function editMakerType(array $data): bool
    {
        return $this->model->editMakerType($data);
    }
    public function deleteMakerType(array $data): bool
    {
        return $this->model->deleteMakerType($data);
    }

    public function getPhotoById(array $data): array
    {
        return $this->model->getPhotoById($data);
    }
    public function deletePhoto(array $data): bool
    {
        return $this->model->deletePhoto($data);
    }
    public function uploadPhoto(array $data, array $files): bool
    {
        return $this->model->uploadPhoto($data, $files);
    }
}
