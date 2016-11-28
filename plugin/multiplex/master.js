(function() {

<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	// Don't emit events from inside of notes windows
	if ( window.location.search.match( /receiver/gi ) ) { return; }

	var multiplex = Reveal.getConfig().multiplex;

	var socket = io.connect( multiplex.url );

	function post() {

		var messageData = {
			state: Reveal.getState(),
			secret: multiplex.secret,
			socketId: multiplex.id
		};

		socket.emit( 'multiplex-statechanged', messageData );

	};

	// Monitor events that trigger a change in state
	Reveal.addEventListener( 'slidechanged', post );
	Reveal.addEventListener( 'fragmentshown', post );
	Reveal.addEventListener( 'fragmenthidden', post );
	Reveal.addEventListener( 'overviewhidden', post );
	Reveal.addEventListener( 'overviewshown', post );
	Reveal.addEventListener( 'paused', post );
	Reveal.addEventListener( 'resumed', post );
=======
        // Don't emit events from inside of notes windows
        if ( window.location.search.match( /receiver/gi ) ) { return; }

        var multiplex = Reveal.getConfig().multiplex;

        var socket = io.connect( multiplex.url );

        function post() {

                var messageData = {
                        state: Reveal.getState(),
                        secret: multiplex.secret,
                        socketId: multiplex.id
                };

                socket.emit( 'multiplex-statechanged', messageData );

        };

        // Monitor events that trigger a change in state
        Reveal.addEventListener( 'slidechanged', post );
        Reveal.addEventListener( 'fragmentshown', post );
        Reveal.addEventListener( 'fragmenthidden', post );
        Reveal.addEventListener( 'overviewhidden', post );
        Reveal.addEventListener( 'overviewshown', post );
        Reveal.addEventListener( 'paused', post );
        Reveal.addEventListener( 'resumed', post );
>>>>>>> First PT-BR Version

}());