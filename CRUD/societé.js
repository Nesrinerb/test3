var companyName = document.getElementById("companyName")
var adress = document.getElementById("adress")
var email = document.getElementById("email")
var add = document.getElementById("ajouter")
var modif = document.getElementById("update")

add.addEventListener("click", addinfo)
modif.addEventListener("click", send)


var array = JSON.parse(localStorage.getItem("companies")) || []

function addinfo() {

    var testValidity = true
    if (companyName.value == "") {
        companyName.classList.add("is-invalid")
        companyName.classList.remove("is-valid")
        testValidity = false
    } else {
        companyName.classList.remove("is-invalid")
        companyName.classList.add("is-valid")
    }

    if (adress.value == "") {
        adress.classList.add("is-invalid")
        adress.classList.remove("is-valid")
        testValidity = false
    } else {
        adress.classList.remove("is-invalid")
        adress.classList.add("is-valid")
    }


    var expresStandard = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value == "") {
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        testValidity = false
    } else if (!expresStandard.test(email.value)) {
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        testValidity = false
    }
    else {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }


    if (testValidity) {
        var company = {
            nom: companyName.value,
            adress: adress.value,
            email: email.value,
            employées: ""
        }
        array.push(company)
        localStorage.setItem("companies", JSON.stringify(array))
        window.location.reload()
    }
}

var tab = JSON.parse(localStorage.getItem("employées"))

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < tab.length; j++) {
        if (array[i].nom == tab[j].company) {
            array[i].employées += tab[j].nom
        }

    }

}





function creatList() {
    array.map((e, index) => {
        tBody.innerHTML += `
        <tr>
            <th>${index + 1}</th>
            <th>${e.nom}</th>
            <th>${e.adress}</th>
            <th>${e.email}</th>
           
            <th>
            <button type="button" class="btn btn-danger" onClick="deleteEmployé(${index})">Supprimer</button>
            <button type="button" class="btn btn-light" onClick="show(${index})">Editer</button>
            </th>
        </tr>
        `
    }
    )
}

function deleteEmployé(i) {
    array.splice(i, 1)
    localStorage.setItem("companies", JSON.stringify(array))
    window.location.reload()
}

var form = document.getElementById("form")
function show(i) {
    companyName.value = array[i].nom
    adress.value = array[i].adress
    email.value = array[i].email

    add.classList.add("d-none")
    modif.classList.remove("d-none")
}
function send(i) {

    company = {
        nom: companyName.value,
        adress: adress.value,
        email: email.value,

    }
    array.splice(i, 1, company)
    localStorage.setItem("companies", JSON.stringify(array))
    window.location.reload()

    add.classList.remove("d-none")
    modif.classList.add("d-none")

    companyName.value = ""
    adress.value = ""
    email.value = ""


}