<?php

namespace App\Http\Classes\LogicalModels\Auth\SingIn;

use Illuminate\Support\Facades\Hash;
use App\Models\MSSQL\TableModels\{
    User,
    roles,
};

class SingInModel
{
    public function __construct(
        private roles $roles,
        private User $user,
    )
    {}

    public function getUser(array $data): array
    {
        $user = [];
        $users = $this->user->from($this->user->getTable(),'user')
            ->leftJoin($this->roles->getTable() . ' as roles',
                'user.roleId', '=', 'roles.id'
            )
            ->select([
                'user.name',
                'user.password',
                'roles.name',
                'roles.key',
            ])
            ->where('user.email',$data['email'])
            ->get()->toArray();
        foreach ($users as $u){
            if(Hash::check($data['password'], $u['password'])){
                $user = $u;
            }
        }
        return $user;
    }
}
