CREATE DATABASE school;

CREATE TABLE coordenador(
    id serial primary key,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    ativo boolean,
    dataCadastro timestamp default now()
);

CREATE TABLE tipo_curso(
    id serial primary key,
    identificacao varchar(50) not null,
    ativo boolean,
    dataCadastro timestamp default now()
);

CREATE TABLE curso(
    id serial primary key,
    identificacao varchar(50),
    ativo boolean,
    dataCadastro timestamp default now(),
    tipoId int,
    coordenadorId int,
    constraint fk_tipo foreign key (tipoId)
    references tipo_curso (id),
    constraint fk_coordenador foreign key (coordenadorId)
    references coordenador (id)
);

CREATE TABLE aluno(
    id serial primary key,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    ativo boolean,
    dataCadastro timestamp default now(),
    cursoId int,
    constraint fk_curso foreign key (cursoId)
    references curso (id)
);

CREATE TABLE tb_login(
    id serial primary key,
    usuario varchar(32) not null,
    senha varchar(32) not null
);