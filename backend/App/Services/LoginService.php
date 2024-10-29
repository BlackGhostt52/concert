<?php
namespace App\Services;

require_once __DIR__ . '/../../vendor/autoload.php';

use App\Models\User;
use Firebase\JWT\JWT;
// use Firebase\JWT\Key;


class LoginService {

    public $user;
    
    public function __construct(){
        $this->user = new User();
    }

    public function post() {
        $input = file_get_contents('php://input');

        $data = json_decode($input, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \Exception('Dados devem ter formato json');
        } 
        
        $this->user->variables = $data;

        $email = $data['email'];
        $senha = $data['senha'];

        $senhaHash = hash('sha256', $senha);

        // Defina os campos e o valor para a busca
        $fields = $email;

        // Chame a função search para buscar o usuário
        $result = $this->user->findByEmail($fields);

        // Verifica se algum usuário foi encontrado
        if ($result && !empty($result)) {
            $user = $result;

            $key = 'sistemaTray@123';

            $iat = time();
            $exp = time() + 60 * 60 * 3; // 3 hours

            $payload = [
                'sub' => $user['id'],
                'iat' => $iat,
                'exp' => $exp,
            ];

            $token= JWT::encode($payload, $key, 'HS256');
            // $decoded = JWT::decode($token, new Key($key, 'HS256'));

            // Comparação direta da senha
            if ($senhaHash === $user['senha']) {
                http_response_code(200);
                return array('access_token' => $token, 'iat' => $iat, 'exp' => $exp, 'user_id' => $user['id']);
            } else {
                http_response_code(401);
                return array('errors' => ['message' => 'Email ou senha inválidos']);
            }
        } else {
            return ['message' => 'Email ou senha inválidos'];
        }
    }
}