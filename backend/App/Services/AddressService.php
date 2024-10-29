<?php
    namespace App\Services;

    use App\Models\Address;

    class AddressService
    {
   
        public $address;
        
        public function __construct(){
            $this->address = new Address();
        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->address->pk = $id;
                $this->address->find($id);
                return $this->address->variables;
            } else {
                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                $this->address->pagination = $data["pagination"];
                $this->address->variables = $data["filter"];

                return $this->address->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->address->variables = $data;

            $this->address->create($data);

           
            
            return $this->address->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->address->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->address->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->address->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->address->delete();
        }
    }