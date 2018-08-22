autenticarUsuario();

var nomeInput = document.getElementById('nomeInput');
var valorInput = document.getElementById('valorInput');
var addButton = document.getElementById('addButton');
var produtosList = document.getElementById('produtosList');
var paginaInicial = document.getElementById('pagina-inicial');
var sair = document.getElementById('sair');

paginaInicial.addEventListener('click', function (){
    window.location.href = "pagina-inicial.html";
})

addButton.addEventListener('click', function () {
    create(nomeInput.value, valorInput.value);
});

function create(nome, valor) {
    var produto = {
        nome: nome,
        valor: valor
    };

    return firebase.database().ref().child('produtos').push(produto);
}

firebase.database().ref('produtos').on('value', function (snapshot) {
    produtosList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().valor));
        produtosList.appendChild(li);
    });
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