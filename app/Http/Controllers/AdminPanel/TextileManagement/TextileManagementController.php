<?php

namespace App\Http\Controllers\AdminPanel\TextileManagement;

use App\Http\Classes\LogicalModels\AdminPanel\TextileManagement\TextileManagement;
use App\Http\Controllers\WebController;
use App\Http\Requests\TextileManagement\{AddRequest,
    DeletePhotoRequest,
    EditRequest,
    DeleteRequest,
    TextileItemRequest,
    UploadPhotoRequest};
use Illuminate\Http\JsonResponse;

class TextileManagementController extends WebController
{
    public function __construct(
        private TextileManagement $model
    ){}

    public function addTextileItem(TextileItemRequest $request): JsonResponse
    {
        $result = $this->model->addTextileItem($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editTextileItem(TextileItemRequest $request): JsonResponse
    {
        $result = $this->model->editTextileItem($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteTextileItem(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteTextileItem($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

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

    public function addColorType(AddRequest $request): JsonResponse
    {
        $result = $this->model->addColorType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editColorType(EditRequest $request): JsonResponse
    {
        $result = $this->model->editColorType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteColorType(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteColorType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function addMakerType(AddRequest $request): JsonResponse
    {
        $result = $this->model->addMakerType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editMakerType(EditRequest $request): JsonResponse
    {
        $result = $this->model->editMakerType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function deleteMakerType(DeleteRequest $request): JsonResponse
    {
        $result = $this->model->deleteMakerType($request->input());
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
        $result = $this->model->uploadPhoto($request->input(),$request->file('image'));
        return $this->makeGoodResponse(['result' => $result]);
    }
}
