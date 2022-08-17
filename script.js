// Assignment Code
var generateBtn = document.querySelector("#generate");

// alert, confirm, prompt

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword(){
    
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if (passwordLength >= 8 && passwordLength <= 128){
      console.log(passwordLength);

      var lowercaseChar = confirm("Would you like to include lowercase letters?");
      var uppercaseChar = confirm("Would you like to include uppercase letters?");
      var numericalChar = confirm("Would you like to include numbers?");
      var specialChar = confirm("Would you like to include special characters?");

      console.log(lowercaseChar);
      console.log(uppercaseChar);
      console.log(numericalChar);
      console.log(specialChar);

    } else if (passwordLength < 8 || passwordLength > 128){
      alert("Password must be at least 8 characters, and no more than 128 characters.")
      generatePassword();
    } else{
      return;
    }
    






  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
