
/*Permettre à l'utilisateur de choisir une couleur qui sera utilisé comme couleur d'arrière-plan et une autre couleur comme couleur de texte*/
let textColor = document.querySelector("#textColor")
let couleurDeFont = document.querySelector("#backgroundColor")

textColor.addEventListener("change", changeTextColor);
backgroundColor.addEventListener("change", changeBackgroundColor);

function changeTextColor() {
  let body = document.querySelector("body")
  body.style.color = textColor.value
  sessionStorage.setItem("#textColor", textColor.value);
}

function changeBackgroundColor() {
  let body = document.querySelector("body")
  body.style.backgroundColor = couleurDeFont.value
   sessionStorage.setItem("#backgroundColor", backgroundColor.value);
}
  
/*Récupérer cette nouvelle valeur de couleur via l'attribut "value" de l'objet HTML à chaque changement par l'utilisateur*/
if (localStorage.getItem("textColor")) {
  let body = document.querySelector("body")
  body.style.color = localStorage.getItem("textColor")
}
  if (localStorage.getItem("backgroundColor")) {
  let body = document.querySelector("body")
  body.style.color = localStorage.getItem("backgroundColor")
}


/*var champ = document.getElementById("body");

if (sessionStorage.getItem("autosave")) {
  champ.value = sessionStorage.getItem("autosave");
}*/

/*2)Rendez les titres cliquables ce qui fera défiler la fenêtre jusqu'à ce que ces titres se trouvent en haut de la partie visible de la fenêtre.*/
/*let element = documrent.querySelector("body");
element.scrollIntoView({ block: "end" });*/

/*/const element = document.querySelector("h1");
element.addEventListener(click, scrollToBottom)

function scrollToTop() {
  element.scrollIntoView(true);
}

function scrollToBottom() {
  element.scrollIntoView(false);
}
*/

/*function scrollToElement() {
  element.scrollIntoView({behavior: "smooth", block: "start"})
}

let element = document.querySelector("#content");
element.addEventListener("click", scrollToElement)
*/

function scrollToTop() {
  titre3.scrollIntoView(true);
}

function scrollToBottom() {
  element.scrollIntoView(false);
}


/*let titre3 = document.querySelector("h1")
titre3.addEventListener(click, scrollToTop)*/
 