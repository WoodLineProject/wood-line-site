<?php

namespace App\Http\Classes\LogicalModels\CallMy;

class CallMy implements CallMyInterface
{
    use CallMyTrait;

    public function __construct(
        private CallMyModel $model
    ){}

    public function callMy(array $data): bool
    {
        $this->initParams($data);
        $CallBackUsersEmail = $this->model->getCallBackUsers();
        return $this->model->sendMails($CallBackUsersEmail,$this->name, $this->patronymic, $this->phone);
    }
}
