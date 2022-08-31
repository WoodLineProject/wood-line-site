<?php

namespace App\Http\Classes\LogicalModels\Common\Textile;

class Textile implements TextileInterface
{
    public function __construct(
        private TextileModel $model
    ){}

    public function getTextiles(): array
    {
        return $this->model->getTextiles();
    }
    public function getTypes(): array
    {
        return $this->model->getTypes();
    }
    public function getMakers(): array
    {
        return $this->model->getMakers();
    }
    public function getColors(): array
    {
        return $this->model->getColors();
    }
    public function getTextilesMergePhoto(): array
    {
        return $this->model->getTextilesMergePhoto();
    }
    public function getTextileById(array $data): array
    {
        return $this->model->getTextileById($data);
    }
    public function getPhotoById(array $data): array
    {
        return $this->model->getPhotoById($data);
    }
}
