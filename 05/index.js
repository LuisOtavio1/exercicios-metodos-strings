const numeroCartao = '1111222233334444';
const primeiraParte = numeroCartao.slice(0,4);
const UltimaParte = numeroCartao.slice(-4);
let numeroEscondido = "";

if (numeroCartao.length == 16) {
    while(numeroEscondido.length < 8) {
        numeroEscondido += "*";
    }
}
numeroEscondido = primeiraParte + numeroEscondido + UltimaParte;

console.log(numeroEscondido);