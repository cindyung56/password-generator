// Assignment Code
var generateBtn = document.querySelector("#generate");

// alert, confirm, prompt

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword(){
    
    /* the characters needed for the four categories: 
    - special characters
    - lowercase characters
    - uppercase characters
    - numbers
    */
    var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = uppercaseLetters.toLowerCase();
    var numbers = "1234567890";
    var confirmedCharacters = "";

    var minLength = 8;
    var maxLength = 128;

    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    
    if (passwordLength >= minLength && passwordLength <= maxLength){
      console.log(passwordLength);

      // checks if at least one of the four character types has been chosen
      function generateCharacters(){
        var includeLowercase = confirm("Would you like to include lowercase letters?");
        var includeUppercase = confirm("Would you like to include uppercase letters?");
        var includeNumbers = confirm("Would you like to include numbers?");
        var includeSpecial = confirm("Would you like to include special characters?");
      
        if (includeLowercase || includeUppercase || includeNumbers || includeSpecial){
          if (includeLowercase){
          confirmedCharacters += lowercaseLetters;
          }
          if (includeUppercase){
            confirmedCharacters += uppercaseLetters;
          }
          if (includeNumbers){
            confirmedCharacters += numbers;
          }
          if (includeSpecial){
            confirmedCharacters += specialCharacters;
          } return;
        } else {
          alert("ERROR!! Must confirm one of the four character types! Please try again.");
          generateCharacters();
        }
      }

      generateCharacters();

      password = "";
      for (var i = 0; i < passwordLength; i++){
        var randomIndex = Math.floor(Math.random() * confirmedCharacters.length);
        password += confirmedCharacters[randomIndex];
      }
      return password;

    } 
    else if (passwordLength < minLength || passwordLength > maxLength){
      alert("Password must be at least 8 characters, and no more than 128 characters.")
      generatePassword();
    } 
    else{
      return;
    }
    






  }
  var passwordText = document.querySelector("#password");
  if (password !== undefined){
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
