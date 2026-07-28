let llamarFahrenheit = document.getElementById("fahrenheit")
let llamarKelvin = document.getElementById("kelvin")
let celsius = Number (prompt("Ingese su temperatura en Celsius:"));
if (isNaN(celsius)) {
    console.log ("Error debe ingresar un número")
}
else {

let fahrenheit = ((celsius * 1.8)+32 )
let kelvin = (celsius + 273 )
let ponerFahrenheit =document.createElement("p");
ponerFahrenheit.textContent = fahrenheit;
llamarFahrenheit.appendChild(ponerFahrenheit );

let ponerKelvin =document.createElement("p");
ponerKelvin.textContent = kelvin;
llamarKelvin.appendChild(ponerKelvin );



}