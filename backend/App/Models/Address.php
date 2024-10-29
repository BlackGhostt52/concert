<?php
    namespace App\Models;

    use App\Models\Crud;
    use App\Models\Core;

    class Address extends Crud
    {
        protected $core = null;
        public $table = 'endereco';
        private $filters = null;
        protected $pk  = 'id';
        public $db;
       

        public function __construct(){
            $this->db = new Core();
        }

     
        
    }