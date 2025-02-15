

<?php 
//ATENÇÃO AONDE ESTÁ NOMEATRIBUTOAQUI , SUBSTITUA PELO NOME DO ATRIBUTO CRIADO 
//AONDE ESTÁ NOMETABELAAQUI SUBSTITUA PELO NOME DA TABELA CRIADO NO BANCO DE DADOS


include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 
 $query_buscar = $pdo->query("SELECT * from usuario where email = '$postjson[email]' ");
 $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);
 if(@count($dados_buscar) > 0){
 	 $result = json_encode(array('success'=>'Email já Cadastrado!'));
 	 echo $result;
 	 exit();
 }else{
 	$query = $pdo->prepare("INSERT INTO usuario SET email = :email");
  
       $query->bindValue(":email", $postjson['email']);


      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }

        echo $result;
 }

 
     


?>