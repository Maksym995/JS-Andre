//1) Créer une fonction presentation qui prend 3 arguments (prenom, nom, age) qui affiche dans la console une phrase de présentation.
const presentation = (prenom, nom, age) => `hey je suis ${prenom}`;

presentation("maksym")
// Résultat : hey je suis maksym

//2) Créer une fonction calculatriceSomme qui prend 2 arguments (nombre1, nombre2) et qui renvoie le résultat. Faites la même chose pour les 3 autres opérations de base mais donnez à la multiplication et à la division des paramètres par défaut valant 1
const calculatriceSomme = (num1 = 1, num2 = 1) => num1 / num2

calculatriceSomme(4,2)
// Résultat : 2

//5) Créer une fonction estImpair qui prend un argument (nombre) qui retourne true si le nombre est impaire ou false sinon.
const impair = num => num % 2 !== 0 ? true : false

impair(2)
//Résultat false         sinon  impair(1) = true

//La même chose
const impaire = num => num % 2 !== 0

impaire(2)
//Résultat false         sinon  impair(1) = true

