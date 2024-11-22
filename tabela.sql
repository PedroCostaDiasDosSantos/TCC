
create database db_nicwear;

use db_nicwear;

create table tb_adm(
id_login int primary key auto_increment,
nm_login varchar(200),
ds_senha varchar(200)
);

insert into tb_adm(nm_login, ds_senha)
values
('Pedro', '1234'),
('Nicolas', '1234');

create table tb_fornecedor(
id_fornecedor int primary key auto_increment,
nm_fornecedor varchar(100),
ds_cnpj varchar(14)
);

insert into tb_fornecedor(nm_fornecedor, ds_cnpj)
values
('Nike', '12.34-56');

create table tb_produto(
id_produto int primary key auto_increment,
id_fornecedor int,
nm_produto varchar(250),
ds_produto varchar(300),
vl_valor decimal(15,2),
qtd_produto int,
FOREIGN KEY (id_fornecedor) REFERENCES tb_fornecedor(id_fornecedor)
);

insert into tb_produto(id_fornecedor,nm_produto, ds_produto, vl_valor, qtd_produto)
values
(1, 'Nike P6000', 'Confortável e estiloso, Uso próprio para skate', 1899.96, 63 );

create table tb_busca(
id_busca int primary key auto_increment,
id_produto int,
nm_produto varchar(250),
ds_produto varchar(600),
FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);
