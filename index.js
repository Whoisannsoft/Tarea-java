const numeros = [3, 1, 1, 10, 5, 7, 2];


let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}


let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}


let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}


const resultadoHTML = document.createElement("p");
resultadoHTML.style.color = "blue";
resultadoHTML.textContent = `La suma total es ${suma}, el número menor es ${menor} y el número mayor es ${mayor}.`;


document.body.appendChild(resultadoHTML);