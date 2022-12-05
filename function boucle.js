//1 Créer une fonction estImpair qui prend un argument (nombre) qui retourne true si le nombre est impaire ou false sinon.

    for(i=0;i<=20;i += 1){
        console.log(i)
    }

//2 Créer une boucle qui affiche les nombres de 20 à 0 par étape de 2

for(i=20;i>=0;i-=2){
    console.log(i)
}

//3 Etant donné deux arrays personnes et nationalites utiliser une bonne boucle pour afficher le nom de chaque personne suivi de sa nationalité.

var personnes = ["Georges", "Arielle", "Elio", "Bart"];
var nationalites = ["Français", "Allemand", "Belge", "Flamand"];
for (var i=0; i<personnes.length; i++) 
    {
    console.log(personnes[i]+" - "+nationalites[i]);
}

//4  Grâce aux boucles affichez tous les positions d'un plateau d'échecs dans l'ordre, en partant de A1. Pensez à vous inspirer de l'exercice précédent

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"]
for (i=1; i=alphabet.length; i++){
    for (let j = 1 ; j<= alphabet ; j++)
    console.log(alphabet[i] + j);
}

//5 Créer une fonction additionneTout qui prend une suite de nombres et les additionne entre eux.

function additionneTout (...x){
    let rest = 0
    for (var i = 0; i<x.length ; i++){
    rest += x[i];
    }
    return rest ;
}

additionneTout(5,6,7,8,9)

//6 Créer votre propre fonction join qui portera le nom joindreValeurs. Elle doit se comporter comme la fonction du même nom liée aux arrays sauf qu'elle prendra une suite de valeurs ou de strings à la place d'un array.

function joindreValeur(...x) {
    let nom =""
    for (var i =0 ; i< x.length ; i++){
    nom += x[i] + " ";
    }
    return nom;
}
joindreValeur ( "maksym", "sokol", "faucon")

//autre 6 plus juste
function joindreValeur(separateur, ...x) {
    let stringJoint = ""
    for (let i = 0 ; i< valeurs.length ; i++){
    stringJoint += valeurs[i] + separateur;
    }
    return stringJoint + valeurs[valeurs.lenght - 1];
}
joindreValeur ( ",", "maksym", "sokol", "faucon")

//6 encore
function joindreValeur(separateur, ...x) {
    let stringJoint = valeurs[0]
    for (let i = 1 ; i< valeurs.length ; i++){
    stringJoint += separateur + valeurs[i]; 
    }
    return stringJoint;
}
joindreValeur ( ",", "maksym", "sokol", "faucon")


//7 Créer votre propre fonction reverse qui portera le nom renverserValeurs. Elle doitse comporter comme la fonction du même nom liée aux arrays sauf qu'elle prendra une suite de valeurs ou de strings à la place d'un array et concatenera d'abord toutes ces valeurs ensemble.
//7.1 inverse l'ordre des mots
function renverserValeur(...valeur){
    let rest = ""; 
    for (let i = valeur.length-1 ; i >= 0; i--){ 
    for(let j = valeur[i].length-1 ; j >= 0 ; j--){  
      rest += valeur[i][j]; 
    }  
  }
  return rest ;  
  }
  renverserValeur("Fred", "Sirius","Minouze");

  //7.2
  function renverserValeur(...valeurs){
    let stringJointe = joindreValeurs("",...valeurs)
    let stringRenversee = ""
    for (let i = stringJointe.lenght -1; i >= 0; i--){
        stringRenversee += stringJointe[i]
    }
    return stringRenversee
  }
  renverserValeur("Fred", "Sirius","Minouze");

  //8 compteur   En vous inspirant de la fonction suivante, créer une fonction récursive qui affiche les nombres en partant d'une valeur de départ jusqu'à une valeur maximum toutes deux données lors de l'appel.

    function compteurRecursif(max = 10) {
    if ( max <= 10 ) {
    console.log(max);
    compteurRecursif(max + 1);
      }
  }
  
  compteurRecursif(0);

  //8.1 juste
  function compteurRecursif(min = 0, max = 5) {
    if ( min <= max ) {
    console.log(min);
    compteurRecursif(min + 1, max);
      }
  }
  
  compteurRecursif();

  //1 Créer une fonction presentation qui prend 3 arguments (prenom, nom, age) qui affiche dans la console une phrase de présentation.

  function presentation (prenom, nom, age){
    console.log("Salut, je m'appelle"+ " " + prenom +" "+ nom +" "+ "j'ai" +" "+ age +" " + "ans.")

    }
    presentation ("Maksym", "Sokol", "27")

//2 Créer une fonction calculatriceSomme qui prend 2 arguments (nombre1, nombre2) et qui renvoie le résultat. Faites la même chose pour les 3 autres opérations de base mais donnez à la multiplication et à la division des paramètres par défaut valant 1.

function calculatriceSomme (nombre1,nombre2){
    console.log (nombre1 + nombre2)
    return nombre1 + nombre2
}
function calculatriceSoustraction (nombre1,nombre2){
    console.log (nombre1-nombre2)
    return nombre1 - nombre2
}
function calculatriceMulti (nombre1,nombre2 = 1){
    console.log (nombre1*nombre2)
    return nombre1 * nombre2
}
function calculatriceDivision (nombre1,nombre2 = 1){
    console.log (nombre1/nombre2)
    return nombre1 / nombre2
}

//3 Créer une fonction possibilitesCalculatrice qui prend 2 arguments (nombre1, nombre2) et affiche dans la console le résultat de l'addition, de la soustraction, de la multiplication et de la division de ces nombres entre eux grâce aux fonctions précédentes calculatrice

function possibilitesCalculatrice (nombre1,nombre2) {
        console.log (calculatriceSomme(nombre1,nombre2))
        
        console.log (calculatriceSoustraction(nombre1,nombre2))

        console.log (calculatriceMulti(nombre1,nombre2))

        console.log (calculatriceDivision(nombre1,nombre2))
}
possibilitesCalculatrice(25,17)

//4 Réecrivez toutes vos fonctions avec la syntaxe que vous n'avez pas encore utilisée:fonction simple => fonction flèchée et fonction flèchée => fonction simple.

const moi = (prenom, nom, age)=> {
    return ("Salut, je m'appelle"+ " " + prenom +" "+ nom +" "+ "j'ai" +" "+ age +" " + "ans."); 
}
moi ("Jhon", "Snow", 25); 

//4.1
 const addition  =(nombre1,nombre2)=>{ 
    return nombre1 + nombre2; 
 }
 const soustraction =(nombre1,nombre2)=>{ 
    return nombre1 - nombre2; 
 }
 const multi =(nombre1,nombre2)=>{ 
    return nombre1 * nombre2; 
 }
 const division  =(nombre1,nombre2)=>{ 
    return nombre1 / nombre2; 
 }

 addition(10,5); 
 soustraction(10,5)
 multi(10,5)
 division(10,5)

 //4.2
 const possibilitesCalculatrice2 = (nombre1,nombre2)=>{
    console.log (addition (nombre1 , nombre2),soustraction(nombre1,nombre2),multi(nombre1,nombre2),division(nombre1,nombre2))
}
possibilitesCalculatrice2(25,17)


//1 Chanceux que vous êtes vous allez pouvoir créer un simulateur de "fortune cookies" ces biscuits chinois où se cachent à l'intérieur des petits mots parfois plein de sagesse et parfois...assez étranges.Créer une fonction qui ne prend pas d'arguments et donc le comportement est le suivant:- Tire un nombre au hasard entre 0 et 10 inclus- Renvoyez une phrase dépendant du chiffre tiré- 0 => "Le voyage d'un millier de kilomètres commence avec un pas"- 1 => "Racontez toujours la vérité – c'est la chose la plus facile à se rappeler"- 2 => "Si vous avez besoin d'un coup de main vous en trouverez une au bout de votre bras"- 3 => "On tend à recevoir ce à quoi on s'attend"- 4 => "Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge"- 5 => "Oubliez le but, appréciez le voyage"- 6 => "Si la vie vous donne des citrons faites-en de la limonade"- 7 => "Si on suivait nos propres conseils on aurait du succès"- 8 => "C'est mieux d'avoir un mauvais plan que pas de plan du tout"- 9 => "Le meilleur moyen de rendre les enfants bons est de les rendre heureux"- 10 => "Ne poursuivez pas le bonheur – créez le"

function cookies() {
    let nbrAleatoire = Math.floor(Math.random() * 11);
    switch (nbrAleatoire) {
        case 0:
            return "Le voyage d'un millier de kilomètres commence avec un pas";
        case 1:
            return "Racontez toujours la vérité – c'est la chose la plus facile à se rappeler";
        case 2:
            return "Si vous avez besoin d'un coup de main vous en trouverez une au bout de votre bras";
        case 3:
            return "On tend à recevoir ce à quoi on s'attend";
        case 4:
            return "Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge";
        case 5:
            return "Oubliez le but, appréciez le voyage";
        case 6:
            return "Si la vie vous donne des citrons faites-en de la limonade";
        case 7:
            return "Si on suivait nos propres conseils on aurait du succès";
        case 8:
            return "C'est mieux d'avoir un mauvais plan que pas de plan du tout";
        case 9:
            return "Le meilleur moyen de rendre les enfants bons est de les rendre heureux";
        default:
            return "Ne poursuivez pas le bonheur – créez le";
    }
}
cookies();

//2 Ecrivez une fonction nommée maxOfThree qui prend 3 chiffres en arguments et retourne le plus grand des 3 chiffres. Utilisez seulement des ternaires.

function maxOfThree(ch1, ch2, ch3) {
    console.log(Math.max(ch1, ch2, ch3));
}
maxOfThree(14, 18, 16);

//2.1 en ternaire WTF Wath True False
function maxOfThree(ch1, ch2, ch3) {
    let lePlusGrand = ch1 > ch2? ch1 : ch2
    return lePlusGrand > ch3 ? lePlusGrand : ch3
}



//3 Donner le résultat des expressions suivantes:1.false && true && true || false2.false && true || true && true3.false && (true || true) && true4.1 || true && false || false5.!false && true || true && !true6.'hello' && 'bye' || 4 && 07.!true || !true && true || (!false || false)
false && true && true || false
false
false && true || true && true
true
false && (true || true) && true
false
1 || true && false || false
1
!false && true || true && !true
true
'hello' && 'bye' || 4 && 0
bye
!true || !true && true || (!false || false)
true

//4 Créez une fonction drawRectangle qui prendra au maximum 3 arguments et qui dessinera dans votre console, à base de caractères de votre clavier, un rectangledont l'intérieur est vide. Lors de l'appel deux des paramètres sont obligatoires: la longueur et la hauteur.Le dernier paramètre est le caractère qui sera utilisé pour dessiner le rectangle et sa valeur de base est '*'. Bonus: Ajouter un paramètre avec une valeur par défaut en plus qui sera le caractère utilisé pour afficher les coins du rectangle

function drawRectangle(longueur, hauteur){

    for(let y=0; y < hauteur; y++){
        let l = "" ;
        for(let i= 0; i < longueur; i++){
            if((y ==0) || (y==hauteur-1)){
                l += "#";
            } else if((i ==0)||(i==longueur-1)){

                l += "#";
            }else{

                l+=" ";
            }
        }
        console.log(l);
    } 
}

drawRectangle(12, 8);

//4.1 
function drawRectangle(longueur, hauteur){
    for(let y=0; y < hauteur; y++){
        let l = "" ;
        for(let i= 0; i < longueur; i++){
            if(y ==0 || y==hauteur-1 || i ==0 || i==longueur-1){
                l += "#";
            }else{
                l+=" ";
            }
        }
        console.log(l);
    }
}
drawRectangle(12, 8);

//document.querySelector()
/*
Créez une page HTML qui contient un H1 comme titre et deux listes (une ordonnée et une non-ordonnée) qui contiendront 3 li chacune
	
Sélectionnez la liste non-ordonnée et rajouter 2 li à la fin
	
Sélectionnez la liste ordonnée et rajoutez 2 li au début
	
Rajoutez un sous-titre de votre choix après le titre
	
Modifiez le contenu du premier élément de la liste ordonnée
	
Modifiez le contenu du second élément de la liste non-ordonnée
	
Changez le couleur du titre 
*/
let ulli = document.querySelector("ul");
ulli.insertAdjacentHTML("beforeend", "<li>4</li><li>5</li>");

let olli = document.querySelector("ol")
olli.insertAdjacentHTML("afterbegin","<li>-1</li><li>-2</li>");

let h2 = document.querySelector("h1")
h2.insertAdjacentHTML("afterend", "<h2>Mon JS</h2>");

let olli1 = document.querySelector("ol>li")
olli1.textContent = "premier";

let ulli1 = document.querySelector("ul li:nth-child(2)")
ulli1.textContent = "-deuxieme";

let h1 = document.querySelector("h1")
h1.style.color="red";


/* li // sélection par balises

 

ul li // li se trouvant dans des ul, enfants directs ou pas

 

<ul>
    <li></li> // sera sélectionné
    <div>
        <li></li> //sera sélectionné
    </div>
</ul>

 

ul>li // li se trouvant dans des ul, mais seulement les enfants directs

 

<ul>
    <li></li> // sera sélectionné
    <div>
        <li></li>
    </div>
</ul>

 

div+p // sélectionner un paragraphe directement après une div

 

<div>
    <p></p>
</div>
<p></p> // sera sélectionné
<p></p>

 

div~p // sélectionner les paragraphes qui suivent une div mais pas forcément directement

 

<div>
    <p></p>
</div>
<p></p> // sera sélectionné
<p></p> // sera sélectionné
*/

//animation CSS    !!!!!!!!     https://animate.style/          !!!!!!!

//oppacité
logoGoogle.animate( [
    {opacity: "1"}, 
    {opacity: "0.0"}] 
    , 10000
);

//rotation
let Googlelogo = document.querySelector(".lnXdpd");

Googlelogo.animate([
    {transform: "rotate(0deg)"},
    {transform: "rotate(360deg)"}
    ], 500
);

//animation css infini ou autre
function animateLogo() {
    Googlelogo.animate([
        {transform: "rotate(0deg)"},
        {transform:  "rotate(360deg)"}], 500
        )
}

let idInterval = setInterval(animateLogo, 1000)

idInterval

//arreter l'animation
clearInterval(idInterval)

//fonction qui va lancer alert quand je clic sur le boutton 
let button = document.querySelector("button");

button.onclick = function bonjour(){
    alert("Bonjour");
}

//fonction qui va lancer prompt quand je clic sur le boutton propose d'entrer son prenom
button.onclick = function bonjour() {
    let prenom = prompt("Votre prenom: ")
    button.textContent = prenom;
}

//lancer un prompt et inserer le texte ecrit dans le prompt dans le champ du #inputText (exemple barre de recherche google si classe= #inputText)
let logoGoogle = document.querySelector("#logoGoogle")

let inputText = document.querySelector("#inputText")

function askText() {
    let inputUser = prompt("Text à insérer: ")
    inputText.value = inputUser
}

logoGoogle.addEventListener('click', askText)

//affiche test dans une boite de dialogue
alert("test")

//affiche test dans une boite de dialogue et permet d'écrire pour renvoyer ce que l'utilisateur va ecrire
prompt("test")



//ecrire dans prompt et que ce soit retranscrit dans la barre de google et le logo fait une rotation

let logoGoogle = document.querySelector(".lnXdpd");

let inputText = document.querySelector(".gLFyf")

function animateLogo() {
    logoGoogle.animate([{transform: "rotate(0deg)"}, {transform:  "rotate(360deg)"}], 500)
}

let idInterval = setInterval(animateLogo, 1000)



function askText() {
    let inputUser = prompt("Text à insérer: ")
    inputText.value = inputUser
}

logoGoogle.addEventListener('click', askText)
