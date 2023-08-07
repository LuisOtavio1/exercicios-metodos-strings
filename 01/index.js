const comentario = "Esse COVID é muito perigoso!";
const comentarioMinusc = comentario.toLowerCase();
if (comentarioMinusc.includes("covid") || comentarioMinusc.includes('pandemia')) {
    console.log('Comentário bloqueado por conter palavras proibidas');
} else {
    console.log('Comentário autorizado');
};