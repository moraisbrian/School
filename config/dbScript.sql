CREATE DATABASE school;

CREATE TABLE coordenador(
    id serial primary key,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    ativo bool,
    dataCadastro date
);

CREATE TABLE tipo_curso(
    id serial primary key,
    identificacao varchar(50) not null,
    ativo bool,
    dataCadastro date
);

CREATE TABLE curso(
    id serial primary key,
    identificacao varchar(50),
    ativo bool,
    dataCadastro date,
    tipoId int,
    coordenadorId int,
    constraint fk_tipo foreign key (tipoId)
    references tipo_curso (id),
    constraint fk_coordenador foreign key (coordenadorId)
    references coordenador (id)
);