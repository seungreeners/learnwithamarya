// Let's get started.
const links = document.querySelectorAll('a[href="#"]');

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', event => {
    event.preventDefault();
  }, false);
}

// Get the iframe stuff.
const webButton = document.getElementById('web');
const iframe = document.getElementsByTagName('iframe')[0];

const iframeDoc = (iframe.contentDocument) 
                ? iframe.contentDocument
                : iframe.contentWindow.document;
