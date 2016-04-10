// Catherine McMahon
var firebase = require("firebase");
var ref = new Firebase("https://acetheapcsexam.firebaseio.com");

function getSignUpFormInfo() {
    var email = document.getElementById("txtEmail");
    
    document.getElementById("demo").innerHTML = text;
}

function getSignInFormInfo() {
    var email = document.getElementById("txtEmail");
    document.getElementById("demo").innerHTML = text;
}

ref.createUser({
  email: "bobtony@firebase.com",
  password: "correcthorsebatterystaple"
}, function(error, userData) {
  if (error) {
    switch (error.code) {
      case "EMAIL_TAKEN":
        console.log("The new user account cannot be created because the email is already in use.");
        break;
      case "INVALID_EMAIL":
        console.log("The specified email is not a valid email.");
        break;
      default:
        console.log("Error creating user:", error);
    }
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});




