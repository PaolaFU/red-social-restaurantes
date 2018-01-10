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
  // Evento aplicado al botón del modal para subir las imágenes
  var $inputImage = $('#inputImage');
  $saveChanges.on('click', function() {
    debugger;
    var $userImage = $input.val();
    var $inputImageSrc = $inputImage.val();
    $inputImageSrc = $userImage;
    alert($inputImageSrc);
  });
});
