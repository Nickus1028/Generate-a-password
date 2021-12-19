// Assignment code here
//Welcome Them To The Password Generator
//Ask for password length > Variable
//Ask for lowercase > Variable
//Ask for uppercase > variable
//Ask for number > variable
//Ask for special characters > variable

//Run loop to generate password

getInformation();

//Gather the requirements of our Passoword

function getInformation() {
  window.alert("Welcome to the Marvelous Passoword Generatior!");
  
  passwordLength = prompt("How long is your new password? (Between 8 or 128 characters)");
  if (passwordLength < 8) {
    passwordLength = '';
    passwordLength = prompt("Password is too short. How long is your new password? (Between 8 or 128 characters)");
  } else if (passwordLength > 128) {
    passwordLength = '';
    passwordLength = prompt("Password is too long. How long is your new password? (Between 8 or 128 characters)");
  }

  passwordLowercase = confirm("Press OK if you want lowercase characters in your password.");
  passwordUppercase = confirm("Press OK if you want uppercase characters in your password.");
  passwordNumbers = confirm("Press OK if you want numbers in your password.");
  passwordSpecial = confirm("Press OK if you want special characters in your password.");
  window.alert("Your password is being created!");
  
}

//Confirm we get intended information throught the console

console.log(passwordLength);
console.log(passwordLowercase);
console.log(passwordUppercase);
console.log(passwordNumbers);
console.log(passwordSpecial);

//Generate our password

function generatePassword () {
    var password = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
    for(var i = 0; i < passwordLength; i++) {
      var character = math.floor(math.random() * characters.length + 1);
      password += characters.charAt(character);
    }
}

console.log(password);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", getInformation)