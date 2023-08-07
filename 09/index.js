const nome = 'Guido Cerqueira';

function criarApelido(nome) {
    nickname = "@" + nome
    nickname = nickname.replace(" ","");
    nickname = nickname.toLowerCase();
    nickname = nickname.slice(0,13);
    return nickname;
}


console.log(criarApelido(nome));

