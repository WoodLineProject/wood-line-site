<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\EmailSenderPanel;

use Illuminate\Support\Arr;

trait EmailSenderPanelTrait
{
    private string $topic;
    private string $body;
    private array $selectedUsers;

    public function initParams(array $data): void
    {
        $this->topic = Arr::get($data, 'topic');
        $this->body = Arr::get($data, 'body');
        $this->selectedUsers = Arr::get($data, 'selectedUsers');
    }
}
