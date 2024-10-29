<?php

namespace App\Models;

use App\Models\Core;

class Crud {

public $db;

public $variables;

public $pagination;

public function __construct($data = array()) {
    $this->db =  new Core();	
    $this->variables  = $data;
    $this->pagination = array();
}

public function __set($name,$value){
    
    $this->variables[$name] = $value;
    
    // if(strtolower($name) === $this->pk) {
    //     $this->variables[$this->pk] = $value;
    // }
    // else {
    //     $this->variables[$name] = $value;
    // }
}

public function __get($name)
{	
    if(is_array($this->variables)) {
        if(array_key_exists($name,$this->variables)) {
            return $this->variables[$name];
        }
    }

    return null;
}


public function save($id = "0") {

    $this->variables[$this->pk] = (empty($this->variables[$this->pk])) ? $id : $this->variables[$this->pk];

    $fieldsvals = '';
    $columns = array_keys($this->variables);

    foreach($columns as $column)
    {
        if($column !== $this->pk)
        $fieldsvals .= $column . " = :". $column . ",";
    }

    $fieldsvals = substr_replace($fieldsvals , '', -1);

    if(count($columns) > 1 ) {

        $sql = "UPDATE " . $this->table .  " SET " . $fieldsvals . " WHERE " . $this->pk . "= :" . $this->pk;
        if($id === "0" && $this->variables[$this->pk] === "0") { 
            unset($this->variables[$this->pk]);
            $sql = "UPDATE " . $this->table .  " SET " . $fieldsvals;
        }

     
        return $this->exec($sql);
    }

 

    return null;
}

public function create() { 
    $bindings   	= $this->variables;

    if(!empty($bindings)) {
        $fields     =  array_keys($bindings);
        $fieldsvals =  array(implode(",",$fields),":" . implode(",:",$fields));
        $sql 		= "INSERT INTO ".$this->table." (".$fieldsvals[0].") VALUES (".$fieldsvals[1].")";
    }
    else {
        $sql 		= "INSERT INTO ".$this->table." () VALUES ()";
    }

    // echo $sql;exit;
    return $this->exec($sql);
}

public function delete($id = "") {
    $id = (empty($this->variables[$this->pk])) ? $id : $this->variables[$this->pk];

    if(!empty($id)) {
        $sql = "DELETE FROM " . $this->table . " WHERE " . $this->pk . "= :" . $this->pk. " LIMIT 1" ;
    }

    return $this->exec($sql, array($this->pk=>$id));
}

public function find($id = "") {
    $id = (empty($this->variables[$this->pk])) ? $id : $this->variables[$this->pk];

    if(!empty($id)) {
        $sql = "SELECT * FROM " . $this->table ." WHERE " . $this->pk . "= :" . $this->pk . " LIMIT 1";	
        
        $result = $this->db->row($sql, array($this->pk=>$id));
        $this->variables = ($result != false) ? $result : null;
    }
}

public function findByEmail($email = "") {

    if(!empty($email)) {
        $sql = 'SELECT * FROM ' . $this->table .' WHERE email = "' . $email . '"';	
        
        $result = $this->db->row($sql);
        return $result;
        $this->variables = ($result != false) ? $result : null;
    }
}

public function search($fields = array(), $sort = array()) {
    $bindings = empty($fields) ? $this->variables : $fields;

    $sql = "SELECT * FROM " . $this->table;

    if (!empty($bindings)) {
        $fieldsvals = array();
        $columns = array_keys($bindings);
        foreach($columns as $column) {
            $fieldsvals [] = $column . " = :". $column;
        }
        $sql .= " WHERE " . implode(" AND ", $fieldsvals);
    }
    
    if (!empty($sort)) {
        $sortvals = array();
        foreach ($sort as $key => $value) {
            $sortvals[] = $key . " " . $value;
        }
        $sql .= " ORDER BY " . implode(", ", $sortvals);
    }

    if(isset($this->pagination["getStart"])) {
        $sql .= " limit " . $this->pagination["getStart"] . ",".   $this->pagination["getLimit"];
    }

    return $this->exec($sql);
}

public function all(){
    return $this->db->query("SELECT * FROM " . $this->table);
}

public function min($field)  {
    if($field)
    return $this->db->single("SELECT min(" . $field . ")" . " FROM " . $this->table);
}

public function max($field)  {
    if($field)
    return $this->db->single("SELECT max(" . $field . ")" . " FROM " . $this->table);
}

public function avg($field)  {
    if($field)
    return $this->db->single("SELECT avg(" . $field . ")" . " FROM " . $this->table);
}

public function sum($field)  {
    if($field)
    return $this->db->single("SELECT sum(" . $field . ")" . " FROM " . $this->table);
}

public function count($field)  {
    if($field)
    return $this->db->single("SELECT count(" . $field . ")" . " FROM " . $this->table);
}	


private function exec($sql, $array = null) {
    $array !== null ? $array : $this->variables;
    
    if($array !== null) {

        echo "primeiro if";

        $result =  $this->db->query($sql, $array);	
    }
    else {

        $result =  $this->db->query($sql, $this->variables);
	
    }
    
 
    $this->variables = array();

    return $result;
}

}

?>