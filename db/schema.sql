--Schema--
create database burgers_db;
use database burgers_db;

create table burgers
(
	id int not null auto_increment,
	burger_name varchar(200) not null,
	devoured boolean,
	primary key(id)
);

