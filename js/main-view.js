$(document).ready(function() {
  var $textArea = $('#exampleTextArea1');
  var $button = $('#publishButton');
  $button.on('click', function(event) {
    event.preventDefault();
    var $divsContainer = $('#divs-container');
    var $div = $('<div></div>');
    var $post = $textArea.val();
    $div.append($post);
    $divsContainer.append($div);
    $div.addClass('divText');
  });
});
