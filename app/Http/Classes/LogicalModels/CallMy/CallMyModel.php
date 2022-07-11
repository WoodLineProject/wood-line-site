<?php

namespace App\Http\Classes\LogicalModels\CallMy;

use App\Models\MSSQL\TableModels\User;

class CallMyModel
{
    public function __construct(
        private User $user
    ){}

    public function getCallBackUsers(): array
    {
        return $this->user
            ->select(['email'])
            ->where('getCallBackResponse', true)
            ->get()
            ->toArray();
    }

    public function sendMails(array $CallBackUsersEmail, string $name, string $patronymic, string $phone): bool
    {

    }
}
