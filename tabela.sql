
create database db_nicwear;

use db_nicwear;

create table tb_adm(
id_login int primary key auto_increment,
nm_login varchar(200),
ds_senha varchar(200)
);

insert into tb_adm(nm_login, ds_senha)
values
('Pedro', 1234);

create table tb_adm_esqueci_senha(
id_esqueci_senha int primary key auto_increment,
id_login int,
ds_email varchar(200),
nmr_codigo int,
ds_senha_novamente varchar(200),
ds_senha varchar(200),
FOREIGN KEY (id_login) references tb_adm(id_login)
);

create table tb_produto(
id_produto int primary key auto_increment,
id_fornecedor int,
nm_produto varchar(250),
ds_produto varchar(300),
vl_valor decimal(15,2),
FOREIGN KEY (id_fornecedor) REFERENCES tb_fornecedor(id_fornecedor)
);

create table tb_busca(
id_busca int primary key auto_increment,
id_produto int,
nm_produto varchar(250),
ds_produto varchar(600),
FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

drop table tb_busca;

create table tb_fornecedor(
id_fornecedor int primary key auto_increment,
nm_fornecedor varchar(100),
ds_cnpj varchar(14),
id_produto int,
nm_produto varchar(200),
ds_produto varchar(300)
);

create table tb_img_compra(
id_img int primary key auto_increment,
id_produto int,
nm_img varchar(100),
FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

create table tb_info_pessoal(
id_info_pessoal int primary key auto_increment,
nm_nome varchar(250),
ds_sobrenome varchar(250),
ds_email varchar(100),
ds_cpf varchar(11),
ds_celular varchar(20),
ds_cep varchar(8)
);

