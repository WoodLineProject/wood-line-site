<?php

namespace App\Http\Classes\LogicalModels\CallMy;

use App\Mail\CallBackMail;
use App\Models\MSSQL\TableModels\{
    User,
    OrderCallBack,
};
use Illuminate\Support\Facades\Mail;


class CallMyModel
{
    public function __construct(
        private User $user,
        private OrderCallBack $orderCallBack,
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
        $this->orderCallBack->insert([
            'name' => $name,
            'patronymic' => $patronymic,
            'phone' => $phone,
        ]);
        try {
            foreach ($CallBackUsersEmail as $item)
            {
                Mail::to($item['email'])->send(new CallBackMail($name,$patronymic,$phone));
            }
        }catch (\Exception $e){dd($e->getMessage());}
        return true;
    }
}
