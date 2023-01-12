let IsFormContactKeyListenerActive = false;
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    IsFormContactKeyListenerActive ? closeModal() : undefined;
  }
});

function displayModal() {
  const modal = document.getElementById("contact_modal");
  tabindexSet(-1);
  modal.classList.add("modal-show");
  modal.querySelector("img").focus();

  IsFormContactKeyListenerActive = true;
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  tabindexSet(0);
  modal.classList.remove("modal-show");
  setTimeout(() => document.querySelector("main .contact_button").focus(), 50);
  IsFormContactKeyListenerActive = false;
}

function getPhotographerId() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params.photographer;
}
getPhotographerId();

function getFormData() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const yourMessage = document.getElementById("yourMessage").value;
  const data = { firstName, lastName, email, yourMessage };
  resetFormData();

  return data;
}

function resetFormData() {
  document.getElementById("firstName").value =
    document.getElementById("lastName").value =
    document.getElementById("email").value =
    document.getElementById("yourMessage").value =
      "";
}

function sendForm(event) {
  event.preventDefault();

  // recuperer les données du formulaire getFormData
  console.log(getFormData());

  closeModal();
  return false;
}
