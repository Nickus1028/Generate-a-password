//Run loop to generate password

function generatePassword() {
  window.alert("Welcome to the Marvelous Password Generator!");

  //Gather the requirements of our Password
  
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
  
  var password = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
  
  //Create the password

  for(var i = 0; i < passwordLength; i++) {
        var character = Math.floor(Math.random() * characters.length + 1);
        password += characters.charAt(character);
  }

 
  return password;
}


// Displays password to the HTML page under the password ID
    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)