$(document).ready(function() {
  /* Dirigirse a seguir.html */
  $('#go-seguidores').click(function() {
    window.location = 'seguir.html';
  });
  $('#npost').on('click', function() {
    // Atrapa el texto ingresado
    var comments = document.getElementById('comment').value;
  
    // limpiar el textarea
    document.getElementById('comment').value = '';
  
    // contenedor en el html
    var cont = document.getElementById('cont');
  
    // creacion del div que contiene cada comentario
    var newComments = document.createElement('div');
  
    // validacion de  textarea con mensaje
    if (comments.length === 0 || comments === null) {
      return false;
    }
    // creacion del checkbox
    var chck = document.createElement('input');
    chck.type = 'text';
    // creacion icono de heart
    var heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');
    // creacion icono de basura
    var trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    // nodos de texto del textarea
    var textNewComment = document.createTextNode(comments);
  
    var contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);
    // newComments.appendChild(chck);
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