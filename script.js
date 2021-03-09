var Length = Number
while (length < 8 || length > 128) length = Number("How many characters would you like your password to contain? Must be between 8-128");

var Characters = confirm("Your Passsword must Contain 8 - 128 Characters");
var Numbers = confirm("Would you like your password to contain numbers?");
var Uppercase = confirm("Would you like your password to contain uppercase letters?");
var SpecialCharacter = confirm("Would you like your password to contain special characters?");


while (!Uppercase, !SpecialCharacter, !Numbers) {
  alert("You must select at least one character type!");
  Characters = confirm("Would you like to use uppercase letters?");
  Numbers = confirm("Would you like to use numbers?");
  Uppercase = confirm("Would you like your password to contain uppercase letters?");
  SpecialCharacter = confirm("would you like your password to contain special characters?");
}

var allowed = {};
if (Characters) password += random(allowed.Characters = "qwertyuiopasdfghjklzxcvbnm");
if (Numbers) password += random(allowed.Numbers = "1234567890");
if (Uppercase) password += random(allowed.Uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM");
if (SpecialCharacter) password += random(allowed.SpecialCharacter = "!@#$%^&*(){}[]-_=+\|/?.,><`~`'")

for (var i = password.length; i < length; i++) password =+ random(random(allowed).value);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");  

function generatePassword() {
  var length = length < 8 || length > 128
  for (var i = 0, i < length; ++i) {
    retval += charSet.charAt(math.floor(Math.random()));
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// use a for loop to generate numbers in the console
// uise math.rondom to generate a random number - this generates a decimal# (multiply by 9 to get the whole #'s from 0-9), use math.floor to round down to the nearest whole number 

// use ___.random to generate random letters

// generate password function:
// for ( et i = 1; i <= 10; i++) {
//   randomNumber = Math.random() * i;
//   roundedNumber = Math.floor(randomNumber);
//   console.log(roundedNumber) // 