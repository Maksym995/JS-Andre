//Prendre en compte l'odre des oppérations 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#tableau

// 1) Instanciez un objet date ayant pour timestamp votre date de naissance. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
let dateNaissance = new Date('1995', '00', '03');

//2) Stockez ensuite dans une variable, à partir de l'objet crée précédemment, le temps passé en milliseconds depuis le 1 janvier 1970 à minuit.
// ChatGPT : Pour stocker le nombre de millisecondes écoulées depuis le 1er janvier 1970 à minuit (UTC) jusqu'à la date représentée par l'objet "dateNaissance", vous pouvez utiliser la méthode getTime() sur l'objet Date.
// Voici le code pour stocker le nombre de millisecondes écoulées dans une variable nommée "elapsedMilliseconds":
let dateNaissance2 = new Date('1995', '00', '03');
let elapsedMilliseconds = dateNaissance2.getTime();
// ChatGPT : La méthode getTime() retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970 à minuit (UTC) jusqu'à la date spécifiée, qui est stockée dans l'objet "naissance" dans ce cas. En stockant cette valeur dans la variable "elapsedMilliseconds", vous pouvez l'utiliser ultérieurement dans votre code pour toute calcul ou comparaison nécessaire.
//OU
Date.parse("03 january 1995")

// Constructor
class Voiture{
    constructor(marque, modele,couleur,prix) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.prix = prix;
    }

    rouler() {
        console.log(`${this.marque} ${this.modele} fait "Vroum Vroum"`);
    }
}
let maVoiture = new Voiture("Ford", "Mustang", "Rouge", 200_000);
maVoiture.rouler()

// 3) Créez une classe Chien qui servira à instancier 2 chiens. Les chiens devront posséder un nom, une race, un âge et une couleur. De plus les objets devront posséder une méthode qui permet de savoir l'âge du chien converti en âge humain en se basant sur la croyance que "Une année pour un chien compte comme 7 années pour un humain".
class chien {
    constructor(nom,race,age,couleur){
      this.nom = nom;
      this.race = race;
      this.age = age;
      this.couleur = couleur;
    }
    
    chienAgeHumain() {
      return this.age*7
    }
  }
  let chien1 = new chien("Roxer","Dobberman",15,"noir")
  console.log(chien1)
  chien1.chienAgeHumain()

// 4) Créez un objet représentant un chat qui possédera un nom, des vies restantes au nombre de 9 et deux méthodes. Une qui permettra au chat de miauler dans la console (console.log) et la deuxième qui permettra de diminuer le nombre de vies restantes duchat.Utilisez la syntaxe courte pour les méthodes.
let monChat = {
    nom: "Spikey",
    nbrViesRestantes: 9,
    miauler() {
        console.log("Miaouw");
    },
    perdreUneVie() {
        this.nbrViesRestantes--
    }
}
monChat.perdreUneVie()

// 5) Trouvez la documentation liée à la classe FormData.Ensuite expliquez sous forme visuelle ce qu'elle représente, comment instancier un objet à partir du constructeur et quel est son utilisation principale.

// Bonjour, ceci est Bing. Je vais essayer de vous aider. 😊

// La documentation liée à la classe FormData en javascript se trouve sur le site MDN123. Il s’agit d’une interface qui permet de construire facilement un ensemble de paires clé/valeur représentant les champs du formulaire et leurs valeurs, qui peuvent ensuite être facilement envoyées en utilisant la méthode XMLHttpRequest.send() de l’objet XMLHttpRequest1.

// Voici une illustration de ce qu’elle représente :

// Pour instancier un objet à partir du constructeur FormData, vous pouvez utiliser la syntaxe suivante :

// Créer un objet FormData vide
const formData = new FormData();

// Ajouter une paire clé/valeur
formData.append("username", "Chris");

// Créer un objet FormData à partir d'un élément <form>
const form = document.getElementById("form");
const formDataa = new FormData(form);

// L’utilisation principale de la classe FormData est d’envoyer des données de formulaire au serveur via une requête HTTP, par exemple :

// Créer une requête XMLHttpRequest
const xhr = new XMLHttpRequest();

// Ouvrir la requête avec la méthode POST et l'URL du serveur
xhr.open("POST", "https://example.com/submit");

// Envoyer l'objet FormData
xhr.send(formDataa);

// AUSSI modifier ou supprimer une paire clé/valeur dans un objet FormData // Créer un objet FormData avec deux paires clé/valeur
const formData1 = new FormData();
formData1.append("username", "Chris");
formData1.append("age", 25);

// Modifier la valeur de la clé "age"
formData.set("age", 26);

// Supprimer la paire clé/valeur "username"
formData.delete("username");

// 6) Instanciez à partir de la classe FormData en prenant comme base un formulaire decontact basique (nom, prénom, email, sujet, message).Ajoutez ensuite manuellement un clef qui aura pour valeur la date actuelle.Vérifiez que les clefs & valeurs sont correctes en les affichant par couple dans un console.log.

// Créer un objet FormData vide
const formData2 = new FormData();

// Ajouter les paires clé/valeur correspondant aux champs nom, prénom, email, sujet et message
formData2.append("nom", "Sokol");
formData2.append("prenom", "Maksym");
formData2.append("email", "maksymsokoll@gmail.com");
formData2.append("sujet", "Demande de renseignements");
formData2.append("message", "Bonjour, je voudrais tout savoir faire...");

// Ajouter manuellement une clef qui aura pour valeur la date actuelle
formData.append("date", new Date().toLocaleString());

// Envoyer l'objet FormData au serveur via une requête HTTP POST
const xhrr = new XMLHttpRequest();
xhrr.open("POST", "https://siteweb.com/contact");
xhrr.send(formData2);

// VERIFIER avec un itérateur les paires clé/valeur
// Obtenir un itérateur sur les paires clé/valeur
const iterator = formData2.entries();

// Parcourir l'itérateur et afficher chaque paire dans la console
for (const pair of iterator) {
  console.log(pair[0] + ": " + pair[1]);
}

// ANDRE SOLUTION


// 7) Créez une classe WebDeveloper qui aura dans son modèle des propriétés nom, prénom, date de naissance, pays, spécialisation, email.Assurez vous que à l'instanciation et lors des modifications ultérieures que:•Le nom, le prénom, le pays, la spécialisation et l'email soient des chaînes de caractères•La date de naissance soit un objet créé à partir de la classe Date ( instanceof )•La spécialisation soit un des cas suivants: Front-end, Back-end, Full-stack•L'email possède au moins un arobase ("@") et un point (".") à l'intérieur de la chaîne de caractères. (Si vous connaissez les RegEx vous pouvez les utilisez sinon simplifiez vous la vie)

class WebDeveloper{
    constructor(nom, prenom, dateNaissance, pays, specialisation, email){

        //this.validate(nom,prenom,dateNaissance,pays,specialisation,email);
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.pays = pays;
        this.specialisation = specialisation;
        this.email = email;

    }
    
    set nom(valeur){
        if (typeof valeur === "string") {
            this._nom = valeur;
        }
    }
    get nom() {
        return this._nom;
    }

    set prenom(valeur){
        if (typeof valeur === "string") {
            this._prenom = valeur;
        }
    }
    get prenom() {
        return this._prenom;
    }

    set dateNaissance(valeur){
        if (valeur instanceof Date) {
            this._dateNaissance = valeur;
        }
    }
    get dateNaissance() {
        return this._dateNaissance;
    }

    set pays(valeur){
        if (typeof valeur === "string") {
            this._pays = valeur;
        }
    }
    get pays() {
        return this._pays;
    }

    set specialisation(valeur){
        if (typeof valeur === "string" && ["Front-end", "Back-end", "Full-stack"].includes(newSpecialisation)) {
            this._specialisation = newSpecialisation;
        }
    }
    get specialisation() {return this._specialisation;}

    set email(valeur){
        if (typeof valeur === "string" && valeur.includes("@") && valeur.includes(".")){
            this._email = valeur;
        }
    }
    get email() {return this._email;}
}

let dev = new WebDeveloper("Doe", "John", "01/01/2000", "France", "Full-stack", "johndoe@example.com");

// 7) ANDRE
class WebDeveloper {
    constructor(nom, prenom, dateNaissance, pays, specialisation, email) {
        this.nom = nom
        this.prenom = prenom
        this.dateNaissance = dateNaissance
        this.pays = pays
        this.specialisation = specialisation
        this.email = email
    }
    get nom() {
        return this._nom;
    }
    set nom(valeur) {
        if (typeof valeur === "string") {
            this._nom = valeur;
        }
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(valeur) {
        if (typeof valeur === "string") {
            this._prenom = valeur;
        }
    }
    get dateNaissance() {
        return this._dateNaissance;
    }
    set dateNaissance(valeur) {
        if (valeur instanceof Date) {
            this._dateNaissance = valeur;
        }
    }
    get pays() {
        return this._pays;
    }
    set pays(valeur) {
        if (typeof valeur === "string") {
            this._pays = valeur;
        }
    }
    get specialisation() {
        return this._specialisation;
    }
    set specialisation(valeur) {
        if (["Front", "Back", "Full"].includes(valeur)) {
            this._specialisation = valeur;
        }
    }
    get email() {
        return this._email;
    }
    set email(valeur) {
        if (typeof valeur === "string" && valeur.includes("@") && valeur.includes(".")) {
            this._email = valeur;
        }
    }
    
}

// Créez une classe voiture qui possédera un modèle, une marque, un prix actuel, un prix de base, une vitesse, une vitesse max et un état de déplacement (immobile ou mouvant, via un booléen, qui est basé sur la vitesse actuelle)
 
//Chaque voiture doit pouvoir accélèrer (sans jamais dépasser la vitesse max), freiner (la vitesse ne peut pas descendre sous 0), et donne son statut à travers une chaîne de caractère. Elle doit aussi avoir des réductions via une méthode qui modifiera le prix (via un pourcentage)
class Voiture{
    constructor(modele,marque,prixActuel,prixBase,vitesseMax,etatDeplacement,vitesse = 0){
    this.modele = modele;
    this.marque = marque;
    this.prixActuel = prixActuel;
    this.prixBase = prixBase;
    this.vitesse = vitesse;
    this.vitesseMax = vitesseMax;
    this.etatDeplacement = etatDeplacement;
    }

    get etatDeplacement(){
        return this._etatDeplacement;
    }

    get modele(){
        return this._modele;
    }
    set modele(valeur){
        if(typeof valeur === "string"){
            this._modele = valeur;
        }
    }
    get marque(){
        return this._marque;
    }
    set marque(valeur){
        if(typeof valeur === "string"){
            this._marque = valeur;
        }
    }
    get prixActuel(){
        return this._prixActuel;
    }
    set prixActuel(valeur){
        if(typeof valeur === 'number'){
            throw new Error("Le paramètre 'increment' doit être un nombre !");
        }
        this._prixActuel = valeur;
    }
    get prixBase(){
        return this._prixBase;
    }
    set prixBase(valeur){
        if(typeof valeur === 'number'){
            throw new Error("Le paramètre 'increment' doit être un nombre !");        
        }
        this._this.prixBase = valeur;
    }

    accelerer(increment) {
        if (typeof increment !== "number") {
          throw new Error("Le paramètre 'increment' doit être un nombre !");
        }
        this.vitesse += increment;
        if (this.vitesse > this.vitesseMax) {
          this.vitesse = this.vitesseMax;
        }
        this._etatDeplacement = this.vitesse > 0;
      }
    
      freiner(decrement) {
        if (typeof decrement !== "number") {
          throw new Error("Le paramètre 'decrement' doit être un nombre !");
        }
        this.vitesse -= decrement;
        if (this.vitesse < 0) {
          this.vitesse = 0;
        }
        this._etatDeplacement = this.vitesse > 0;
      }
      
      statut() {
        return `La voiture ${this.marque} ${this.modele} est actuellement en ${this.etatDeplacement}, avec une vitesse de ${this.vitesse} km/h.`;
      }
    
      appliquerReduction(pourcentage) {
        const reduction = (this.prixBase * pourcentage) / 100;
        this.prixActuel = this.prixBase - reduction;
      }

}

const voiture1 = new Voiture("Clio", "Renault", 15000, 18000, 180, false, 0);
const voiture2 = new Voiture("Model 3", "Tesla", 50000, 55000, 225, false, 0);

// ANDRE
class Voiture {
    constructor(modele, marque, prixActuel, prixBase, vitesseActuelle, vitesseMax, etatDeplacement) {
        this.modele = modele;
        this.marque = marque;
        this.prixActuel = prixActuel;
        this.prixBase = prixBase;
        this.vitesseActuelle = vitesseActuelle;
        this.vitesseMax = vitesseMax;
        this.etatDeplacement = vitesse > 0 ? true : false;
    }
    accelerer(increment) {
        if (this.vitesseActuelle + increment <= this.vitesseMax && increment > 0) {
            this.vitesseActuelle += increment
        }
        if (this.vitesseActuelle > 0) this.etatDeplacement = true;
    }
    freiner(decrement) {
        if (this.vitesseActuelle - decrement >= 0 && decrement > 0) {
            this.vitesseActuelle -= decrement
        }
        if (this.vitesseActuelle === 0) this.etatDeplacement = false;
    }
    reduction(pourcentage) {
        this.prixActuel = this.prixBase - this.prixBase * (pourcentage / 100)
    }
    status() {
        return `${this.modele} ${this.marque} a une vitesse max de ${this.vitesseMax}km/h et est actuellement ${this.etatDeplacement ? "mouvante" : "immobile"} à ${this.vitesseActuelle}km/h. Son prix de base est de ${this.prixBase} et est actuellement en vente à ${this.prixActuel}`
    }
}

// 10) Vous devez représenter le personnel d'un avion à travers des objets en utilisant des classes.Créez une classe Travailleur qui possédera un nom, un prénom, des jours de congés restants aux nombres de 20 par défaut, une date d'embauche, une date de fin de contrat (undefined si CDI), un salaire et une méthode informations pour afficher toutes ces informations sous forme de phrase.
// &&
// 11) Ajoutez à votre classe Travailleur une méthode prendreConge qui prendra en argument un entier qui servira à diminuer le nombre de congés restants avant d'afficher le nombre de congés restants. Les congés restants ne peuvent descendre sous 0.

class Travailleur{
    constructor(nom,prenom,joursCongesRestants=20,dateEmbauche,dateFinContrat,salaire){
        this.nom=nom;
        this.prenom=prenom;
        this.joursCongesRestants=joursCongesRestants;
        this.dateEmbauche=dateEmbauche;
        this.dateFinContrat=dateFinContrat;
        this.salaire=salaire;
    }
    get nom(){
        return this._nom;
    }
    set nom(valeur){
        if(typeof valeur === 'string'){
            this._nom=valeur;
        }
    }
    get prenom(){
        return this._prenom;
    }
    set prenom(valeur){
        if(typeof valeur ==='string'){
            this._prenom=valeur;
        }
    }
    get dateEmbauche(){
        return this._dateEmbauche;
    }
    set dateEmbauche(valeur){
        if(valeur instanceof Date){
            this._dateEmbauche=valeur;
        }
    }
    get joursCongesRestants(){
        return this._joursCongesRestants
    }
    set joursCongesRestants(valeur){
        if(typeof valeur === 'number'){
            this._joursCongesRestants=valeur;
        }
    }
    get dateFinContrat(){
        return this._dateFinContrat;
    }
    set dateFinContrat(valeur){
        if(valeur instanceof Date || valeur === undefined){
            this._dateFinContrat=valeur;
        }
    }
    get salaire(){
        return this._salaire;
    }
    set salaire(valeur){
        if(typeof valeur === 'number'){
            this._salaire=valeur;
        }
    }
    prendreConge(valeur){
        if (valeur <= this.joursCongesRestants && valeur > 0) {
            this.joursCongesRestants -= valeur;
        }
    }
    informations(){
        return `${this.nom} ${this.prenom} a encore ${this.joursCongesRestants}, il a été embaucher le: ${this.dateEmbauche} et son contrat prend fin le: ${this.dateFinContrat}. Son salaire est de ${this.salaire}.`
 }
}

// 10) Partie 2
// Créez ensuite une classe HotesseAir qui prendra comme classe ancêtre Travailleur. Les hôtesses de l'air posséderont toujours par défaut un contrat d'un an et un salaire de 2000€. Elles auront également une méthode renouvelerContrat qui ajoutera une année à leur fin de contrat.
class HotesseAir extends Travailleur {
    constructor(nom,prenom,joursCongesRestants=20,dateEmbauche,dateFinContrat,salaire=2000){
        super(nom,prenom,joursCongesRestants,dateEmbauche,dateFinContrat,salaire)
        const dateFinContrat = new Date(dateEmbauche);
        dateFinContrat.setFullYear(dateFinContrat.getFullYear()+1);
        this.dateFinContrat = dateFinContrat;
    }

    renouvelerContrat(nbAnnees = 1){
        //Pour que dateFinContrat sois une date il faut que l'instanceof sois en Date ( voir const)
        this.dateFinContrat.setFullYear(this.dateFinContrat.getFullYear() + nbAnnees);
    }
}

// Viendra ensuite la classe PiloteAir qui prendra également comme classe ancêtre Travailleur. Leur contrat sera par défaut sans fin et avec un salaire de 8000€. Les pilotes auront une propriété supplémentaire appelée joursRecup qui contiendra le nombre de jours qu'ils peuvent récupérer. Ils auront de plus une méthode longCourrier qui ajoutera un jour de récupération à chaque long voyage accompli.
// Instanciez à partir des deux sous-classes pour tester la validité de votre code.
// Redéfinissez cette méthode sur la classe PiloteAir car les pilotes doivent prendre minimum 7 jours de congé à la fois.

class PiloteAir extends Travailleur {
    constructor(nom,prenom,joursCongesRestants=20,dateEmbauche, salaire=8000,dateFinContrat=undefined, joursRecup = 0){    
        super(nom,prenom,joursCongesRestants,dateEmbauche,dateFinContrat,salaire)
        this.joursRecup = joursRecup;
    }
    longCourrier(){
        this.joursRecup += 1;
    }
    prendreConge(valeur){
        if (valeur<= this.joursCongesRestants && valeur >= 7) {
            this.joursCongesRestants -= valeur;
            console.log(`Il reste ${this.joursCongesRestants}`)
        }
    }
}
// Instanciez à partir des deux classes filles (HotesseAir & PiloteAir) et vérifiez que la méthode prendreConge fonctionne correctement. Si c'est le cas dessinez 2 schémas, un pour chaque classe, afin de montrer le chemin parcouru dans la chaîne de prototype.
const hotesse = new HotesseAir("Dupont", "Marie", 20, new Date("2020-05-01"));
const pilote = new PiloteAir("Martin", "Pierre", 20, new Date("2019-03-15"), 8000, 0, undefined);




