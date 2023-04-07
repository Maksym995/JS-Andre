/*
Vous recevez des arrays imbriqués, écrivez une fonction qui prend un array imbriqué et "l'aplatit" (flatten en Anglais) pour ne plus avoir qu'un seul array qui contient les valeurs dans le même ordre qu'elles vous ont été données.
Par exemple:
[[1, 3, 6], 8, 4, 2, [1, 1, 1]] => [1, 3, 6, 8, 4, 2, 1, 1, 1];
Bonus: Soyez-sur que votre fonction puisse retourner un résultat corrects avec plusieurs niveaux d'imbrication.
*/
function flattenRecursive(elem, i = 0) {
    if (elem[i] === undefined) return []
    else if (Array.isArray(elem[i])) return flattenRecursive(elem[i], 0).concat(flattenRecursive(elem, i + 1))
    return [elem[i]].concat(flattenRecursive(elem, i + 1))
}
// Expliquez sous forme graphique comment cet algorithme agit