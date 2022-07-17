<?php

namespace App\Http\Controllers\AdminPanel\EmailSenderPanel;

use App\Http\Classes\LogicalModels\AdminPanel\EmailSenderPanel\EmailSenderPanel;
use App\Http\Controllers\WebController;
use App\Http\Requests\EmailSenderRequest;
use Illuminate\Http\JsonResponse;

class EmailSenderPanelController extends WebController
{
    public function __construct(
        private EmailSenderPanel $model
    ) {}

    public function getSimpleUsers(): JsonResponse
    {
        $result = $this->model->getSimpleUsers();

        return $this->makeGoodResponse($result);
    }

    public function sendMailToSimpleUsers(EmailSenderRequest $request): JsonResponse
    {
        $result = $this->model->sendMailToSimpleUsers($request->input());

        return $this->makeGoodResponse(['result' => $result]);
    }

}
