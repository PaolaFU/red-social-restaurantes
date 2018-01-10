$(document).ready(function() {
  /* var $name = $('#name');
  var $emailLogin = $('#email-login');
  var $passwordLogin = $('#password-login');
  var $emailRegister = $('#email-register');
  var $passwordregister = $('#password-register');
  var $checked = $('input[type="checkbox"]');
    
  var validateEmailLogin = false;
  var validateEmailRegister = false;
  var validateName = false; 
  var validateChecked = false;  
  
  // para ingresar un correo electronico y validarlo
  $emailLogin .on('input', function(event) {
    var errorMessage = $('#error-message');
    var txtMenssage = '<h5 style=\'color:#FF1493\';>Ingrese un correo electronico valido por ejemplo: usuario@dominio.com</h5>';
    
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      errorMessage.html(txtMenssage); 
      desactiveButton();
    }
  });
  $emailRegister .on('input', function(event) {
    // var errorMessage = $('#error-message');
    // var txtMenssage = '<h5 style=\'color:#FF1493\';>Ingrese un correo electronico valido por ejemplo: usuario@dominio.com</h5>';
    
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true; 
      activeButton(); 
    } else {
      errorMessage.html(txtMenssage); 
      desactiveButton();
    }
  });
  
  // Para validar nombre
  $name.on('input', function() {
    // console.log($(this).val());
    if ($(this).val().length >= 3) {
      validateName = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
   

  // Para pasar a la siguiente vista 
  $('#btn-login').on('click', function(event) {
    window.location.href = 'main-view.html';
  });
  $('#btn-register').on('click', function(event) {
    alert('Ha ocurrido un error');
    window.location.href = 'main-view.html';
    
  });*/
  //-------------------------------------------FIREBASE------------------------------------------------------//
  // Login
  
  $('#btn-login').click(function() {
    var emailLogin = document.getElementById('email-login').value;
    var passwordLogin = document.getElementById('password-login').value;
    
    
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    
      console.log(errorCode);
      console.log(errorMessage);
    });
  });
  // Register
  $('#btn-register').click(function() {
    var emailRegister = document.getElementById('email-register').value;
    var passwordRegister = document.getElementById('password-register').value;
  
    firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
      .then(function() {
        verificar();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  });

  function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Tu correo ya esta registrado');
        aparece(user);
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        console.log('**************');
        console.log(user.emailVerified);
        console.log('**************');
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      // ...
      } else {
      // User is signed out.
        console.log('no existe usuario activo');
      // ...
      }
    });
  }
  observador();
  
  function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
    // Email sent.
      alert('Enviando correo de verificación, una vez verificado su correo inicie sesión');
    }).catch(function(error) {
    // An error happened.
      alert('Ha ocurrido un error');
    });
  }
});
