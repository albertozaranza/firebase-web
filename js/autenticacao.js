var emailInput = document.getElementById('emailInput');
var senhaInput = document.getElementById('senhaInput');
var loginButton = document.getElementById('loginButton');
var voltarButton = document.getElementById('voltarButton');

voltarButton.addEventListener('click', function (){
    window.location.href = "index.html";
})

loginButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, senhaInput.value)
        .then(function () {
            window.location.href = "pagina-inicial.html";
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});