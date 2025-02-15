<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 $query = $pdo->prepare("UPDATE carros SET modelo = :modelo, placa = :placa, marca = :marca, tipoCarro = :tipoCarro WHERE id = :id ");
  
       $query->bindValue(":modelo", $postjson['modelo']);
       $query->bindValue(":placa", $postjson['placa']);
       $query->bindValue(":marca", $postjson['marca']);
       $query->bindValue(":tipoCarro", $postjson['tipoCarro']);
       $query->bindValue(":id", $postjson['id']);
      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }
     echo $result;


?>