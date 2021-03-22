const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//Functions

    //Shows error message and sets border color to red
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error"
        const small = formControl.querySelector("small");
        small.innerText = message;
    }

    //Sets border color to green
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    //Check for valid email
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


//Eventlisteners

//On form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if(email.value === "") {
        showError(email, "Email is required");
    } else if(!isValidEmail(email.value)){
        showError(email, "Email is not valid")
    } else {
        showSuccess(email);
    }

    if(password.value === "") {
        showError(password, "Email is required");
    } else {
        showSuccess(password);
    }

    if(password2.value === "") {
        showError(password2, "Email is required");
    } else {
        showSuccess(password2);
    }
});