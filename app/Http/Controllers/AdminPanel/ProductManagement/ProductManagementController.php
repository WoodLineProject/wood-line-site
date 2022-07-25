<?php

namespace App\Http\Controllers\AdminPanel\ProductManagement;

use App\Http\Classes\LogicalModels\AdminPanel\ProductManagement\ProductManagement;
use App\Http\Controllers\WebController;
use App\Http\Requests\ProductManagement\{AddRequest,
    DeletePhotoRequest,
    EditRequest,
    DeleteRequest,
    ProductItemRequest,
    UploadPhotoRequest};
use Illuminate\Http\JsonResponse;

class ProductManagementController extends WebController
{
    public function __construct(
        private ProductManagement $model
    ){}

    public function addType(AddRequest $request): JsonResponse
    {
        $result = $this->model->addType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editType(EditRequest $request): JsonResponse
    {
        $result = $this->model->editType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteType(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function addLayoutType(AddRequest $request): JsonResponse
    {
        $result = $this->model->addLayoutType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editLayoutType(EditRequest $request): JsonResponse
    {
        $result = $this->model->editLayoutType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteLayoutType(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteLayoutType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function addAgeType(AddRequest $request): JsonResponse
    {
        $result = $this->model->addAgeType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editAgeType(EditRequest $request): JsonResponse
    {
        $result = $this->model->editAgeType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteAgeType(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteAgeType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function addProductItem(ProductItemRequest $request): JsonResponse
    {
        $result = $this->model->addProductItem($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editProductItem(ProductItemRequest $request): JsonResponse
    {
        $result = $this->model->editProductItem($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteProductItem(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteProductItem($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function getPhotoById(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->getPhotoById($request->input());
        return $this->makeGoodResponse($result);
    }

    public function deletePhoto(DeletePhotoRequest $request): JsonResponse
    {
        $result = $this->model->deletePhoto($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function uploadPhoto(UploadPhotoRequest $request): JsonResponse
    {
        //dd($request->file('image'));
        $result = $this->model->uploadPhoto($request->input(),$request->file('image'));
        return $this->makeGoodResponse(['result' => $result]);
    }
}
