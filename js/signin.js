var provider = new firebase.auth.GoogleAuthProvider();

var config = {
    apiKey: "AIzaSyDFuzbP725qXoImrSmo6nov90OiPBtHnmw",
    authDomain: "comedy-app.firebaseapp.com",
    databaseURL: "https://comedy-app.firebaseio.com",
    projectId: "comedy-app",
    storageBucket: "comedy-app.appspot.com",
    messagingSenderId: "710197328215"
};
firebase.initializeApp(config);


var email;
var name;
var img;

// Se obtiene la data del usuario al aceptar
$('#login').click(function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            email = result.user.email;
            name = result.user.displayName;
            img = result.user.photoURL;

            $('#exampleModal').modal("hide");
            $('#exampleModal').attr("style", "display: none");

            console.log(email, name, img);
            

        })
});

document.getElementById('logout').addEventListener('click', function(){
    console.log('click');
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('user-menu').style.display='block';
    // User is signed in.
    } else{
        console.log('no existe usuario');
        document.getElementById('user-menu').style.display='none';
    }
});





