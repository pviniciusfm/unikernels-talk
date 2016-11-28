/**
 * phantomjs script for printing presentations to PDF.
 *
 * Example:
 * phantomjs print-pdf.js "http://lab.hakim.se/reveal-js?print-pdf" reveal-demo.pdf
 *
 * By Manuel Bieh (https://github.com/manuelbieh)
 */

// html2pdf.js
var page = new WebPage();
var system = require( 'system' );

var slideWidth = system.args[3] ? system.args[3].split( 'x' )[0] : 960;
var slideHeight = system.args[3] ? system.args[3].split( 'x' )[1] : 700;

page.viewportSize = {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	width: slideWidth,
	height: slideHeight
=======
        width: slideWidth,
        height: slideHeight
>>>>>>> First PT-BR Version
};

// TODO
// Something is wrong with these config values. An input
// paper width of 1920px actually results in a 756px wide
// PDF.
page.paperSize = {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	width: Math.round( slideWidth * 2 ),
	height: Math.round( slideHeight * 2 ),
	border: 0
=======
        width: Math.round( slideWidth * 2 ),
        height: Math.round( slideHeight * 2 ),
        border: 0
>>>>>>> First PT-BR Version
};

var inputFile = system.args[1] || 'index.html?print-pdf';
var outputFile = system.args[2] || 'slides.pdf';

if( outputFile.match( /\.pdf$/gi ) === null ) {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	outputFile += '.pdf';
=======
        outputFile += '.pdf';
>>>>>>> First PT-BR Version
}

console.log( 'Printing PDF (Paper size: '+ page.paperSize.width + 'x' + page.paperSize.height +')' );

page.open( inputFile, function( status ) {
<<<<<<< 9688f78d275b57a5e42290870c1e6620afea5edb
	window.setTimeout( function() {
		console.log( 'Printed successfully' );
		page.render( outputFile );
		phantom.exit();
	}, 1000 );
} );

=======
        window.setTimeout( function() {
                console.log( 'Printed successfully' );
                page.render( outputFile );
                phantom.exit();
        }, 1000 );
} );
>>>>>>> First PT-BR Version
