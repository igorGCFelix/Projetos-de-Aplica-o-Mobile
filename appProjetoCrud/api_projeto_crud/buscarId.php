<?php 

include_once('conexao.php');

$id = $_GET['id'];

$query = $pdo->query("SELECT * from carros where id = '$id'");

 $res = $query->fetchAll(PDO::FETCH_ASSOC);

 	for ($i=0; $i < count($res); $i++) { 
      foreach ($res[$i] as $key => $value) {
      }
 		
    $id = $res[$i]['id'];
    $modelo = $res[$i]['modelo'];
    $placa = $res[$i]['placa'];
    $marca = $res[$i]['marca'];
    $tipoCarro = $res[$i]['tipoCarro'];


 		}

        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'id'=>$id, 'modelo'=>$modelo, 'placa'=>$placa, 'marca'=>$marca, 'tipoCarro'=>$tipoCarro));

            }else{
                $result = json_encode(array('success'=>false, 'result'=>'0'));

            }
            echo $result;

 ?>