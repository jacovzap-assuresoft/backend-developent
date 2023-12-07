<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'animals';
    protected $fillable = [ 
        'name',
        'specie',
        'birthday',
        'description'
    ];
}
