autenticarUsuario();

var cadastrar = document.getElementById('cadastrar');
var sair = document.getElementById('sair');

cadastrar.addEventListener('click', function (){    
    window.location.href = "cadastrar-produto.html";
});

sair.addEventListener('click', function (){
    firebase
        .auth()
        .signOut()
        .then(autenticarUsuario ()
        , function (error) {
            console.error(error);
    });
});

function autenticarUsuario(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            window.location.href = "index.html";
        }
    });
}