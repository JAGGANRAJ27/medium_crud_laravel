<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    protected $table = 'clients';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'dob',
        'description',
        'username',
        'password'
    ];
}
