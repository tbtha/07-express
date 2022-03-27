<!-- ``` -->

# Instrucciones para levantar el proyecto en Docker

Creacion de base de datos 

```sql
CREATE DATABASE tablas_db;
```

Descargar modulos de node

```
npm i
```

Modificar archivo .env 

```
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=
PGDATABASE=tablas_db
PGPORT=
```

Creacion de tabla e inicializar 

```
npm run migrate:db 
npm run start
```
 

Reemplazamos en archivo .env 

```
HOST=host.docker.internal
```

### Ejecutar en terminal para levantar el proyecto en docker

Creacion de contenedor por linea de comando 

```
docker build . -t otro-node-js
```

Ejecutar contenedor * configuracion de puerto

```
docker run -p 3000:3000 otro-node-js
```
