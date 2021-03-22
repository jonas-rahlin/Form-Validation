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
    function checkEmail(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value)){
            showSuccess(input);
        }
        else{
            showError(input, "Email is not Valid");
        }
    }

    //Check required fields
    function checkRequired(inputArr){
        inputArr.forEach((input) => {
            if(input.value.trim() === ""){
                showError(input, `${getFieldName(input)} is required.`);
            }
            else {
                showSuccess(input);
            }
        });
    }

    //Check input length
    function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }

        else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} cant contain more than ${max} characters`);
        }

        else{
            showSuccess(input);
        }
    }

    //Check password match
    function checkPasswordsMatch(input1, input2) {
        if(input1.value !== input2.value) {
            showError(input2, "Passwords do not match");
        }
    }


    //Get fieldname
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }


//Eventlisteners

//On form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);

    checkEmail(email);

    checkPasswordsMatch(password, password2);
});