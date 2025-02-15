create database listaCarros;
use listaCarros;

create table carros(
	id int(10) primary key auto_increment,
	modelo varchar(50) not null,
	marca varchar(50) not null,
	placa varchar(7) not null,
	cor varchar(50) not null
);

insert into carros (modelo,marca,placa,cor) values('Corsa','Chevrolet','LSN4I49','azul');