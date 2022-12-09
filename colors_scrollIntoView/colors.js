//Essai reussi mais trop illisible

/*let textColor = document.querySelector("#textColor");
let bodySelector = document.querySelector("body")

textColor.addEventListener('change', updateValue);

function updateValue() {
    bodySelector.style.color = textColor.value;
}



let backgroundColor = document.querySelector("#backgroundColor");

backgroundColor.addEventListener('change', updateBackground);

function updateBackground() {
    bodySelector.style.backgroundColor = backgroundColor.value;

}
*/ 


/* 1)Permettez à l'utilisateur de choisir 2 couleurs qui seront utilisées comme couleur de texte & d'arrière-plan respectivement. Ces couleurs doivent être persistantes à travers les pages */

const textColor = document.querySelector("#textColor")
const backgroundColor = document.querySelector("#backgroundColor")
const body = document.querySelector("body")

textColor.addEventListener("change", changeTextColor);
backgroundColor.addEventListener("change", changeBackgroundColor);

function changeTextColor() { 
  body.style.color = textColor.value
  localStorage.setItem("textColor", textColor.value)
}

function changeBackgroundColor() {

  body.style.backgroundColor = backgroundColor.value
  localStorage.setItem("backgroundColor", backgroundColor.value)
}

/*  Ces couleurs doivent être persistantes à travers les pages */

if (localStorage.getItem("textColor")) {
//  let body = document.querySelector("body")
  textColor.value = localStorage.getItem("textColor");
  body.style.color = localStorage.getItem("textColor");
}

if (localStorage.getItem("backgroundColor")) {
//  let body = document.querySelector("body")
  backgroundColor.value = localStorage.getItem("backgroundColor")
  body.style.backgroundColor = localStorage.getItem("backgroundColor")
}


/* 2)Rendez les titres cliquables ce qui fera défiler la fenêtre jusqu'à ce que ces titres se trouvent en haut de la partie visible de la fenêtre. */




/* 3)Crééz un moyen de naviguer entre des sections d'une page comme lepoint 2 mais cette fois en utilisant un scroll de souris comme évènement déclencheur */

