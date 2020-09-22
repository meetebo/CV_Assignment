const form = document.getElementById('forms')


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




