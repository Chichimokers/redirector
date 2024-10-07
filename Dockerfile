# Usa una imagen base de Node.js
FROM node:20.14.0-bullseye 

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo de la aplicación
COPY . .

# Instala las dependencias (si las hubiera)
# RUN npm install

# Expone el puerto UDP 9987
EXPOSE 9987/udp

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]


