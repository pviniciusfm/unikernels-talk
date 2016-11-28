(function() {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	var multiplex = Reveal.getConfig().multiplex;
	var socketId = multiplex.id;
	var socket = io.connect(multiplex.url);

	socket.on(multiplex.id, function(data) {
		// ignore data from sockets that aren't ours
		if (data.socketId !== socketId) { return; }
		if( window.location.host === 'localhost:1947' ) return;

		Reveal.setState(data.state);
	});
=======
        var multiplex = Reveal.getConfig().multiplex;
        var socketId = multiplex.id;
        var socket = io.connect(multiplex.url);

        socket.on(multiplex.id, function(data) {
                // ignore data from sockets that aren't ours
                if (data.socketId !== socketId) { return; }
                if( window.location.host === 'localhost:1947' ) return;

                Reveal.setState(data.state);
        });
>>>>>>> First PT-BR Version
}());
