function ex3(ch) {
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == " " && ch[i + 1] !== " " && ch[i + 1] != undefined) {
            alert(ch[0] + "." + ch[i + 1])
        }

    }
}

const ch = "America Tunisia"
ex3(ch)