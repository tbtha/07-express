<!-- ``` -->

# Instrucciones para levantar el proyecto en Docker

Creacion de base de datos 

```sql
CREATE DATABASE todo_db;
```

Descargar modulos de node

```
npm i
```

Crear archivo .env

```
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=
PGDATABASE=todo_db
PGPORT=5432
```

Inicializar

```
npm run migrate:db 
npm run start
```

Crear archivo 
```
Dockerfile
```

### Configuracion de archivo Dockerfile

Version de node 

```
FROM node:17-alpine3.14
```

Directorio en el que trabajaremos

```
WORKDIR /usr/src/app
```

Instalacion y ejecucion de dependencias

```
COPY package\*.json ./
RUN npm install
```

Copiamos archivos correspondientes del proyecto

```
COPY . .
```

EXPONEMOS EN UN PUERTO *

```
EXPOSE 4000
```

COMANDO DE EJECUCION

```
CMD [ "node", "index.js"]
```

Reemplazamos en archivo .env 

```
HOST=host.docker.internal
```

### Ejecutar en terminal 

Creacion de contenedor por linea de comando 

```
docker build . -t otro-node-js
```

Ejecutar contenedor * configuracion de puerto

```
docker run -p 3000:3000 otro-node-js
```
