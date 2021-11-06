//Show a message with type of input
function showMessage(input, message, type) {
    //get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}
function showError(input, message){
    return showMessage(input,message,false);
}
function showSuccess(input){
    return showMessage(input, "", true);
}
function hasValue(input,message){
    if (input.value.trim()=== ""){
        return showError(input, message);
    }
    return showSuccess(input);
}
function validateEmail(input, requiredMsg, invalidMsg){
    //check if empty
    if (!hasValue(input, requiredMsg)){
        return false;
    }
    //validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = input.value.trim();
    if (!emailRegex.test(email)){
            return showError(input, invalidMsg);
    }
      return true;
}

const form = document.querySelector('#signup');

const NAME_REQUIRED = "Please enter your name or Org. name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a valid email format";

form.addEventListener("submit", function (event) {
    //stop form submission
    event.preventDefault();
    //validate the form
    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    //if valid, then submit!
    if (nameValid && emailValid) {
        form.submit();
    }
});

/*const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];

//get the elements values
let fullName = name.values;
let emailAddress = email.values;

form.addEventListener('submit', (event)=>{
    //stop form submission
    event.preventDefault();

    //submit form
})*/
