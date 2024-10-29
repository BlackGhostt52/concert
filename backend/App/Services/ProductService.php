<?php
    namespace App\Services;

    use App\Models\Product;

    class ProductService
    {
   
        public $product;
        
        public function __construct(){
            $this->product = new Product();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->product->pk = $id;
                $this->product->find($id);
                return $this->product->variables;
            } else {
                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                $this->product->pagination = $data["pagination"];
                $this->product->variables = $data["filter"];
               
                return $this->product->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->product->variables = $data;

            $this->product->create($data);

           
            
            return $this->product->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->product->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->product->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->product->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->product->delete();
        }
    }