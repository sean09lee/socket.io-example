const https = require('http');
// const sticky = require('sticky-session');
const server = require('./components/server');
const config = require('./config');

// Create secure io server
const httpsServer = https.createServer(server);
// eslint-disable-next-line import/order
const io = require('socket.io')(httpsServer);

// Open connection for orders
const orders = require('./namespaces/orders');

orders(io);

// Open connection for health check
const health = require('./namespaces/health');

health(io);

// Track connection
io.on('connection', function(socket){
	console.debug(`Socket server connected with id ${socket.id}...`);
});

// Track disconnection
io.on('disconnect', (socket) => {
	console.debug(`Socket server disconnected with id ${socket.id}...`);
});

// Creating a HTTPS server
let serverPort = config.server.port;
httpsServer.listen(serverPort, function () {
	console.log(`Running SocketIO server at: ${config.server.protocol}://${config.server.host}:${serverPort}/`);
});