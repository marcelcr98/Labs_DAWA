//Calculo días para navidad
var _ = require("underscore");

var date_1 = new Date();
var date_2 = new Date('2020-12-25');

var dias_miliseg = 86400000;
var diff_miliseg = date_2 - date_1;
var diff_dias = parseInt(diff_miliseg / dias_miliseg);
console.log( "Faltan",diff_dias," dias para navidad");

//Calculo de edad mediante fecha de nacimiento
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

console.log(calcularEdad("1998-08-29"));