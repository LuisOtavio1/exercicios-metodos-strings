let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let listaNomeCompleto = nome.split(" ");
let emailFormatado = email.trim()

if (identificador.length < 6) {
    identificador = identificador.padStart(6, "0");
}

if (listaNomeCompleto[0][0] !== listaNomeCompleto[0][0].toUpperCase() || listaNomeCompleto[1][0] !== listaNomeCompleto[1][0].toUpperCase()) {
    listaNomeCompleto[0] = listaNomeCompleto[0][0].toUpperCase() + listaNomeCompleto[0].slice(1);
    listaNomeCompleto[1] = listaNomeCompleto[1][0].toUpperCase() + listaNomeCompleto[1].slice(1);
    nome = listaNomeCompleto.toString();
}


while(emailFormatado.indexOf(' ') !== -1) {
    emailFormatado = emailFormatado.replace(' ','');
}

email = emailFormatado;

while (nome !== nome.replace(","," ")){
    nome = nome.replace(","," ");
}

console.log(identificador);
console.log(nome);
console.log(email);





