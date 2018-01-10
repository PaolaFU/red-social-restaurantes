$(document).ready(function() {
  /* Dirigirse a seguir.html */
  $('#go-seguidores').click(function() {
    window.location = 'seguir.html';
  });
  $('#npost').on('click', function() {
    // Atrapa el texto ingresado
    let comments = document.getElementById('comment').value;
  
    // limpiar el textarea
    document.getElementById('comment').value = '';
  
    // contenedor en el html
    let cont = document.getElementById('cont');
  
    // creacion del div que contiene cada comentario
    let newComments = document.createElement('div');
  
    // validacion de  textarea con mensaje
    if (comments.length === 0 || comments === null) {
      return false;
    }
    // creacion del checkbox
    let chck = document.createElement('input');
    chck.type = 'checkbox';
    // creacion icono de heart
    let heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');
    // creacion icono de basura
    let trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    // nodos de texto del textarea
    var textNewComment = document.createTextNode(comments);
  
    let contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(chck);
    newComments.appendChild(trash);
    newComments.appendChild(heart);
    newComments.appendChild(contenedorElemento);
  
    cont.appendChild(newComments);
    
    // Se elimina posteo
    trash.addEventListener('click', function() {
      cont.removeChild(newComments);
    });
  });
});