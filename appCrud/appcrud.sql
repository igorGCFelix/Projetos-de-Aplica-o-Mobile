create database crudapp;
use crudapp;
drop table usuario;
create table usuario(
	id int(10) primary key auto_increment,
	nome varchar(70),
	email varchar(100),
	senha varchar(60)
);

insert into usuario (id,nome,email,senha) values('0','admin','admin@gmail.com','admin123');
