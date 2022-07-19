<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\EmailSenderPanel;

use App\Http\Classes\LogicalModels\Common\Structure\Roles;
use App\Mail\EmailSenderMail;
use App\Models\MSSQL\TableModels\User;
use Illuminate\Support\Facades\Mail;

class EmailSenderPanelModel
{
    public function __construct(
        private User $users,
    ){}

    public function getSimpleUsers(): array
    {
        return $this->users
            ->select([
                'id',
                'name',
                'patronymic',
                'email',
                'role'
            ])->where('role', Roles::USER)
            ->get()
            ->toArray();
    }

    public function sendMailToSimpleUsers(array $simpleUsers, string $topic, string $body) : bool
    {
        try {
            foreach ($simpleUsers as $item)
            {
                //Mail::to($item['email'])->send(new EmailSenderMail($topic, $body));
                Mail::to($item)->send(new EmailSenderMail($topic, $body));
            }
        } catch (\Exception $e) {dd($e->getMessage());}
        return true;
    }
}
