-- Criação do banco de dados
CREATE DATABASE phishing_simulation;

-- Usando o banco de dados criado
USE phishing_simulation;

-- Tabela de usuários
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    group_id INT NOT NULL
);

-- Tabela de relatórios
CREATE TABLE reports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    status VARCHAR(50),
    email VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
`user`time_zone_transition_type`user`