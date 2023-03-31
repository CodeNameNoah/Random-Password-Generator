// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create an object to store passcode properties for requirements
var passcodeRequirementsobj = {
  // Write a var declaring passcode characters as a numerical value
  passcodeLength: 0,
  // Write a var declaring passcode numbers index to access later
  passcodeNumArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Write a var storing an index of uppercased letters to access later
  passcodeUpperCaseArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  // Write a var storing an index of lowercased letters to access later
  passcodeLowerCaseArr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  // Write a var storing an index of special characters I can access later
  passcodeCharArr: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}
// Write password to the #password input
function writePassword() {
  // var named password stores function/value of generatePassword();
  var password = generatePassword();
  // var named passwordText stores value of object and its method
  var passwordText = document.querySelector("#password");
// Updates the textbox with newly generated password
  passwordText.value = password;
}

// Add event listener to generate button. When the user clicks on the button, and the event of "click" is transpired, write password will activate.
generateBtn.addEventListener("click", writePassword);

// Oh boy, this is the big function block.
// This function will be the essential core of this project
function generatePassword() {
// Var result took an exquisitely long time to learn
var result = ""; // By storing a string value into the var, result, we can access the stored password from this function later.
var lowerCase;
var upperCase;
var specialChar;
var passcodeLength1;
var numbers;
// Declares characters
passcodeLength = 0;
passcodeRequirementsObj.passcodeLength = 0;
result = "";
// This checks to see if the password length is lesser than 8 char. or greater than 128 char.
while (passcodeLength1 < 8 || passcodeLength1 > 128) {
  passcodeLength1 = prompt("To receive a secure generated password \nInput your desired length of your password you would like \n Note: Length must be a numerical value between 8 and 128.");
// If the user were to click cancel and return a null value, the textbox will be changed to "Fine, good luck having a non-secure password"
if (passwordLength1 === null) {
  return "Fine, good luck having a non-secure password";
}
else {
  // 'isFinite checks to see if the password length is a finite number
  if (!isFinite(passcodeLength1)) {
    alert("You did not enter a number... YOu know a number is a numerical value... i.e. 12345678");
    return "Fine, good luck having a non-secure password";
  }
  else {
  // Translates to "So if the input is a finite number, this code will run and check if the length is between 8 and 128"
  if (passcodeLength1 < 8 || passcodeLength1 > 128) {
    alert("You did not enter a number... YOu know a number is a numerical value... i.e. 12345678");
    return "Fine, good luck having a non-secure password";
  }
  else {
    // Calls function to show prompts of password criterias
    showPrompts();
    // Will keep looping to add characters until passwordLength is equivalent or greater to the length the user initially inputted
    while (passcodeRequirementsObj.passcodeLength < passcodeLength1) {
      // If statement used here to make sure the user selects at least one criteria, if they don't, they are alerted
      if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
        alert("You must choose a minimum of one password type requirement whether it be uppercase, lowercase, numerical, or special.")
        showPrompts();
      }
    }
  }
  }
}

}
