const email = "aluno@cubos.academy";
let temArroba = false;
let temPonto = false;
let pontoNoComeco = false;
let pontoNoFinal = false;
let arrobaNoComeco = false;
let arrobaNoFinal = false;
//-   Sempre tem que ter @
//-   Sempre tem que ter pelo menos um .
//-   Nunca pode começar com .
//-   Nunca pode terminar com .

if (email.indexOf("@",1) !== -1) {
    temArroba = true;
}

if ((email.indexOf(".",1) !== -1)) {
    temPonto = true;
} 

if ((email.includes(".") && email.indexOf(".") == 0)) {
    pontoNoComeco = true;
}

if ((email.includes(".") && email.lastIndexOf(".") == email.length - 1)) {
    pontoNoFinal = true;
}

if ((email.includes("@") && email.indexOf("@") == 0)) {
    arrobaNoComeco = true;
}

if ((email.includes("@") && email.lastIndexOf("@") == email.length - 1)) {
    arrobaNoFinal = true;
}

if(temArroba && temPonto && !pontoNoComeco && !pontoNoFinal && !arrobaNoComeco && !arrobaNoFinal) {
    console.log('Email Válido');
} else {
    console.log('Email Inválido');
}

