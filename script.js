var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowerase;

// Start Password variable values:
// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for uppercase conversion
space = [];
//Convert to upper
var choices;
var toUpper = function (x) {
  return x.toUpperCase();
};
//variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//Start function for password generate
function generatePassword() {
  //input
  enter = parseInt(prompt("Password must contain between 8-128 characters, how long would like?"));
  // Validation 1
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // user validation
    enter = parseInt(prompt("You must choose a number between 8-128"));

  } else {
    confirmNumber = confirm("Would you like the password to contain numbers?");
    confirmCharacters = confirm('Would you like the password to contain special characters?');
    confirmUppercase = confirm("Would you like the password to contain upper case letters?");
    confirmLowercase = confirm("would you like the password to conain lower case letters?");
  };

  // if all 4 inputs are negative
  if (!confirmNumber && !confirmCharacters && !confirmUppercase && !confirmLowercase) {
    choices = alert("you must choose a criteria!");
  }
    // else if for 4 positive options

    if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowerase) {
      choices = character.concat(number, alpha, alpha2);
    }

    // else if for 3 positives
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
    } else if (confirmCharacter && confirmLowerase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = chartacter.concat(number, alpha);
    } else if (confirmNumber && confirmLowerase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
    }

    // else if 2 positive
    else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
    } else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
    }
    // else if 1 positive
    else if (confirmCharacters) {
      choices = character;
    } else if (confirmNumber) {
      choices = number;
    } else if (confirmLowercase) {
      choices = alpha;
    }
    //Uppercase conversion
    else if (confirmUppercase) {
      choices = space.concat(alpha2);
    };

    // variable an array placeholder for generated length
    var password = [];

    // random selection variables:
    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }

    //join password array and convert to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

//put value intotextbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});