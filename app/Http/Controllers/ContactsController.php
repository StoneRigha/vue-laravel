<?php

namespace App\Http\Controllers;

use App\Models\Contacts;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    //get contacts function
    public function getContacts(){
        $contacts = Contacts::all();
        return $contacts;
    }
}
