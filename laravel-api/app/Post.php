<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $fillable = [
        'id', 'title', 'body', 'article_id'
    ];

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
