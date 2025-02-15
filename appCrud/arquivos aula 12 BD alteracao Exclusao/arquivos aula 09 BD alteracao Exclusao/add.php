

<?php 
//ATENÇÃO AONDE ESTÁ NOMEATRIBUTOAQUI , SUBSTITUA PELO NOME DO ATRIBUTO CRIADO 
//AONDE ESTÁ NOMETABELAAQUI SUBSTITUA PELO NOME DA TABELA CRIADO NO BANCO DE DADOS


include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 
 $query_buscar = $pdo->query("SELECT * from aluno where cpf = '$postjson[cpf]' ");
 $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);
 if(@count($dados_buscar) > 0){
 	 $result = json_encode(array('success'=>'CPF já Cadastrado!'));
 	 echo $result;
 	 exit();
 }else{
 	$query = $pdo->prepare("INSERT INTO aluno SET cpf = :cpf");
  
       $query->bindValue(":cpf", $postjson['cpf']);


      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }

        echo $result;
 }

 
     


?>