let listaDeEmails = []

function gerarEmails(nome) {
    let numero = parseInt(Math.random() * 10000);
    let email = nome + numero + "@gmail.com";
    alert(email);
    listaDeEmails.push(email);
}

gerarEmails('daniel');
gerarEmails('otavio');

console.log(listaDeEmails);



