<?php

namespace App\Http\Controllers\Common;

use App\Http\Classes\LogicalModels\Common\Textile\Textile;
use App\Http\Controllers\WebController;
use App\Http\Requests\common\GetByIdRequest;
use Illuminate\Http\JsonResponse;

class TextileController extends WebController
{
    public function __construct(
        private Textile $model
    ){}

    public function getTextiles(): JsonResponse
    {
        $result = $this->model->getTextiles();
        return $this->makeGoodResponse($result);
    }
    public function getTypes(): JsonResponse
    {
        $result = $this->model->getTypes();
        return $this->makeGoodResponse($result);
    }
    public function getMakers(): JsonResponse
    {
        $result = $this->model->getMakers();
        return $this->makeGoodResponse($result);
    }
    public function getColors(): JsonResponse
    {
        $result = $this->model->getColors();
        return $this->makeGoodResponse($result);
    }
    public function getTextilesMergePhoto(): JsonResponse
    {
        $result = $this->model->getTextilesMergePhoto();
        return $this->makeGoodResponse($result);
    }
    public function getTextileById(GetByIdRequest $request): JsonResponse
    {
        $result = $this->model->getTextileById($request->validated());
        return $this->makeGoodResponse($result);
    }
    public function getPhotoById(GetByIdRequest $request): JsonResponse
    {
        $result = $this->model->getPhotoById($request->validated());
        return $this->makeGoodResponse($result);
    }
}
