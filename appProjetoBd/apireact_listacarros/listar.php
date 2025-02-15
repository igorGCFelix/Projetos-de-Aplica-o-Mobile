<?php 

include_once('conexao.php');

$busca = '%' .$_GET['busca']. '%';

$query = $pdo->query("SELECT * from carros where modelo LIKE '$busca'");

 $res = $query->fetchAll(PDO::FETCH_ASSOC);

 	for ($i=0; $i < count($res); $i++) { 
      foreach ($res[$i] as $key => $value) {
      }
 		$dados[] = array(
 			'id' => $res[$i]['id'],
 			'modelo' => $res[$i]['modelo'],
			'marca' => $res[$i]['marca'],
            'placa' => $res[$i]['placa'],
            'cor' => $res[$i]['cor'],
                              
 		);

 		}

        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'result'=>$dados));

            }else{
                $result = json_encode(array('success'=>false, 'result'=>'0'));

            }
            echo $result;

 ?>