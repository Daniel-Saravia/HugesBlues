// Declaring a variable named id and assign it a function
// This function is a lambda expression that takes the parameter "id"
// The purpose of this function is to return the element with the id "id"
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

// Declaring a variable named username and assign it a function
// This function is a lambda expression that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"

// The first line retrieves the html element with the ID "username"
// from the document and assigns it to the variable username.
// The second line returns the value of the username variable.
// The third line is a lambda expression that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
// The fourth line is a function that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
// The fifth line is a function that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
// The sixth line is a function that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
// The seventh line is a function that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
// The eighth line is a function that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
// The ninth line is a function that takes the parameter "username"
// The purpose of this function is to return the element with the id "username"
let username = (username) => document.getElementById(username);

let email = (email) => document.getElementById(email);

let password = (password) => document.getElementById(password);

let form = id("form");

let errorMsg = classes("error");

let successIcon = classes("success-icon");

let failureIcon = classes("failure-icon");

// This code sets up an event listener on form element for the submit event.
// When the form is submitted, it calls the validateForm function.
form.addEventListener("submit", (e) =>
{
  e.preventDefault();

  // These next lines call the validateForm function with the username, email, and password parameters.
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");  
});

let engine = (id, serial, message) =>
{
    if(id.value.trim() === "")
    {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else
    {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1"; 
    }
}
