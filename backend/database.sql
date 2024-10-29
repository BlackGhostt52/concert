/**
 * DDL Language
 */
create database sistemaTray;
use sistemaTray;
create table variacaoDescricao(
	id int auto_increment not null,
	descricao varchar(50),
    primary key(id)
);
create table variacaoValor(
	id int auto_increment not null,
    valor varchar(100),
	
    idVariacaoDescricao int,
    primary key(id),
	foreign key (idVariacaoDescricao) references variacaoDescricao(id)
);
create table tipoUsuario(
	id int auto_increment not null,
    descricao varchar(50),
	primary key(id)
);
create table usuario(
	id int auto_increment not null,
    nome varchar(50),
    indentidade varchar(50),
    email varchar(50),
    senha varchar(40),
    
    idTipoUsuario int,
    primary key(id),
    foreign key(idTipoUsuario) references tipoUsuario(id)
);
create table endereco(
	id int auto_increment not null,
    pais varchar(50),
    estado varchar(50),
    cidade varchar(50),
    bairro varchar(50),
    rua varchar(50),
    numero varchar(50),
    logradouro varchar(50),
    
	idUsuario int,
    primary key(id),
    foreign key(idUsuario) references usuario(id)
);
create table loja(
	id int auto_increment not null,
    nome varchar(50),
    logo varchar(50),
    banner varchar(50),
    qtdproduto varchar(50),
    corfundo varchar(50),
    corfonte varchar(50),
    area varchar(50),
    cnpj varchar(50),
    
    
    idUsuario int,
    primary key(id),
    foreign key(idUsuario) references usuario(id)
);
create table produto(
	id int auto_increment not null,
    qtde int,
    valor double,
    modelo varchar(50),
    produtoDestaque BOOLEAN,
    idv1 int,
    idv2 int,
    idloja int,
    
    primary key(id),
    foreign key(idV1) references variacaoValor(id),
    foreign key(idV2) references variacaoValor(id),
	foreign key(idloja) references loja(id)
);
create table categoria(
	id int auto_increment not null,
    nome varchar(60),
	descricao varchar(60),
    primary key(id)
);
create table subcategoria(
	id int auto_increment not null,
    descricao varchar(50),
    
    idCategoria int,
     primary key(id),
    foreign key(idCategoria) references categoria(id)
);
create table subProduto(
	id int auto_increment not null,
	idProduto int,
    idSubCat int,
    
    
    primary key(id),
	foreign key(idProduto) references produto(id),
	foreign key(idSubCat) references subcategoria(id)
);
create table itemPedido(
	id int auto_increment not null,
    qtdePedida int,
    qtdeAtendida int,
    valorItem double,
    
	idProduto int,
    primary key(id),
	foreign key(idProduto) references produto(id)
);
create table pedido(
	id int auto_increment not null,
    valorTotal double,
    datap datetime,
    statusp int,
    valorFinal double,
    desconto double,
    idUsuario int,
    primary key(id),
    foreign key(idUsuario) references usuario(id)
);
create table pagamento(
	id int auto_increment not null,
    datap datetime,
    valor double,
    operacao int,
    statusp int, 
    idPedido int,
    
    primary key(id),
    foreign key(idPedido) references pedido(id)
); 
create table ticket(
    id int auto_increment not null,
    titulo varchar(50),
    descricao varchar(100),
    ticketStatus varchar(50),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    idUsuario int,
    primary key(id),
    foreign key(idUsuario) references usuario(id)
);

create table cupom(
    id int auto_increment not null,
    palavraCodigo varchar(50),
    desconto double,

    idProduto int,
    primary key(id),
	foreign key(idProduto) references produto(id)
);

/**
 * DML Language
 */
-- Populando a tabela variacaoDescricao
INSERT INTO variacaoDescricao (descricao) VALUES ('Tamanho');
INSERT INTO variacaoDescricao (descricao) VALUES ('Cor');
-- Populando a tabela variacaoValor
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES ('Pequeno', 1);
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES ('Médio', 1);
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES ('Grande', 1);
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES ('Vermelho', 2);
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES ('Azul', 2);
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES ('Verde', 2);
-- Populando a tabela tipoUsuario
INSERT INTO tipoUsuario (descricao) VALUES ('Administrador');
INSERT INTO tipoUsuario (descricao) VALUES ('Cliente');
-- Populando a tabela usuario
INSERT INTO usuario (nome, indentidade, email, senha, idTipoUsuario) VALUES ('João Silva', '123456789', 'joao.silva@email.com', 'senha123', 1);
INSERT INTO usuario (nome, indentidade, email, senha, idTipoUsuario) VALUES ('Maria Oliveira', '987654321', 'maria.oliveira@email.com', 'senha456', 2);
-- Populando a tabela endereco
INSERT INTO endereco (pais, estado, cidade, bairro, rua, numero, logradouro, idUsuario) VALUES ('Brasil', 'São Paulo', 'São Paulo', 'Centro', 'Avenida Paulista', '100', 'Apartamento 101', 1);
INSERT INTO endereco (pais, estado, cidade, bairro, rua, numero, logradouro, idUsuario) VALUES ('Brasil', 'Rio de Janeiro', 'Rio de Janeiro', 'Copacabana', 'Rua Barata Ribeiro', '200', 'Apartamento 202', 2);
-- Populando a tabela loja
INSERT INTO loja (nome, logo, banner, qtdproduto, corfundo, corfonte, area, cnpj, idUsuario) VALUES ('Loja Exemplo', 'logo.png', 'banner.png', '150', '#FFFFFF', '#000000', 'Shopping ABC', '12.345.678/0001-99', 1);
-- Populando a tabela produto
INSERT INTO produto (qtde, valor, modelo, produtoDestaque, idv1, idv2, idloja) VALUES (10, 99.90, 'Modelo A', TRUE, 1, 4, 1);
INSERT INTO produto (qtde, valor, modelo, produtoDestaque, idv1, idv2, idloja) VALUES (5, 199.90, 'Modelo B', FALSE, 2, 5, 1);
-- Populando a tabela categoria
INSERT INTO categoria (nome, descricao) VALUES ('Eletrônicos', 'Produtos eletrônicos e gadgets');
INSERT INTO categoria (nome, descricao) VALUES ('Roupas', 'Roupas e acessórios');
-- Populando a tabela subcategoria
INSERT INTO subcategoria (descricao, idCategoria) VALUES ('Celulares', 1);
INSERT INTO subcategoria (descricao, idCategoria) VALUES ('Laptops', 1);
INSERT INTO subcategoria (descricao, idCategoria) VALUES ('Camisetas', 2);
INSERT INTO subcategoria (descricao, idCategoria) VALUES ('Calças', 2);
-- Populando a tabela subProduto
INSERT INTO subProduto (idProduto, idSubCat) VALUES (1, 1);
INSERT INTO subProduto (idProduto, idSubCat) VALUES (2, 2);
-- Populando a tabela itemPedido
INSERT INTO itemPedido (qtdePedida, qtdeAtendida, valorItem, idProduto) VALUES (2, 2, 99.90, 1);
INSERT INTO itemPedido (qtdePedida, qtdeAtendida, valorItem, idProduto) VALUES (1, 1, 199.90, 2);
-- Populando a tabela pedido
INSERT INTO pedido (valorTotal, datap, statusp, valorFinal, desconto, idUsuario) VALUES (299.80, '2024-08-06 10:00:00', 1, 299.80, 0, 2);
-- Populando a tabela pagamento
INSERT INTO pagamento (datap, valor, operacao, statusp, idPedido) VALUES ('2024-08-06 10:05:00', 299.80, 1, 1, 1);
-- Populando a tabela ticket
INSERT INTO ticket (titulo, descricao, ticketStatus, idUsuario) VALUES ('Problema com pedido', 'O cliente relatou um problema com o pedido número 1.', 'Aberto', 2);
INSERT INTO ticket (titulo, descricao, ticketStatus, idUsuario) VALUES ('Erro no pagamento', 'O cliente relatou um erro no pagamento do pedido número 1.', 'Fechado', 1);

-- Populando a tabela cupom
INSERT INTO cupom (desconto, palavraCodigo, idProduto) VALUES (10.00, "PRODUTO1", 1);
INSERT INTO cupom (desconto, palavraCodigo, idProduto) VALUES (15.50, "PRODUTO2", 1);
INSERT INTO cupom (desconto, palavraCodigo, idProduto) VALUES (20.00, "PRODUTO3", 2);
INSERT INTO cupom (desconto, palavraCodigo, idProduto) VALUES (25.75, "PRODUTO4", 2);
INSERT INTO cupom (desconto, palavraCodigo, idProduto) VALUES (30.00, "PRODUTO5", 1);