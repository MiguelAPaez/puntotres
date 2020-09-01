# Puntotres
Punto Tres Backend

# Docker

Para ejecutar este proyecto es necesario tener instalado Docker y la imagen del servidor de Base de Datos MySQL, para esto utilizamos la siguiente linea de código:

docker run -d -p 3306:3306 --name mysql57 -e MYSQL_ROOT_PASSWORD=secret mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

Luego para ejecutar el contenedor de MySQL es necesario utilizar el siguiente comando:

docker exec -it mysql57 mysql -p

# Base de Datos (MySQL)

Para realizar la ejecución del presente código es necesario crear una tabla en MySql llamada employee

# Crear base de datos
CREATE DATABASE IF NOT EXISTS employee; 

# Seleccionar base de datos
USE employee;

# Crear tabla employee
CREATE TABLE IF NOT EXISTS employee(
	id_employee INT auto_increment,
    fullname VARCHAR(60) NOT NULL,
    functio VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_employee)
)ENGINE=INNODB

# Correr Proyecto

Debe instalar Express y nodemon: npm i -D -g express nodemon

Para ejecutar el proyecto se utiliza el comando: nodemon . En la terminal de la carpeta donde está ubicado el proyecto.
