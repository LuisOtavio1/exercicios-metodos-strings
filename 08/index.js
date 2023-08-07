const cpf = "011.022.033-44";

function removerPontuacao(cpf) {
    while(cpf !== cpf.replace(".","")) {
        cpf = cpf.replace(".","");
        cpf = cpf.replace("-","");
    }
    console.log(cpf);
}

removerPontuacao(cpf);