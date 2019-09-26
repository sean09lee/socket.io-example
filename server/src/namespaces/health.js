const health = (io) => {
	console.info('socket connection for health created...');
	const namespace = io.of('/health');
	namespace.on('connection', function(socket){
		socket.on('health', (data) => {
			console.info(`message is: ${data.message}`);
		});
	});
	namespace.emit('status', 'healthy');
};

module.exports = health;