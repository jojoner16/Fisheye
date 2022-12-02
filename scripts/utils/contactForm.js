let IsFormContactKeyListenerActive = false;
document.addEventListener( 'keydown',
    function (event) {
        if (event.key === "Escape") {
            IsFormContactKeyListenerActive ? closeModal() : undefined;
        }
    }
);

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.classList.add("modal-show");
    modal.querySelector("img").focus();

    IsFormContactKeyListenerActive = true;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
	modal.classList.remove("modal-show");
    setTimeout( () => document.querySelector("main .contact_button").focus() , 50);
    IsFormContactKeyListenerActive = false;
}

function getPhotographerId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.photographer;
}

function getFormData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let yourMessage = document.getElementById("yourMessage").value;
    let data = {firstName, lastName, email, yourMessage};
    resetFormData();

    return data;
}

function resetFormData() {
    document.getElementById("firstName").value   =
    document.getElementById("lastName").value    =
    document.getElementById("email").value       =
    document.getElementById("yourMessage").value = '';
}

function sendForm(event) {
    event.preventDefault();

    // recuperer les données du formulaire getFormData
    console.log(getFormData());

    closeModal();
    return false;
}