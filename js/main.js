/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */
/*
// Demander la température en celsius
let tempCelsius = prompt('Température en celius :');

// Transformer la température en nombre entier
tempCelsius = parseFloat(tempCelsius);

// Tester si c'est un nombre
if (isNaN(tempCelsius)) {
    alert('Erreur, entre une température !');
} else {
    // affiche la température en Fahrenheit
    alert(`${tempCelsius}°C = ${tempCelsius * 9 / 5 + 32}°F`);
}
*/

// Récupération bouton Ajouter
let btConvertir = document.querySelector('.Convertir');
let inputTemp = parseFloat(document.getElementById('temp'));
let ulHistorique = document.querySelector('ul.Historique');
let calculFahrenheit = inputTemp * 9 / 5 + 32;

//
btConvertir.addEventListener('click', () => {
    ulHistorique.innerHTML += '<li>' + calculFahrenheit.value + '</li>';
    //vide le champs Article
    inputTemp.value = '';
} );