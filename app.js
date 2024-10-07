// app.js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const FORWARD_IP = '51.79.51.17';
const FORWARD_PORT = 6338;

server.on('message', (msg, rinfo) => {
    console.log(`Mensaje recibido de ${rinfo.address}:${rinfo.port}`);
    
    // Crear un socket para enviar el mensaje
    const client = dgram.createSocket('udp4');
    client.send(msg, FORWARD_PORT, FORWARD_IP, (err) => {
        if (err) {
            console.error('Error al enviar el mensaje:', err);
        }
        client.close();
    });
});

server.on('error', (err) => {
    console.error(`Error del servidor:\n${err.stack}`);
    server.close();
});

server.bind(9987, () => {
    console.log('Servidor escuchando en el puerto 9987');
});