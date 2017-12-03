drop database if exists burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(

    id int (16) auto_increment not null,
    burger_name varchar (128) not null,
    devoured boolean not null,
    date timestamp not null,
    primary key (id)
);
