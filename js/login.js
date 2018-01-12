$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCdxx880m4Ezk_Dlc84mE2zIrMe2lzH2Ek',
    authDomain: 'misky-peru-57ca6.firebaseapp.com',
    databaseURL: 'https://misky-peru-57ca6.firebaseio.com',
    projectId: 'misky-peru-57ca6',
    storageBucket: 'misky-peru-57ca6.appspot.com',
    messagingSenderId: '157888336080'
  };
  firebase.initializeApp(config);
  
  $('#btn-login').click(function() {
    firebase();
  });
   
  function firebase() {
    // provedor del servicio
    // con qué servicio se está rergistrando el usuario
    var provider = new firebase.auth.GoogleAuthProvider();
    // result trae toda la información de gmail
    // levantar la ventana de gmail y junto a result
    // popup es la ventana emergente que te indica con qué cuenta estás ingresando
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // guardando la imagen y nombre
      localStorage.photo = result.user.photoURL; // recoge foto de usuario
      localStorage.name = result.user.displayName; // recoge nombre
      localStorage.id = result.user.uid; // código de usurio de gmail
      console.log(result.user);
      saveFirebase(result.user); 
    });

      // funcion para guardar en firebase los datos de quien entra
    function saveFirebase(user) {
    var user = {
      uid: user.uid,
      name: user.displayName,
      photo: user.photoURL,
      gmail: user.email,
      followers: 31,
    };
    firebase.database().ref('users/' + user.uid).set(user);
    // window.location.href = '../views/profile.html';
  }
};
});