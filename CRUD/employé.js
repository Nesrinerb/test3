var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var adress = document.getElementById("adress")
var select = document.getElementById("select")
var add = document.getElementById("ajouter")
var modif = document.getElementById("update")

add.addEventListener("click", addinfo)
modif.addEventListener("click", send)


var tab = JSON.parse(localStorage.getItem("employées")) || []

function addinfo() {

    var testValidity = true
    if (firstName.value == "") {
        firstName.classList.add("is-invalid")
        firstName.classList.remove("is-valid")
        testValidity = false
    } else {
        firstName.classList.remove("is-invalid")
        firstName.classList.add("is-valid")
    }

    if (lastName.value == "") {
        lastName.classList.add("is-invalid")
        lastName.classList.remove("is-valid")
        testValidity = false
    } else {
        lastName.classList.remove("is-invalid")
        lastName.classList.add("is-valid")
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

    if (select.value == "") {
        select.classList.add("is-invalid")
        select.classList.remove("is-valid")
        testValidity = false
    } else {
        select.classList.remove("is-invalid")
        select.classList.add("is-valid")
    }

    if (adress.value == "") {
        adress.classList.add("is-invalid")
        adress.classList.remove("is-valid")
        testValidity = false
    } else {
        adress.classList.remove("is-invalid")
        adress.classList.add("is-valid")
    }

    if (testValidity) {
        var worker = {
            nom: firstName.value,
            familyName: lastName.value,
            email: email.value,
            adress: adress.value,
            company: select.value
        }
        tab.push(worker)
        localStorage.setItem("employées", JSON.stringify(tab))

        window.location.reload()
    }
}

function storage() {

}

function creatList() {
    tab.map((e, index) => {
        tBody.innerHTML += `
        <tr>
            <th>${index + 1}</th>
            <th>${e.nom}</th>
            <th>${e.familyName}</th>
            <th>${e.email}</th>
            <th>${e.adress}</th>
            <th>${e.company}</th>
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
    tab.splice(i, 1)
    localStorage.setItem("employées", JSON.stringify(tab))
    window.location.reload()
}

var form = document.getElementById("form")
function show(i) {
    firstName.value = tab[i].nom
    lastName.value = tab[i].familyName
    email.value = tab[i].email
    adress.value = tab[i].adress
    select.value = tab[i].company
    add.classList.add("d-none")
    modif.classList.remove("d-none")
}
function send(i) {

    worker = {
        nom: firstName.value,
        familyName: lastName.value,
        email: email.value,
        adress: adress.value,
        company: select.value
    }
    tab.splice(i, 1, worker)
    localStorage.setItem("employées", JSON.stringify(tab))
    window.location.reload()

    add.classList.remove("d-none")
    modif.classList.add("d-none")

    firstName.value = ""
    lastName.value = ""
    email.value = ""
    adress.value = ""
    select.value = ""

}

var array = JSON.parse(localStorage.getItem("companies"))
var select = document.getElementById("select")

array.map((e) => {
    select.innerHTML += `
    <option>${e.nom}</option>
    `
}

)