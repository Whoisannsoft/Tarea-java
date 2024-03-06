
var nombreUsuario = prompt("Ingrese su nombre:");
var apellidoUsuario = prompt("Ingrese su apellido:");


var anoNacimiento = prompt("Ingrese su año de nacimiento:");
var edad = 2024 - parseInt(anoNacimiento);

var diaNacimiento = prompt("Ingrese el día de su nacimiento:");


var mesNacimiento = prompt("Ingrese el mes de su nacimiento:");


console.log("Hola, " + nombreUsuario + " " + apellidoUsuario + "!");
console.log("Fecha de nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/" + anoNacimiento);
console.log("Usted tiene " + edad + " años.");