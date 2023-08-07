const nomeArquivo = 'Foto da Familia.pdf';

function verificarExtensao(){
    posicaoExtensao = nomeArquivo.lastIndexOf(".");
    extensao = nomeArquivo.slice(posicaoExtensao + 1);
    if(extensao == "jpg" || extensao == "png" || extensao == "gif" || extensao == "jpeg") {
        return `Arquivo Válido`;
    } else {
        return `Arquivo Inválido`;
    }
}

console.log(verificarExtensao(nomeArquivo));

