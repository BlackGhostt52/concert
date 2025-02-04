<?php
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    require_once '../vendor/autoload.php';

    if ($_GET['url']) {
        $url = explode('/', $_GET['url']);

        if ($url[0] === 'api') {  
            array_shift($url);

            $service = 'App\Services\\'.ucfirst($url[0]).'Service';
            array_shift($url);

            $method = strtolower($_SERVER['REQUEST_METHOD']);
            try {

                $response = call_user_func_array(array(new $service, $method), $url);

                // http_response_code(200);
                echo json_encode($response);
                exit;

            } catch (\Exception $e) {
                http_response_code(404);
                array('errors' => ['message' => $e->getMessage()]);
                // echo json_encode(array('status' => 'error', 'data' => $e->getMessage()), JSON_UNESCAPED_UNICODE);
                exit;
            }
        } else{
            http_response_code(404);
            echo "Caminho não encontrado";
        }
    }
    