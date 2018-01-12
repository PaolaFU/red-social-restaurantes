$(document).ready(function() {
  /* Botones */ 
  var $startConversationButton = $('#startConversation');
  var $sendMessageButton = $('#btnEnviar');
  var $inputChat = $('#chat-user-message');
  var $ws;
  $startConversationButton.on('click', function() {
    $ws = new WebSocket('wss://ws.achex.ca/');
    $ws.onopen = function() {
      alert('Conexión abierta. Puedes enviar mensajes.');
      $ws.send('{'setID':'MichatRoom', 'paswdd':'12345'}');
    };
  
    $ws.onmessage = function(messages) {
      var $obtainedMessages = messages.data;
      alert('Mensajes obtenidos son:' + $obtainedMessages);
    };
  
    $ws.onclose = function() {
      alert('Conexion cerrada');
    };
  });

  $sendMessageButton.click(function() {
    $ws.send($inputChat.val());
  });
});