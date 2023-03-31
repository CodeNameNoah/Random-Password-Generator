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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

