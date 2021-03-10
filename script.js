// Start working code
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});





// var Length = Number
// let Number = ( i = 0, i >= 8 || i = 0, i =< 128); 
// // ("How many characters would you like your password to contain? Must be between 8-128");
// else Characters = prompt("Your Passsword must Contain 8 - 128 Characters");
// var Numbers = confirm("Would you like your password to contain numbers?");
// var Uppercase = confirm("Would you like your password to contain uppercase letters?");
// var SpecialCharacter = confirm("Would you like your password to contain special characters?");



// while (!Uppercase, !SpecialCharacter, !Numbers) {
//   alert("You must select at least one character type!");
//   Characters = confirm("Would you like to use uppercase letters?");
//   Numbers = confirm("Would you like to use numbers?");
//   Uppercase = confirm("Would you like your password to contain uppercase letters?");
//   SpecialCharacter = confirm("would you like your password to contain special characters?");
// }

// var allowed = {};
// if (Characters) password += random(allowed.Characters = "qwertyuiopasdfghjklzxcvbnm");
// if (Numbers) password += random(allowed.Numbers = "1234567890");
// if (Uppercase) password += random(allowed.Uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM");
// if (SpecialCharacter) password += random(allowed.SpecialCharacter = "!@#$%^&*(){}[]-_=+\|/?.,><`~`'")

// for (var i = password.length; i < length; i++) password =+ random(random(allowed).value);
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");  



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(
//     //   var length = length < 8 || length > 128
// //   for (var i = 0, i < length; ++i) {
//   );
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// // use a for loop to generate numbers in the console
// // uise math.rondom to generate a random number - this generates a decimal# (multiply by 9 to get the whole #'s from 0-9), use math.floor to round down to the nearest whole number 

// // use ___.random to generate random letters

// // generate password function:
// // for ( et i = 1; i <= 10; i++) {
// //   randomNumber = Math.random() * i;
// //   roundedNumber = Math.floor(randomNumber);
// //   console.log(roundedNumber) // 