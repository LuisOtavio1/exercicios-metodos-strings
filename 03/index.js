const texto = "Aprenda programar do zero na Cubos Academy";
textoMin = texto.toLowerCase();

while (textoMin !== textoMin.replace(" ","-")) {
    textoMin = textoMin.replace(" ","-");
}
console.log(textoMin);
