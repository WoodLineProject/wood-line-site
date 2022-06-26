<?php

namespace App\Http\Classes\LogicalModels\Auth\Register;

use Illuminate\Support\Facades\Hash;
use App\Models\MSSQL\TableModels\{
    User
};
class RegisterModel implements RegisterInterface
{

    private const DEF_ROLE = 1;

    public function __construct(
       private User $user,
    )
    {}

    public function register(array $data): bool
    {
        $data['roleId'] =  self::DEF_ROLE;
        $data['password'] = Hash::make($data['password']);
        return $this->user->insert($data);
    }
}
