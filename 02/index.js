const cpf = "12345678900";
const cnpj = "12345678900";
const cpfPrimeira = cpf.slice(0,3);
const cpfSegunda = cpf.slice(3,6);
const cpfTerceira = cpf.slice(6,9);
const cpfDigito = cpf.slice(9,11);

const cnpjPrimeira = cnpj.slice(0,2);
const cnpjSegunda = cnpj.slice(2,5);
const cnpjTerceira = cnpj.slice(5,8);
const cnpjQuarta = cnpj.slice(8,12);
const cnpjDigito = cnpj.slice(12,14);


if(cpf.length !== 11) {
    console.log('CPF de Tamanho inválido');
} else {
    console.log(`${cpfPrimeira}.${cpfSegunda}.${cpfTerceira}-${cpfDigito}`);
}

if(cnpj.length !== 14) {
    console.log('CNPJ de Tamanho inválido');
} else {
    console.log(`${cnpjPrimeira}.${cnpjSegunda}.${cnpjTerceira}/${cnpjQuarta}-${cnpjDigito}`);
}


