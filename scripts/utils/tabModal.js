// retirer le scrol des modal ouvertes
function tabindexSet(value){
    let body = document.querySelector("body");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const tabs = [ ...main.querySelectorAll("[tabindex]") , ...header.querySelectorAll("[tabindex]") ];

    if ( body.style.overflow === 'hidden' ) { 
        body.style.overflow = 'unset'
    } else {
        body.style.overflow = 'hidden';
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("tabindex",`${value}`);
    }
}

// Modal avec la touche Tab 
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const message = document.getElementById('yourMessage');
const email = document.getElementById('email');

document.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        if (e.shiftKey) {
            if (document.activeElement === modalClose[0]) {
                firstName.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === firstName) {
                lastName.focus();
                e.preventDefault();
            } else if (document.activeElement === lastName) {
                email.focus();
                e.preventDefault();
            } else if (document.activeElement === email) {
                message.focus();
                e.preventDefault();
            } else if (document.activeElement === message) {
                firstName.focus();
                e.preventDefault();
            }
        }
    }
});