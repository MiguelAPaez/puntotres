# Puntotres
Punto Tres Backend

Para realizar la ejecución del presente código es necesario crear una tabla en MySql llamada employee

# Crear tabla employee
CREATE TABLE IF NOT EXISTS employee(
	id_employee INT auto_increment,
    fullname VARCHAR(60) NOT NULL,
    functio VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_employee)
)ENGINE=INNODB

Instalar en su maquina mysql: npm i mysql

Además de instalar Express y nodemon: npm i -D -g express nodemon

Para ejecutar el proyecto se utiliza el comando: nodemon . En la terminal de la carpeta donde está ubicado el proyecto.
