let edatText= promt ("Quina edat tens?");
let edat= parseInt(edatText);
// Declaració de dades numèriques//
let num1 = 5;
let num2 = 10;
let temperatura = -2,5; // 2,5 en JavaScript es posa amb punt//
let preu = 9e6; // 9 acompanyat de 6 zeros//

// Declaració de dades de text//
let nom = "Carlos";
let cognom = 'Pérez';

// Declaració de cadenes de text o strings S'HAN DE POSAR ' O "//
var frase1 = "L'ordinador és una màquina molt útil";
var frase2 = 'L\'ordinador és una màquina molt útil';

// Igualtats i assignacions//
let a = 5; // Assignació//
let b == 10; // Igualtat//
let c === 15; // Idèntic//

// increment i decrement//
a++; // Incrementa en 1 la variable a//
b--; // Decrementa en 1 la variable b//

//Mòduls matemàtics//
let resultat = a % b; // Resta el valor de b a a//
//EXPLICACIÓ DEL MÒDUL: El resultat és el residu de la divisió entre a i b//

//OPERADORS DE CADENES DE TEXT CONCATENAR//
let nomComplet = nom + " " + cognom; //Concatena les variables nom i cognom amb un espai entre elles//
let word = "9" + 7; //Concatena el número 7 a la cadena de text "9", resultant en "97"//
//Amb multiplicació i divisió es fa l'operació matemàtica//
let suma = "9" * 7; //El resultat és 63//
let divisio = "9" / 3; //El resultat és 3//

//OPERADORS LÒGICS//
let x = true; //Valor cert//
let y = !x; //Valor fals (y es la negació de x)//

//AND (i)//
let z = x && y; //El resultat és fals perquè y és fals//

//OR (o)//
let w = x || y; //El resultat és cert perquè x és cert//

//OPeradors especials//
//operand1 ? operand2 : operand3//
let nota = 7, aprovat; //Declaració de les variables nota i aprovat//
aprovat= (nota>=5) ? "Sí" : "No"; //Si la nota és major o igual a 5, la variable aprovat valdrà "Sí", en cas contrari valdrà "No", en aquest cas Sí//
//Per fer exercicis//
prompt("Introdueix la teva edat: "); //Missatge que apareix a l'usuari per introduir dades//
// alert("Hola! Benvingut/da!"); //Missatge que apareix a l'usuari//
console.log("El resultat és: " + resultat); //Missatge que apareix a la consola del navegador//
document.write() //Escriu text a la pagina HTML//
//SWITCH//