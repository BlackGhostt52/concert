<?php
    namespace App\Services;

    use App\Models\User;

    class UserService
    {
   
        public $user;
        
        public function __construct(){
            $this->user = new User();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->user->pk = $id;
                $this->user->find($id);
                return $this->user->variables;
            } else {
                
                return $this->user->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            $data['senha'] = hash('sha256', $data['senha'] );
            
            $this->user->variables = $data;

            $this->user->create($data);

            $id = $this->user->db->lastInsertId();
            
            http_response_code(201);
            return $this->get($id);
        }

        public function put() 
        {
       
            $input = file_get_contents('php://input');

            $user = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->user->variables = $user;

            if (!isset($user['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            $this->user->save();

            return $this->get($user['id']);
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->user->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->user->delete();
        }
    }