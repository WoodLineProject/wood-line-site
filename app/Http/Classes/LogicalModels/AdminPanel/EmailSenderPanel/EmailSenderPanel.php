<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\EmailSenderPanel;

class EmailSenderPanel implements EmailSenderPanelInterface
{
    use EmailSenderPanelTrait;

    public function __construct(
        private EmailSenderPanelModel $model
    ){}

    public function getSimpleUsers(): array
    {
        return $this->model->getSimpleUsers();
    }

    public function sendMailToSimpleUsers(array $data): bool
    {
        $this->initParams($data);
        //$simpleUsers = $this->model->getSimpleUsers();
        return $this->model->sendMailToSimpleUsers($this->selectedUsers, $this->topic, $this->body);
    }
}
