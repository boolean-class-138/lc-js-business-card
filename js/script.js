// DOM ELEMENTS
// Forms
const formElm = document.getElementById("form");
const formResetBtnElm = document.getElementById("reset");
const formAlertSuccessElm = document.getElementById("alert-success");
// Fields
const titleFieldElm = document.getElementById("title-field");
const fullNameFieldElm = document.getElementById("name-field");
const companyFieldElm = document.getElementById("company-field");
const roleFieldElm = document.getElementById("role-field");
const emailFieldElm = document.getElementById("email-field");
const phoneFieldElm = document.getElementById("phone-field");
const companyPicFieldElm = document.getElementById("company-pic-field");
// Card
const companyCardElm = document.getElementById("company");
const titleCardElm = document.getElementById("title");
const nameCardElm = document.getElementById("name");
const roleCardElm = document.getElementById("role");
const phoneCardElm = document.getElementById("phone");
const emailCardElm = document.getElementById("email");
const companyPicCardElm = document.getElementById("company-pic");

// DOM EVENTS
formElm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Prendo i valori dei campi attraverso .value
    // li inserisco al posto dei placeholder della card
    companyCardElm.innerHTML = companyFieldElm.value;
    titleCardElm.innerHTML = titleFieldElm.value;
    nameCardElm.innerHTML = fullNameFieldElm.value;
    roleCardElm.innerHTML = roleFieldElm.value;
    phoneCardElm.innerHTML = phoneFieldElm.value;
    emailCardElm.innerHTML = emailFieldElm.value;
    // Attenzioneee è un'immagine
    companyPicCardElm.src = companyPicFieldElm.value;

    formAlertSuccessElm.classList.remove("d-none");
});


formResetBtnElm.addEventListener("click", function() {
    formAlertSuccessElm.classList.add("d-none")
});