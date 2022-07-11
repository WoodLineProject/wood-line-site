<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\UserManagement;

use App\Http\Classes\LogicalModels\Common\Structure\CacheNames;
use App\Models\MSSQL\TableModels\Role;
use App\Models\MSSQL\TableModels\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;

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
                'user.id',
                'user.name',
                'user.surname',
                'user.patronymic',
                'user.phone',
                'user.email',
                'user.getCallBackResponse',
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

    public function editUser(array $data): bool
    {
        return $this->users
            ->where('id',$data['id'])
            ->update([
                'name' => $data['name'],
                'surname' => $data['surname'],
                'patronymic' => $data['patronymic'],
                'email' => $data['email'],
                'phone' => $data['phone'],
                'role' => $data['role'],
                'getCallBackResponse' => $data['getCallBackResponse'],
            ]);
    }

    public function deleteUser(array $data): bool
    {
        return $this->users
            ->where('id',$data['id'])
            ->delete();
    }

    public function changePass(array $data): bool
    {
        return $this->users
            ->where('id',$data['id'])
            ->update([
                'password' => Hash::make($data['password']),
            ]);
    }

    public function addUser(array $data): bool
    {
        return $this->users->insert([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'patronymic' => $data['patronymic'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
            'role' => $data['role'],
            'getCallBackResponse' => $data['getCallBackResponse'],
        ]);
    }

}
