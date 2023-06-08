function somme(tab) {
    var s = 0
    tab.map((e) => {
        if (e > 0) {
            s += e
        }
    })
    return (s)
}

// function somme(tab) {
//     var s = 0
//     for (let i = 0; i < tab.length; i++) {
//         if (tab[i] > 0) {
//             s += tab[i]
//         }
//     }
//     return (s)
// }
const array = [2, 4, -1, -3, 5, 2]
const som = somme(array)

alert(som)