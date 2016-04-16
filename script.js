// Ajax
function ajax (method, url, callSuccess) {
  if ( !method || !url || !callSuccess ) {
    console.log("error");
    return false;
  }
  var request = new XMLHttpRequest();
  request.open(method, url, true);

  request.onreadystatechange = function() {
    if ( this.readyState == 4 ) {
      if (this.status >= 200 && this.status < 400) {

        callSuccess(this.responseText);

      } else {
        console.log("Status: ".concat(this.status));
      }
    }
  };
  request.send();
}



// addNode
function addNode(pai, elem, text) {
  if (!elem || !pai) {
    return false;
  }

  elem = document.createElement(elem);
  if (text) {
    text = document.createTextNode(text);
    elem.appendChild(text);
  }

  pai.appendChild(elem);
  return elem;
}



// Busca
function Busca(fORM) {

}




ajax("GET", "./links.json", function(data) {
  data = JSON.parse(data).links;

  var numLinks = data.length;
  var lista = document.getElementById('lista-links');

  for (var i = 0; i < numLinks; i++) {
    var link = addNode(lista, 'a');
    var titulo = addNode(link, 'strong', data[i].titulo);
    var about = addNode(link, 'span', data[i].about);
    link.href = data[i].url;
    link.title = data[i].titulo;
    link.setAttribute('target', '_blank');
    link.classList.add("link-externo");
  }
});
