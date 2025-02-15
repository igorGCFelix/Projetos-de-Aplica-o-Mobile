create database mobile2mtec;
use mobile2mtec;

create table dados(
	id int(10) primary key auto_increment,
	nome varchar(70),
	email varchar(100),
	senha varchar(60)
);