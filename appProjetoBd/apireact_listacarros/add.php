<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 
 $query_buscar = $pdo->query("SELECT * from carros where placa = '$postjson[placa]' ");
 $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);
 if(@count($dados_buscar) > 0){
 	 $result = json_encode(array('success'=>'Carro já Cadastrado!'));
 	 echo $result;
 	 exit();
 }
 else{
 	$query = $pdo->prepare("INSERT INTO carros SET modelo = :modelo, marca = :marca, placa = :placa, cor = :cor ");
  
       $query->bindValue(":modelo", $postjson['modelo']);
       $query->bindValue(":marca", $postjson['marca']);
       $query->bindValue(":placa", $postjson['placa']);
       $query->bindValue(":cor", $postjson['cor']);
      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }

        echo $result;
 }

 
     


?>