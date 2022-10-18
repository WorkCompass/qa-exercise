function validate() {
    const errors = [];

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let phone_number = document.getElementById("phone_number").value;

    let username_re = /^[A-Za-z0-9_-]*$/;
    let email_re = /^\S+@\S+$/;
    let name_re = /^[A-Za-z\s]*$/;
    let phone_re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (username == "") {  
        errors.push('Username could not be blank');
    }
 
    if (!username.match(username_re)) {
        errors.push('Username must contains only letters, numbers, _ and -');
    }

    if (email == "") {
        errors.push('Email cannot be blank');
    }

    if (!email.match(email_re)) {
        errors.push('Invalid email');
    }

    if (password == "") {  
        errors.push('Password cannot be blank');
    } 
    
    if (password.length < 8 || password.length > 15 ) {  
        errors.push('Password must have between 8 and 15 characters');
    }

    if (name == "") {  
        errors.push('Name cannot be blank');
    }

    if (!name.match(name_re)) {
        errors.push('Name must contain only letters');
    }
    
    if (isNaN(age) || age > 150) {
        errors.push('Age shoud be a number from 1 to 150');
    }

    if (!(phone_number.match(phone_re))) {
        errors.push('Phone Number should be in the format 000 000-0000');
    }

    $("#error").remove();
    if (errors.length > 0) {
        let text = "Please to ensure the following field(s) are filled in correctly: <ul>";
        for (let i = 0; i < errors.length; i++) {
            text += `<li> ${errors[i]} </li>`;
        }
        text += "</ul>"; 
        $("#alert-placeholder").append(`<div id="error" class="alert alert-danger" role="alert"> ${text} </div>`);
    } else {
        $("#alert-placeholder").append(`<div id="error" class="alert alert-success" role="alert"> User successfully created! </div>`);
    } 
}
