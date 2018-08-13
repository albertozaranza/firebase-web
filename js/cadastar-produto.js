var nomeInput = document.getElementById('nomeInput');
var valorInput = document.getElementById('valorInput');
var addButton = document.getElementById('addButton');
var produtosList = document.getElementById('produtosList');

addButton.addEventListener('click', function () {
    create(nomeInput.value, valorInput.value);
});

function create(nome, valor) {
    var produto = {
        nome: nome,
        valor: valor
    };

    return firebase.database().ref().child('node').push(produto);
}

firebase.database().ref('node').on('value', function (snapshot) {
    produtosList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().valor));
        produtosList.appendChild(li);
    });
});