$(document).ready(function() {
  // Variables
  var $followersDropdown = $('#followers');
  var $notificationsDropdown = $('#notifications');
  var $textArea = $('#exampleTextArea1');
  var $button = $('#publishButton');
  var $dropdown = $('#dropdown');
  var $newFriend1 = $('#confirmButton1');
  var $newFriend2 = $('#confirmButton2');
  var $liNewFriend1 = $('#liNewFriend1');
  var $liNewFriend2 = $('#liNewFriend2');
  var $liMessage = $('#liMessage');
  var $ul = $('#dropdown-menu-followers');
  // Evento para el elemento donde se postean las reseñas
  $textArea.on('input', function() {
    if ($(this).val() !== '') {
      console.log($(this).val().length);
      $button.removeAttr('disabled');
    } else {
      $button.attr('disabled', true);
    }
  });
  if ($button.attr('disabled') !== true) {
    $button.on('click', function(event) {
      event.preventDefault();
      var $divsContainer = $('#divs-container');
      var $div = $('<div></div>');
      var $post = $textArea.val();
      $div.append($post);
      $divsContainer.append($div);
      $div.addClass('divText');
    });
  }
  // Evento al confirmar una solicitud de amistad
  $dropdown.on('click', function() {
    var $alert;
    $newFriend1.mouseover(function() {
      $newFriend1.click(function(event) {
        event.preventDefault();
        $alert = alert('¡Ahora son amigas!');
        $liNewFriend1.toggle();
      });
    });
    $newFriend2.mouseover(function() {
      $newFriend2.click(function(event) {
        event.preventDefault();
        $alert = alert('¡Ahora son amigos!');
        $liNewFriend2.toggle();
      }); 
    }); 
    if ($liNewFriend1.html() === '' || $liNewFriend2.html() === '') {
      $ul.addClass('dropdown-menu');
    }
  });
});