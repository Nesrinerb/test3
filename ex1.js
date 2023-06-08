const array = [2, 5, 8, 9]

function minimum(tab) {
    var min1 = Math.min(...tab)
    var n = tab.indexOf(min1)
    tab.splice(n, 1)
    var min2 = Math.min(...tab)
    return (min1 + min2)
}

var m = minimum(array)
alert(m)