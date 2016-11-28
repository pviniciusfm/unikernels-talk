var http      = require('http');
var express   = require('express');
var fs        = require('fs');
var io        = require('socket.io');
var Mustache  = require('mustache');

var app       = express();
var staticDir = express.static;
var server    = http.createServer(app);

io = io(server);

var opts = {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	port :      1947,
	baseDir :   __dirname + '/../../'
=======
        port :      1947,
        baseDir :   __dirname + '/../../'
>>>>>>> First PT-BR Version
};

io.on( 'connection', function( socket ) {

<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	socket.on( 'new-subscriber', function( data ) {
		socket.broadcast.emit( 'new-subscriber', data );
	});

	socket.on( 'statechanged', function( data ) {
		delete data.state.overview;
		socket.broadcast.emit( 'statechanged', data );
	});

	socket.on( 'statechanged-speaker', function( data ) {
		delete data.state.overview;
		socket.broadcast.emit( 'statechanged-speaker', data );
	});
=======
        socket.on( 'new-subscriber', function( data ) {
                socket.broadcast.emit( 'new-subscriber', data );
        });

        socket.on( 'statechanged', function( data ) {
                delete data.state.overview;
                socket.broadcast.emit( 'statechanged', data );
        });

        socket.on( 'statechanged-speaker', function( data ) {
                delete data.state.overview;
                socket.broadcast.emit( 'statechanged-speaker', data );
        });
>>>>>>> First PT-BR Version

});

[ 'css', 'js', 'images', 'plugin', 'lib' ].forEach( function( dir ) {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	app.use( '/' + dir, staticDir( opts.baseDir + dir ) );
=======
        app.use( '/' + dir, staticDir( opts.baseDir + dir ) );
>>>>>>> First PT-BR Version
});

app.get('/', function( req, res ) {

<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	res.writeHead( 200, { 'Content-Type': 'text/html' } );
	fs.createReadStream( opts.baseDir + '/index.html' ).pipe( res );
=======
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        fs.createReadStream( opts.baseDir + '/index.html' ).pipe( res );
>>>>>>> First PT-BR Version

});

app.get( '/notes/:socketId', function( req, res ) {

<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	fs.readFile( opts.baseDir + 'plugin/notes-server/notes.html', function( err, data ) {
		res.send( Mustache.to_html( data.toString(), {
			socketId : req.params.socketId
		}));
	});
=======
        fs.readFile( opts.baseDir + 'plugin/notes-server/notes.html', function( err, data ) {
                res.send( Mustache.to_html( data.toString(), {
                        socketId : req.params.socketId
                }));
        });
>>>>>>> First PT-BR Version

});

// Actually listen
server.listen( opts.port || null );

var brown = '\033[33m',
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	green = '\033[32m',
	reset = '\033[0m';
=======
        green = '\033[32m',
        reset = '\033[0m';
>>>>>>> First PT-BR Version

var slidesLocation = 'http://localhost' + ( opts.port ? ( ':' + opts.port ) : '' );

console.log( brown + 'reveal.js - Speaker Notes' + reset );
console.log( '1. Open the slides at ' + green + slidesLocation + reset );
console.log( '2. Click on the link in your JS console to go to the notes page' );
console.log( '3. Advance through your slides and your notes will advance automatically' );
