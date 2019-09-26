const orders = (io) => {
	console.info('socket connection for orders created...');
	const namespace = io.of('/orders');
	namespace.on('connection', function(socket){
		socket.on('from-client', (data) => {
			console.log(`Order ID: ${data.id}`);
			io.of('/orders').emit('from-server', data);
		});
	});
};

module.exports = orders;
