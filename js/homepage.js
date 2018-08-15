var cadastrarButton = document.getElementById('cadastrarButton');
var logoutButton = document.getElementById('logoutButton');

cadastrarButton.addEventListener('click', function (){
    window.location.href = "cadastrar-produto.html";
});

logoutButton.addEventListener('click', function (){
    firebase
        .auth()
        .signOut()
        .then(function () {
            window.location.href = "index.html";
        }, function (error) {
            console.error(error);
        });
});