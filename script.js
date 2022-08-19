// Assignment Code
var generateBtn = document.querySelector("#generate");


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
    var confirmedCharacters = ""; // string to store all confirmed criteria

    var minPasswordLength = 8;
    var maxPasswordLength = 128;

    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    // passwords must be at least 8 characters, and no more than 128 characters

    if (passwordLength >= minPasswordLength && passwordLength <= maxPasswordLength){
      // console.log(passwordLength);

      // checks if at least one of the four character types has been chosen
      function generateCharacters(){
        var includeLowercase = confirm("Would you like to include lowercase letters?");
        var includeUppercase = confirm("Would you like to include uppercase letters?");
        var includeNumbers = confirm("Would you like to include numbers?");
        var includeSpecial = confirm("Would you like to include special characters?");
        
        // add criteria to confirmedCharacters if the user said yes
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
        } else { // in the case that the user chose no on all four criteria
          alert("ERROR!! Must confirm one of the four character types! Please try again.");
          generateCharacters(); // repeat function until at least one prompt returns true
        }
      }

      generateCharacters();

      // generate password based on criteria and passwordLength
      password = "";
      for (var i = 0; i < passwordLength; i++){
        var randomIndex = Math.floor(Math.random() * confirmedCharacters.length);
        password += confirmedCharacters[randomIndex];
      }
      return password;

    } 
    // error message if passwordLength is not from 8 to 128
    else if (passwordLength < minPasswordLength || passwordLength > maxPasswordLength){
      alert("Password must be at least 8 characters, and no more than 128 characters.")
      generatePassword();
    } 
    else{ // if the user chooses to cancel without inputting a numebr
      return;
    }
  }
  // choose the element with the ID password from the document
  var passwordText = document.querySelector("#password");

  // if the password has been generated successfully (aka NOT undefined)
  if (password !== undefined){
    passwordText.value = password; 
    // change the text in the HTML document to be the generated password
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
