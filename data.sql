-- base de datos todo_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE tablass (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(25),
    descripcion VARCHAR(50),
    fechacreacion timestamp
);


INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Second todo', 'Second todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('First todo', 'First todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Third todo', 'Third todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Fourth todo', 'Fourth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Fifth todo', 'Fifth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Sixth todo', 'Sixth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Seventh todo', 'Seventh todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Eighth todo', 'Eighth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Ninth todo', 'Ninth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Tenth todo', 'Tenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Eleventh todo', 'Eleventh todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Twelfth todo', 'Twelfth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Thirteenth todo', 'Thirteenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Fourteenth todo', 'Fourteenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Fifteenth todo', 'Fifteenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Sixteenth todo', 'Sixteenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Seventeenth todo', 'Seventeenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Eighteenth todo', 'Eighteenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Nineteenth todo', 'Nineteenth todo description', NOW());
INSERT INTO tablass (nombre, descripcion, fechacreacion)  VALUES ('Twentieth todo', 'Twentieth todo description', NOW());
