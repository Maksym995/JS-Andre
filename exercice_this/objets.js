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