<?php
    namespace App\Services;

    use App\Models\Byproduct;

    class ByproductService
    {

        public $byproduct;

        public function __construct(){
            $this->byproduct = new Byproduct();


        }

        public function get($id = null) 
        {
            if ($id) {
                $this->byproduct->pk = $id;
                $this->byproduct->find($id);
                return $this->byproduct->variables;
            } else {

                return $this->byproduct->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            $this->byproduct->variables = $data;

            $this->byproduct->create($data);



            return $this->byproduct->db->lastInsertId();
        }

        public function put() 
        {


            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->byproduct->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->byproduct->save();

        }

        public function delete() 
        {

            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->byproduct->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->byproduct->delete();
        }
    }