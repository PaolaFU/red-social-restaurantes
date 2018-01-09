$(document).ready(function() {

  $('#btn-login').click(function() {
    var emailLogin = document.getElementById('email-login').value;
    var passwordLogin = document.getElementById('password-login').value;
      
      
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
  });
});
