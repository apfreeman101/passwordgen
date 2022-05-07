


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character Pool*************************************
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersString = '0123456789';
var specialchString = '!@#$%^&*';
// End of Character pool ****************************

// Password Generate Code****************************
function generatePassword () {
  var passwordLength = prompt("Choose Password length (8-128 Character");
  var specialChar = confirm("Do you want special characters?");
  var lowercase = confirm("Do you want Lowercase characters?");
  var uppercase = confirm("Do you want Uppercase Characters?");
  var numbers = confirm("Do you want Numbers in your password");


  if (!specialChar && !lowercase && !uppercase && !numbers) {
    alert('YOU HAVE FAILED TRY AGAIN');
    return '';
  }

  var validCharacters = "";
  var mustHaves = "";

  if (specialChar) {
    validCharacters += specialchString;
    mustHaves += specialchString.charAt(Math.floor(Math.random() * specialchString.length))
  }

  if (lowercase) {
    validCharacters += lowercaseLetters;
    mustHaves += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length))
  }

  if (uppercase) {
    validCharacters += uppercaseLetters;
    mustHaves += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length))
  }
  
  if (numbers) {
    validCharacters += numbersString;
    mustHaves += numbersString.charAt(Math.floor(Math.random() * numbersString.length))
  }

  var password = "";

  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters.charAt(randomNumber);    
  }

  password = password.split("");

  for (var i = 0; i < mustHaves.length; i++) {
    password [i] = mustHaves[i];
    
  }

  return password.join("");



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
