<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\EmailSenderPanel;

interface EmailSenderPanelInterface
{
    public function getSimpleUsers(): array;

    public function sendMailToSimpleUsers(array $data): bool;
}
