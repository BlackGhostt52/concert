<?php
    namespace App\Models;

    use App\Models\Crud;
    use App\Models\Core;

    class TypeUser extends Crud
    {
        protected $core = null;
        public $table = 'tipoUsuario';
        private $filters = null;
        protected $pk  = 'id';
        public $db;
       

        public function __construct(){
            $this->db = new Core();
        }

  

        // echo "Teste";  

        

        // public function create()
        // {
        //     $this->core->create();
        // }

        
        
    }