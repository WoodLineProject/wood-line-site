<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\UserManagement;

use App\Http\Classes\LogicalModels\Common\Structure\CacheNames;
use App\Models\MSSQL\TableModels\Role;
use App\Models\MSSQL\TableModels\User;
use Illuminate\Support\Facades\Cache;

class UserManagementModel
{
    private const CACHE_TIME = 864000;
    public function __construct(
        private User $users,
        private Role $role,
    ){}

    public function getAllUsers(): array
    {
        return $this->users->from($this->users->getTable(),'user')
            ->leftJoin($this->role->getTable(). ' as role','role.id','=','user.role')
            ->select([
                'user.name',
                'user.surname',
                'user.patronymic',
                'user.phone',
                'user.email',
                'role.name as role',
                'role.id as roleId',
            ])->get()
            ->toArray();
    }

    public function getAllRoles(): array
    {
        return Cache::remember(CacheNames::CACHE_ROLES, self::CACHE_TIME, function () {
            return $this->role->selectRaw('*')->get()->toArray();
        });
    }
}
