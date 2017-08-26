// let's get started.
var links = document.querySelectorAll( 'a[href="#"]' );

links.forEach( function( link ) {
  link.addEventListener( 'click', function( event ) {
    event.preventDefault();
  }, false );
}, this );

// get the iframe stuff.
var webButton = document.getElementById( 'web' );
var iframe = document.getElementsByTagName( 'iframe' )[0];
var iframeDoc = ( iframe.contentDocument ) ? iframe.contentDocument : iframe.contentWindow.document;

console.log(iframeDoc);