const { io } = require('../index');
// mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');
    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });
    client.on('emit-ruta-centro', (payload) => {
        io.emit('ruta-centro', payload);
    });
    client.on('emit-ruta-rotaria', (payload) => {
        io.emit('ruta-rotaria', payload);
    });
    client.on('emit-ruta-linares', (payload) => {
        io.emit('ruta-linares', payload);
    });
});