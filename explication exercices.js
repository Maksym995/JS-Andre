//Vous recevrez des données concernant des entreprises, d'une part leur nom et d'autre part leur revenus mois par mois de l'année passée.Votre mission sera de poser la première pierre d'un logiciel web de gestion en faisant d'abord la moyenne des revenus annuels de chaque entreprise. Ensuite vous vérifierezsi le nom de l'entreprise est trop long pour une utilisation commercial (plus de 12 caractères espaces compris) et le cas écheant vous lui donnerez de façon automatisée un sigle et si le nom n'est pas trop long vous utiliserez le nom de l'entreprise sans modifications.Au final affichez une phrase par entreprise qui donnera le nom de l'entreprise, son sigle si il existe et ses revenus moyens sur l'année.Essayez de répéter le moins de code possible et de créer des solutions réutilisables.

//Trouver le premier mot qui commence par une majuscule dans un array
let arrayMots = ["giraffe", "Poney", "chinchilla"];
function firstLetterUpperCase(e) {
    return e[0] === e[0].toUpperCase();
}
arrayMots.findIndex(firstLetterUpperCase);

//Savoir si l'année est bisextile ou pas 
function jours(annee) { return annee % 4 ? 365 : 366; }
jours(2023)

//Inverse l'ordre des caractères dans le string
let debut = "Hello et bonne journée !"
    let fin = "";
    for (let i = debut.length-1; i >= 0; i--) { 
    fin += debut[i];} 

 //Retrourne le nombre de voyelles dans le string 
function voyelles(string) {    
    let voyelles = ["a", "e", "i", "o", "u"];
    let totalVoyelles = 0;    
    for (let i = 0; i < string.length; i++) {        
    if ( voyelles.includes(string[i]) ) {            
    totalVoyelles++;        
    }    
}    
    return totalVoyelles;}

voyelles("azertyuiopqsdfghjklmwxcvbn")
5 

//Affiche les nombres de 0 à 50 les multiples de 5 = Foo , 3=Bar, 3 && 5 = FooBar
function foobar(maxNum) {    
    for (let i = 0; i < maxNum; i++) {        
    if (i % 5 === 0 && i % 3 === 0) {            
    console.log(i + " FooBar");        
}        
    else if (i % 5 === 0) {            
    console.log(i + " Foo");        
}        
    else if (i % 3 === 0) {            
    console.log(i + " Bar");        
}    }}

foobar(50)

//Retourne tout les mots du string en transphorment chaque premier caractère de chaque mot en une majuscule 
function majusculeMot(string) {    
    let precedent = " ";    
    let stringMajusculeMot = "";    
    for (let i = 0; i < string.length; i++) {        
    if (string[i] !== string[i].toUpperCase() && precedent === " ") {            
        stringMajusculeMot += string[i].toUpperCase();        
}        
    else {            
    stringMajusculeMot += string[i];        
}        
    precedent = string[i];    
}    
    return stringMajusculeMot;}

    majusculeMot("azerty qwerty singe banane a string jaouad andré")
    "Azerty Qwerty Singe Banane A String Jaouad André" 

//Symbole sera affiché autant de fois que le nombre chiffresTotaux et les symboles de fin seront remplacé par autant de caractères que nombre par le nombre lui même
function remplissageGauche(nombre, chiffresTotaux, symbole) {    
    nombre = nombre.toString();    
    let resultat = nombre;    
    let repetition = chiffresTotaux - nombre.length;    
    if (repetition > 0) {        
    resultat = symbole.repeat(repetition) + nombre;    
}    
    return resultat;}

    remplissageGauche(23.5, 5, "0")
    "00023.5"

//Dessiner un carré ou rectangle
function dessiner(x, y, symboleUn = '*', symboleDeux= '°') {    
    for (let yCompteur = 1; yCompteur <= y; yCompteur++) {        
    let ligne = '';        
    for(let xCompteur = 1; xCompteur <= x; xCompteur++) {            
    if (              
    ((xCompteur === 1 || xCompteur === x) &&              
    yCompteur !== 1 && yCompteur !== y) ||              
    (xCompteur !== 1 && xCompteur !== x &&              
    (yCompteur === 1 || yCompteur === y))            
    ) {                
    ligne += symboleUn;            
    } else if (              
    (xCompteur === 1 || xCompteur === x) &&              
    (yCompteur === 1 || yCompteur === y)            
    ) {              
    ligne += symboleDeux;            
    } else {              
    ligne += ' ';           
 }    
    }        
    console.log(ligne);    }} 

    dessiner(10,10,10,10)

    // Afficher dans des array dans un array le ou les mots [["apple 5"],["ban 3"]] + nombre de lettres separés d'un espace
    function addLength(str) {
        let strSplit = str.split(" ");
        let arrWordsLength = [];
          
          for(let i= 0; i < strSplit.length; i++) {
            arrWordsLength.push(strSplit[i] + " " + strSplit[i].length)
          }
          return arrWordsLength
        }
        
//Autre solution pour le précedent
function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
function mango(quantity, price){
    return (quantity - Math.floor(quantity / 3)) * price;
    }


//Objets: recupéré les clés et les valeurs
let monObjet = {one: 1, two: 2, three: 3}
for (let key in monObjet) 
    {console.log(key); 
//Affichera tour à tour "one", "two", "three"
    console.log(monObjet[key]);
} 
// Affichera tour à tour 1, 2, 3}

//this. usage du this pour appliqué la fonction sur l'élément/valeur que je veux 
let verreEau = {seuilVapeur: 100,seuilGlace: 0,
    tempActuelle: 28,affichageTemperatures: function affichageTemperatures() {console.log(this.seuilVapeur);                                                    console.log(this.seuilGlace);                                                      console.log(this.tempActuelle);}}
    
    let verreHuile = {seuilVapeur: 130, seuilGlace: -20, tempActuelle: 30}
    
    verreHuile.affichageTemperatures = verreEau.affichageTemperatures

    verreHuile.affichageTemperatures  

//this essai 
let voitureOne = {prix: 30_000, marque:"tesla", modele:"X", couleur:"rouge"}
let voitureTwo = {prix: 50_000, marque:"audi", modele:"gt", couleur:"noir"}

function phrase() {console.log("Voici la nouvelle " + this.marque + " au prix de " + this.prix + " euros, son nouveau modèle " + this.modele + " sera limité à 1000 exemplaires dans le monde. la couleur " + this.couleur + " est celle que vous préfèrerez.")}

voitureOne.phrase = phrase

voitureOne.phrase()

Voici la nouvelle tesla au prix de 30000 euros, son nouveau modèle X sera limité à 1000 exemplaires dans le monde. la couleur rouge est celle que vous préfèrerez.

//this suite 
let voiture1 = {marque: "Honda", modele: "Civic", couleur: "Verte Olive", prix: 1000, reservoirMax: 30, reservoirActuel: 17}
let voiture2 = {marque: "Ford", modele: "Mustang", couleur: "Noire", prix: 20_000, reservoirMax: 36, reservoirActuel: 13}
function calculerPlein() {
    return this.reservoirMax - this.reservoirActuel;
}
voiture1.calculerPlein = calculerPlein
voiture2.calculerPlein = calculerPlein

voiture1.calculerPlein()
voiture2.calculerPlein()

//this suite 
let voiture1 = {
    marque: "Honda",
    modele: "Civic",
    reservoirMax: 30,
    reservoirActuel: 17,
    calculerPlein: function calculerPlein() {
        return this.reservoirMax - this.reservoirActuel;
    }
}
let mongolfiere1 = {
    sponsorise: "Justin Bridou",
    reservoirMax: 200,
    reservoirActuel: 130,
}
mongolfiere1.calculerPlein = voiture1.calculerPlein
mongolfiere1.calculerPlein()

//2) Créez un objet représentant un post de blog dans la variable blogPost avec les noms de propriétés suivantes: titre (String), nomAuteur (String), date (String/Objet Date), texte (String), catégories (Array de Strings), nombreVues (Number)Remplissez avec les valeurs de votre choix.


let blogPost = {titre: "Alien_From_THE_New_World", nomAuteur:"JONY Rauzty", date:new Date().toDateString(), texte:"Hello World My Boy", categories:["My_Friends","Apocalyspe_DATES","My_Wife","My_JSkills","OK"], nombreVues:1_00_001} 

//3) Bouclez sur l'objet crée à l'exercice précédent pour afficher une ligne pour chaque propriété sous la forme suivante: "Nom de l'Objet | Nom de propriété : Valeur de propriété"

for(let key in blogPost){
    console.log("blogPost" + "|" + key + ":" + blogPost[key])
    //ou
    console.log(`blogPost | ${key} : ${blogPost[key]}`) }

//objets
let personne1 = {prenom: "Norma Jean", nom: "Mortensen", dateNaissance: 1926, pays: "USA"}
let personne2 = {prenom: "Marilyn", nom: "Monroe", "n°Recompenses": 7}

//5) Créer deux méthodes, une pour calculer l'aire et l'autre pour calculer le périmètre. Ces méthodes devront être capables d'être attribuées à un objet possédant les noms depropriétés largeur et longueur. Testez vos fonctions avec 2 objets représentants un carré et un rectangle.
let carre = {
    longueur: 4,
    largeur: 4,
    calculPerimetre: function calculPerimetre() {
        return 2 * (this.longueur + this.largeur);
    },
    calculAire: function calculAire() {
        return this.longueur * this.largeur
    }
}
let rectangle = {
    longueur: 6,
    largeur: 4,
    calculPerimetre: function calculPerimetre() {
        return 2 * (this.longueur + this.largeur);
    },
    calculAire: function calculAire() {
        return this.longueur * this.largeur
    }
}

//6) En utilisant la méthode d'array appropriée, donner la moyenne des notes d'une classe qui se trouvent ci-dessous:
myArray = [88, 77, 54, 0, 91, 89, 69, 67, 82, 51, 72, 52, 91, 49, 66, 81]

myArray.reduce((a, b, index, arr)=> a + (b / arr.length), 0);
67.4375

//7) En utilisant la méthode d'array appropriée, classez les chiffres ci-dessous par ordre 
//"alphabétique" (c'est à dire comme dans un dictionnaire tous les 1 en premiers, puis 
//tous les 2, etc.)
myArray2 = [17, 1, 33, 111, 27, 3, 27, 22, 1323]

myArray2.sort()

//8) En utilisant la méthode appropriée, ne gardez seulement que les noms commençant par la lettre A dans la liste suivante:
let nom = [Brenda, Amelia, Kate, Kayla, Jackie, Daria, Anna]

const donneLettreA = nom.filter( elem => elem[0].toUpperCase() === "A")
['Amelia', 'Anna']

//9) En utilisant la méthode appropriée, trouvez le premier chiffre qui est divisible par 3 sans laisser de reste dans la liste suivante:
let suiteNombres= [23, 13, 44, 7, 27, 38, 71, 19]

suiteNombres.find( e => {return e % 3 === 0} );
27

//4)Un employeur archive le montant du salaire de ses employés dans un dossier par mois et ces dossiers contiennent une fiche par semaine. Cet employeur aimerait 
//disposer d'un programme qui lui permette en entrant une semaine de début et une 
//semaine de fin, de récupérer les fiches correspondantes. Pour vous représentez ces 
//fiches elle ont été mises sous forme d'array. Ecrivez la fonction nécessaire.
janvier = ["fiche1.1", "fiche1.2", "fiche1.3", "fiche1.4"];
fevrier = ["fiche2.1", "fiche2.2", "fiche2.3", "fiche2.4"];
mars = ["fiche3.1", "fiche3.2", "fiche3.3", "fiche3.4"];
avril = ["fiche4.1", "fiche4.2", "fiche4.3", "fiche4.4"];
mai = ["fiche5.1", "fiche5.2", "fiche5.3", "fiche5.4"];
juin = ["fiche6.1", "fiche6.2", "fiche6.3", "fiche6.4"];
juillet = ["fiche7.1", "fiche7.2", "fiche7.3", "fiche7.4"];
aout = ["fiche8.1", "fiche8.2", "fiche8.3", "fiche8.4"];
septembre = ["fiche9.1", "fiche9.2", "fiche9.3", "fiche9.4"];
octobre = ["fiche10.1", "fiche10.2", "fiche10.3", "fiche10.4"];
novembre = ["fiche11.1", "fiche11.2", "fiche11.3", "fiche11.4"];
decembre = ["fiche12.1", "fiche12.2", "fiche12.3", "fiche12.4"];
let annee = [...janvier, ...fevrier, ...mars, ...avril, ...mai, ...juin, ...juillet, ...aout, ...septembre, ...octobre, ...novembre, ...decembre]
function getFiches(files, startWeek, endWeek) {
   return files.slice(startWeek - 1, endWeek);
}
getFiches(annee, 3, 9);

// 6) Pas fini
function presidentThis(president){let president = {nom: "John Kennery"};
                        console.log(this.nom)}