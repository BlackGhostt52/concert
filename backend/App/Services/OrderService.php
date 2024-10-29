<?php
    namespace App\Services;

    use App\Models\Order;

    class OrderService
    {

        public $order;

        public function __construct(){
            $this->order = new Order();


        }

        public function get($id = null) 
        {
            if ($id) {
                $this->order->pk = $id;
                $this->order->find($id);
                return $this->order->variables;
            } else {

                return $this->order->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            $this->order->variables = $data;

            $this->order->create($data);



            return $this->order->db->lastInsertId();
        }

        public function put() 
        {


            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->order->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->order->save();

        }

        public function delete() 
        {

            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->order->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->order->delete();
        }
    }