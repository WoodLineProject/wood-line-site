<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\EmailSenderPanel;

use App\Mail\EmailSenderMail;
use App\Models\MSSQL\TableModels\User;
use App\Models\MSSQL\TableModels\Role;
use Illuminate\Support\Facades\Mail;

class EmailSenderPanelModel
{
    public function __construct(
        private User $users,
        private Role $role,
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
            ])->where('role', '=', 1)
            ->get()
            ->toArray();
    }

    public function sendMailToSimpleUsers(array $simpleUsers, string $topic, string $body) : bool
    {
        try {
            foreach ($simpleUsers as $item)
            {
                Mail::to($item['email'])->send(new EmailSenderMail($topic, $body));
            }
        } catch (\Exception $e) {dd($e->getMessage());}
        return true;
    }
}
