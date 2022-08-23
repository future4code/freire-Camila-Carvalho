### Exercício 1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) 
PRIMARY KEY - é o identificador único de um registro na tabela
NOT NULL - obrigatório preenchimento do campo
VARCHAR(255) - sequencia de caracteres (255 caracteres)

b)  
SHOW DATABASES - visualização mais rápida de diferentes bases de dados;
SHOW TABLES - mostrar tabela

c)
DESCRIBE Actor - erro


### Exercicio 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
