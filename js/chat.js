$(document).ready(function() {
  var $startConversationButton = $('#startConversation');
  $startConversationButton.on('click', function() {
    var $ws;
    $ws = new WebSocket('wss://echo.websocket.org');
    $ws.onopen = function() {
      alert('Conexión abierta. Puedes enviar mensajes.');
    };
  
    $ws.onmessage = function(messages) {
      var $obtainedMessages = messages.data;
      alert('Mensajes obtenidos son:' + $obtainedMessages);
    };
  
    $ws.onclose = function() {
      alert('Conexion cerrada');
    };
  });
});