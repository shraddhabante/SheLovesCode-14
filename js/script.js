// create a form and validate it: email, contact, name, age, designation, select multiple files, DOB and submit form 
function formValidate() {
    var contact = document.getElementById("contact").value;
    var firstName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var designation = document.getElementById("designation").value;
    var files = document.getElementById("multiple-files").value;
    var dob = document.getElementById("dob").value;
    console.log(dob);

    var formValid = false;

    var contactBool = validateContact(contact, formValid);
    var nameBool = validateName(firstName, formValid);
    var emailBool = validateEmail(email, formValid);
    var ageBool = validateAge(age, formValid);
    var desigBool = validateDesignation(designation, formValid);
    var filesBool = validateFiles(files, formValid);
    var dobBool = validateDob(dob, formValid);

    if (contactBool && nameBool && emailBool && ageBool && desigBool && filesBool && dobBool) {
        alert("Form is Submitted");
        document.getElementById("contact").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("designation").value = "";
        document.getElementById("multiple-files").value = "";
        document.getElementById("dob").value = "";
    }
    else {
        alert("please check all the fields");
    }
}

function validateContact(contact, formValid) {
    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (contact.trim() === "") {
        formValid = false;
        document.getElementById('contact-error').innerHTML = "This field is required";
    } else if (contact.trim().length != 10) {
        formValid = false;
        document.getElementById('contact-error').innerHTML = "This field is invalid";
    } else if (!pattern.test(contact)) {
        formValid = false;
        document.getElementById('contact-error').innerHTML = 'this field is invalid';
    } else {
        formValid = true;
        document.getElementById('contact-error').innerHTML = " ";
    }
    return formValid;
}

function validateName(fistName, formValid) {
    var pattern = /^[A-Za-z][A-Za-z0-9_]{4,15}$/
    if (fistName.trim() == "") {
        formValid = false;
        document.getElementById('name-error').innerHTML = "This field is required";
    }
    else if (!pattern.test(fistName)) {
        formValid = false;
        document.getElementById('name-error').innerHTML = "This field is invalid";
    }
    else {
        formValid = true;
        document.getElementById('name-error').innerHTML = " ";
    }
    return formValid;
}

function validateEmail(email, formValid) {
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() == " ") {
        formValid = false;
        document.getElementById('email-error').innerHTML = "This field is required";
    } else if (!pattern.test(email)) {
        formValid = false;
        document.getElementById('email-error').innerHTML = "This field is invalid";
    }
    else {
        formValid = true;
        document.getAnimations('email-error').innerHTML = "";
    }
    return formValid;
}

function validateAge(age, formValid) {
    if (age.trim() == "") {
        formValid = false;
        document.getElementById("age-error").innerHTML = "This field is required";
    } else if (age.trim().length > 3) {
        formValid = false;
        document.getElementById("age-error").innerHTML = "This field is invalid";
    } else {
        formValid = true;
        document.getElementById("age-error").innerHTML = "";
    }

    return formValid;
}

function validateDesignation(designation, formValid) {
    if (designation.trim() == " ") {
        formValid = false;
        document.getElementById("designation-error").innerHTML = "This field is required";
    } else if (designation.trim().length < 5) {
        formValid = false;
        document.getElementById("designation-error").innerHTML = "This field is invalid";
    } else {
        formValid = true;
        document.getElementById("designation-error").innerHTML = "";
    }
    return formValid;
}

function validateFiles(files, formValid) {
    var pattern = /([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/
    if (!pattern.test(files)) {
        formValid = false;
        document.getElementById("files-error").innerHTML = "the file extension is invalid";
    }
    else {
        formValid = true;
        document.getElementById("files-error").innerHTML = "";
    }
    return formValid;
}

function validateDob(dob, formValid) {
    console.log(dob);
    var d = new Date();
    console.log(d.getFullYear())
    console.log(d.getMonth());
    console.log(d.getDate());
    if (dob.trim() == " ") {
        formValid = false;
        document.getElementById("dob-error").innerHTML = "This field is required";
    }
    else {
        formValid = true;
        document.getElementById("dob-error").innerHTML = "";
    }
    return formValid;
}