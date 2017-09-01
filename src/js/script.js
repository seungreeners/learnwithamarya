// let's get started.
var links = document.querySelectorAll('a[href="#"]');

for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener('click', function(event) {
    event.preventDefault();
  }, false);
}

// get the iframe stuff.
var webButton = document.getElementById('web');
var iframe = document.getElementsByTagName('iframe')[0];
var iframeDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;

console.log(iframeDoc);
