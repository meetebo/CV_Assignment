const form = document.getElementById('forms')




const email = document.getElementById('emails');
const emailError = document.querySelector('#emails + span.error');

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.innerHTML = '';
        emailError.className = 'error';
    } else {
        showError();
    }
    });

form.addEventListener('submit', function (event) {
    if(!email.validity.valid) {
           showError();   
           event.preventDefault();

    }
    });

function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = '*Kindly fill the email section';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = '*Kindly enter an appropriate email address';
    } else if(email.validity.tooShort) {
        emailError.textContent = `*Input should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    emailError.className = 'error active';
    }

function cv() {
    var fname = document.form.firstname;
    var mname = document.form.middlename;
    var lname = document.form.lastname;
    var fullname = fname.value + " " + mname.value + " " + lname.value;

    var email = document.form.email;
    var contact = document.form.contact;
    var address = document.form.address;


    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email.value);
    localStorage.setItem("contact", contact.value);
    localStorage.setItem("address", address.value);

  



    





}




/*
function passvalues() {
    var fname = document.getElementById('firstname').value + document.getElementById('middlename').value + document.getElementById('lastname').value ;
    localStorage.setItem('textvalue', fname);
    return false;
}

function nme() {
    var mname = document.getElementById('middlename').value;
    localStorage.setItem('text', mname);
    return false;

}

function dave() {
    var lname = document.getElementById('lastname').value;
    localStorage.getItem('txt', lname);
    return false;
}



function houseaddress() {
    var houseadd = document.getElementById("addresses").value;
    localStorage.getItem("kay", houseadd);
    return false;
}

function cont() {
    var 
}


*/


    



