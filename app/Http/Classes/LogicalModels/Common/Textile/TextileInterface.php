<?php

namespace App\Http\Classes\LogicalModels\Common\Textile;

interface TextileInterface
{
    public function getTextiles(): array;
    public function getTypes(): array;
    public function getMakers(): array;
    public function getColors(): array;
    public function getTextilesMergePhoto(): array;
    public function getTextileById(array $data): array;
    public function getPhotoById(array $data): array;
}
