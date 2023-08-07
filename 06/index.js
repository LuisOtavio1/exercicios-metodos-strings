const celular = 7199918888;
const celularString = celular.toString();
const digitoNove = "9";
let ddd = "";
const numeroPrimeira = celularString.slice(-8,-4); 
const numeroSegunda = celularString.slice(-4); 
if (celularString.length == 10) {
    ddd = "(" + celularString.slice(0,2) + ")"
    console.log(`${ddd} ${digitoNove} ${numeroPrimeira}-${numeroSegunda}`);
} else if (celularString.length == 8) {
    console.log(`${digitoNove} ${numeroPrimeira}-${numeroSegunda}`);
}

