class Combattant {
    constructor(nom, attaque, pv, victoires) {
        this.nom = nom
        this.attaque = attaque
        this.pv = pv
        this.victoires = victoires
    }
    fiche() {
        return `${this.nom} possède ${this.attaque} attaque et ${this.pv} pv et est actuellement à ${this.victoires} victoires`
    }
}
let jaouad = new Combattant("Jaouad", 15, 4500, 20)
let fred = new Combattant("Fred", 20, 3000, 20)
jaouad.fiche()
fred.fiche()


//
let personne = {
    prenom: "John",
    nom: "Rauzy",
    get nomComplet() {return `${this.prenom} ${this.nom}`
    }
}
personne.nomComplet
personne.prenom = "Hugolin"
personne.nomComplet

//9 Lors du développement d'un site d'e-commerce vous devez gérer les adresses des clients. Pour l'exercice vous recevez la string "Avenue du Parc 89, 1060 Saint-Gilles, Belgique". A vous de créer un objet qui recevra la string en entier qui la découpera afin de la placer dans différentes propriétés ("rue", "codeCommune", "commune", "pays"). Utilisez un setter.
let lieu = {
    rue: null,
    codeCommune: null,
    commune: null,
    pays: null,

    set adressesClients(lieu){
      const splitArray = lieu.split(',');
      let rue = splitArray[0];
      this.rue=rue;

      
      let codeEtCommuneArray = splitArray[1].split(" ");
      let codeCommune = codeEtCommuneArray[0];
      let commune = codeEtCommuneArray[1];

      let pays = splitArray[2];
      

      this.codeCommune=codeCommune;
      this.commune=commune;
      this.pays=pays;
    
    }
  }
  lieu.adressesClients = "Avenue du Parc 89,1060 Saint-Gilles,Belgique"; // ["Avenue du Parc 89", "1060 Saint-Gilles", "Belgique"]
  // ["1060", "Saint-Gilles"]

// 9) AUTRE SOLUTION
let adresse = {
    rue: null,
    codeCommune: null,
    commune: null,
    pays: null,
    set adresseComplete(adresse) {
        const adresseSplit = adresse.split(","); // ["Avenue du Parc 89", "1060 Saint-Gilles", "Belgique"]
        const communeSplit = adresseSplit[1].split(" "); // ["1060", "Saint-Gilles"]
        this.rue = adresseSplit[0];
        this.codeCommune = communeSplit[0];
        this.commune = communeSplit[1];
        this.pays = adresseSplit[2];
    }
}
adresse.adresseComplete = "Avenue du Parc 89,1060 Saint-Gilles,Belgique";


  //10 Reprenez votre objet créé à l'exercice 2 et modifiez le de sorte à montrer que les propriétés sont censées être privées. Ajoutez aussi des getters pour récuperer les valeurs des propriétés privées puis des setters qui s'occuperont de valider que lorsqu'on modifie une propriété son type est correct. Si le type n'est pas correct alors la valeur ne doit pas se retrouver dans la propriété.

   //ChatGPT solution
  const blogPost = (function() {
    let _titre = "La danse des mutants";
    let _nomAuteur = "Yanis";
    let _date = new Date();
    let _text = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    let _categories = ["Erotique", "Drama"];
    let _nombreVues = 1_000_000;
  
    return {
      get titre() {
        return _titre;
      },
      set titre(value) {
        if (typeof value === "string") {
          _titre = value;
        } else {
          console.error("Le titre doit être une chaîne de caractères.");
        }
      },
      get nomAuteur() {
        return _nomAuteur;
      },
      set nomAuteur(value) {
        if (typeof value === "string") {
          _nomAuteur = value;
        } else {
          console.error("Le nom de l'auteur doit être une chaîne de caractères.");
        }
      },
      get date() {
        return _date;
      },
      set date(value) {
        if (value instanceof Date) {
          _date = value;
        } else {
          console.error("La date doit être un objet de type Date.");
        }
      },
      get text() {
        return _text;
      },
      set text(value) {
        if (typeof value === "string") {
          _text = value;
        } else {
          console.error("Le texte doit être une chaîne de caractères.");
        }
      },
      get categories() {
        return _categories;
      },
      set categories(value) {
        if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
          _categories = value;
        } else {
          console.error("Les catégories doivent être un tableau de chaînes de caractères.");
        }
      },
      get nombreVues() {
        return _nombreVues;
      },
      set nombreVues(value) {
        if (typeof value === "number" && value >= 0) {
          _nombreVues = value;
        } else {
          console.error("Le nombre de vues doit être un nombre positif.");
        }
      },
    };
  })();

// 10) ANDRE SOLUTION

const blogPost = {
    _titre: "AstroWorld",
    _nomAuteur: "Travis Scott",
    _date: new Date(),
    _texte: "Wouh Ah Wouh Ah",
    _categories: ["Rap", "Scientifique", "Action", "Horreur"],
    _nombresVues: 1_300_000,
    get titre() {
        return this._titre
    },
    get nomAuteur() {
        return this._nomAuteur
    },
    get date() {
        return this._date
    },
    get texte() {
        return this._texte
    },
    get categories() {
        return this._categories
    },
    get nombresVues() {
        return this._nombresVues
    },
    set titre(titre) {
        if (typeof titre === "string") this._titre = titre
    },
    set nomAuteur(nomAuteur) {
        if (typeof nomAuteur === "string") this._nomAuteur = nomAuteur
    },
    set date(date) {
        if (date instanceof Date) this._date = date
    },
    set texte(texte) {
        if (typeof texte === "string") this._texte = texte
    },
    set categories(categories) {
        if (categories instanceof Array) this._categories = categories
    },
    set nombresVues(nombresVues) {
        if (typeof nombresVues === "number") this._nombresVues = nombresVues
    },    
}

//
monObjet = {prenom: Maksym, nom : Sokol}
for (let key in monObjet) {
  console.log(monObjet[key])
}

//Maksym Sokol

//
monObjet = {prenom: Maksym, nom : Sokol}
function test(){
  return "prenom"
}
monObjet[test()]
// Maksym

//
let arr = [2,4,6,8,10,12]

for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i])
}
//

//
