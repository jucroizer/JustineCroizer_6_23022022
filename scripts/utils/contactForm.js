const display = document.querySelector('#contact_button');
// au clique sur le bouton "Contactez-moi" on déclenche la fonction displayModal

const closeCro = document.getElementById('close');

display.addEventListener('click', displayModal);
const modal = document.getElementById("contact_modal");

let boolMod = false;

function displayModal() {
    
    boolMod = true;
    // récupére le nom du photographe
    const name = document.getElementById("photographer-name").innerHTML;

    modal.setAttribute('aria-labelledby', 'Contact me ' + name);
    modal.setAttribute('role', 'dialog');
    // déclenche la fonction contactForm
    contactForm();
    // affiche la modal contenant le formulaire
	modal.style.display = "block";
}

const focusableSelector = 'button, a, input, textarea';
let focusables = [];

const focusInModal = function(e){
    e.preventDefault();
    let index = focusables.findIndex(f => f === modal.querySelector(":focus"));
    if(e.shiftkey === true){
        index--;
    }else{
        index++;
    }
    if(index >= focusables.length){
        index = 0;
    }
    if(index < 0){
        index = focusables.length - 1;
    }
    focusables[index].focus();
};

document.addEventListener('keydown', function(e){
    if(e.key === "Escape" || e.key === "Esc"){
        e.preventDefault();
       closeModal(e);
    }
    if(e.key === "Tab" && boolMod == true){
        focusInModal(e);
    }
    if(e.key === "Enter"){
        submissionForm(e);
    }
});


// au clique sur la croix déclenchement de la fonction closeModal
closeCro.addEventListener('click', closeModal);

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute('aria-label', 'Close Contact Form');
    modal.style.display = "none";
    boolMod = false;
    window.location.reload();
}


// fonction de création du formulaire et de ses champs
function contactForm(){

    const headerName = document.getElementById("photographer-name");

    const form = document.getElementById('contact-form');

    const header = document.querySelector('h2');

    const headerSpan = document.createElement('span');
    headerSpan.setAttribute('id', 'headerSpanArtist');
    headerSpan.textContent = ' ' + headerName.textContent;

    header.appendChild(headerSpan);

    const divFirst = document.createElement('div');
    divFirst.setAttribute('class', 'input-field');

    const first = document.createElement('label');
    first.setAttribute('for', 'firstname');
    first.textContent = 'Prénom';

    const firstInput = document.createElement('input');
    firstInput.setAttribute('id', 'firstname')
    firstInput.setAttribute('type', 'text');
    firstInput.setAttribute('name', 'firstname');
    // firstInput.setAttribute('aria-labelledby', 'First Name');
    console.log(firstInput.value);


    const divName = document.createElement('div');
    divName.setAttribute('class', 'input-field');

    const name = document.createElement('label');
    name.setAttribute('for', 'name');
    name.textContent = 'Nom';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    // nameInput.setAttribute('aria-labelledby', 'Last Name');


    const divMail = document.createElement('div');
    divMail.setAttribute('class', 'input-field');

    const mail= document.createElement('label');
    mail.setAttribute('for', 'mail');
    mail.textContent = 'Email';

    const mailInput = document.createElement('input');
    mailInput.setAttribute('id', 'mail');
    mailInput.setAttribute('name', 'mail');
    mailInput.setAttribute('type', 'text');
    // mailInput.setAttribute('aria-labelledby', 'Email');

    const divMessage = document.createElement('div');
    divMessage.setAttribute('class', 'input-field');

    const message= document.createElement('label');
    message.setAttribute('for', 'message')
    message.textContent = 'Votre Message';

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');

    divFirst.appendChild(first);
    divFirst.appendChild(firstInput);

    divName.appendChild(name);
    divName.appendChild(nameInput);

    divMail.appendChild(mail);
    divMail.appendChild(mailInput);

    divMessage.appendChild(message);
    divMessage.appendChild(messageInput);

    form.appendChild(divFirst);
    form.appendChild(divName);
    form.appendChild(divMail);
    form.appendChild(divMessage);

    focusables = Array.from(modal.querySelectorAll(focusableSelector));
    focusables[0].focus();
}


function submissionForm(){
    // récupération des valeurs entrées par l'utilisateur et impression dans la console
    const prenom = document.getElementById('firstname').value;
    console.log(prenom);

    const nom = document.getElementById('name').value;
    console.log(nom);

    const mail = document.getElementById('mail').value;
    console.log(mail);

    const message = document.getElementById('message').value;
    console.log(message);

    const modal = document.getElementById("contact_modal");

    // fermeture de la modale aprés soumission du formulaire
    modal.style.display = "none";

    // déclenceh la fonction qui vide les champs
    removeItem();
}

function removeItem() {
    
    const removeForm = document.querySelectorAll(".input-field");

    const removeHeaderForm = document.querySelector('#headerSpanArtist');
    removeHeaderForm.innerHTML = ' ';

    removeForm.forEach(e => {
        e.remove();
    })
}



