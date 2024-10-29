<?php
    namespace App\Services;

    use App\Models\Ticket;

    class TicketService
    {
   
        public $ticket;
        
        public function __construct(){
            $this->ticket = new Ticket();
        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->ticket->pk = $id;
                $this->ticket->find($id);
                return $this->ticket->variables;
            } else {
                
                return $this->ticket->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->ticket->variables = $data;

            $this->ticket->create($data);

           
            
            return $this->ticket->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->ticket->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->ticket->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->ticket->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->ticket->delete();
        }
    }