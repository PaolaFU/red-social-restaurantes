$(document).ready(function() {
  // Variables
  var $followersDropdown = $('#followers');
  var $notificationsDropdown = $('#notifications');
  var $textArea = $('#exampleTextArea1');
  var $button = $('#publishButton');
  var $dropdown = $('#dropdown');
  var $newFriend1 = $('#confirmButton1');
  var $newFriend2 = $('#confirmButton2');
  var $ul = $('#dropdown-menu-followers');
  var $liNewFriend1 = $('#liNewFriend1');
  var $liNewFriend2 = $('#liNewFriend2');
  var $liMessage = $('#liMessage');
  var $input = $('#exampleInputFile');
  var $saveChanges = $('#button-save-changes');
  var $inputFile = $('#exampleInputFile');
  // Evento para el elemento donde se postean las reseñas
  $textArea.on('input', function() {
    if ($(this).val() !== '' && $(this).val().trim().length !== 0) {
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
      $('.divText').last().insertBefore($('.divText').first());
      $textArea.focus();
    });
  }
  // Evento al confirmar una solicitud de amistad
  $dropdown.on('click', function() {
    var $alert;
    $newFriend1.mouseover(function() {
      $newFriend1.click(function(event) {
        event.preventDefault();
        $liNewFriend1.toggle();
        $alert = alert('¡Ahora son amigas!');
        $alert.one();
        $(this).off(event);
      });
    });
    $newFriend2.mouseover(function() {
      $newFriend2.click(function(event) {
        event.preventDefault();
        $liNewFriend2.toggle();
        $alert = alert('¡Ahora son amigos!');
        $alert.one();
        $(this).off(event);
      });
    });
    if ($liNewFriend1.html() === '' || $liNewFriend2.html() === '') {
      $ul.addClass('dropdown-menu');
    }
  });
  // Evento aplicado al input de tipo file del modal para subir las imágenes
  $inputFile.change(function() {
    var $reader = new FileReader();
    $reader.onload = function(event) {
      var $divsContainer = $('#divs-container');
      var $div = '<div><img src="_pub_" alt="" class="img-publicaciones center-block img-responsive"></div>';
      var $divReplace = $div.replace('_pub_', event.target.result);
      $divsContainer.append($divReplace);
    };
    $reader.readAsDataURL(this.files[0]);
  });
});