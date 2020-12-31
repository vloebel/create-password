var passwordSourceString = '';
var NewPassword = '';
var passwordLength = 0;

// FUNCTION buildSourceStr
// Set up global passwordSourceString for the password generator
// by including the user's choice of character types
// Return the user's specified password length

function buildSourceStr() {
  var specifyLengthPrompt = 'Specify password length by entering a number between ';
  const minPasswordLength = 8;
  const maxPasswordLength = 128;
  const defaultPasswordLength = 12;

  var useLower = false;
  var useUpper = false;
  var useNum = false;
  var useSpecial = false;
  var selectionMade = false;

  // prompt user until at least one character
  // type has been selected

  while (!selectionMade) {
    useLower = confirm('Do you want to include lower case letters?');
    useUpper = confirm('Do you want to include UPPER case letters?');
    useNum = confirm('Do you want to include numbers?');
    useSpecial = confirm('Do you want to include special characters like \'#\' and \'$\'?');

    // Make sure we got at least one selection
    selectionMade = (useLower || useUpper || useNum || useSpecial);
    if (!selectionMade) alert('Please pick at least one  type to continue');
  }
  // Get the user-defined password length
  var pwdLength = 0;
  specifyLengthPrompt = specifyLengthPrompt.concat(minPasswordLength, ' - ', maxPasswordLength);
  // prompt for a length between the boundary constants
  while ((pwdLength < minPasswordLength) || (pwdLength > maxPasswordLength)) {
    pwdLength = Number(prompt(specifyLengthPrompt, defaultPasswordLength));
    console.log("pwd length is " + pwdLength);
  }
  // create a source array of password characters that only
  // includes the types chosen by the user 
  
  if (useLower) {
    passwordSourceString = passwordSourceString.concat('abcdefghijklmnopqrstuvwxyz');
  }
  if (useUpper) {
    passwordSourceString = passwordSourceString.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  if (useNum) {
    passwordSourceString = passwordSourceString.concat('0123456789');
  }
  if (useSpecial) {
    passwordSourceString = passwordSourceString.concat('\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/');
  }

  console.log('source string is ', passwordSourceString);
  console.log('srcStrLen is ', passwordSourceString.length);

  // return the desired password length 
  return (pwdLength);
}
// *****************************************
// FUNCTION genRandomInt (num1, num2)
// Returns random integer between num1 & num2
// Including num1 & num2
  
function getRandomInt(min, max) { 
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

// *****************************************
// FUNCTION generatePwdStr (pwLength, pwSource)
// Given the length of the desired password and
// the (global) password soruce string
// Pick characters at random out of the source
// string until the password is the right length
// Returns: password string

function generatePassword(pwLength, pwSource) {
  const pwinit = '2short'; // generated password 
  var pwIndex; //password string index

  pw = pwinit.split('');
  for (i = 0; i < pwLength; i++) {
    pwIndex = getRandomInt(0, pwLength);
    pw[i] = pwSource[pwIndex];
    console.log('pwIndex is ' + pwIndex);
    console.log('added ' + pwSource[pwIndex]);
    console.log('pw is ' + pw);
  }
  return (pw);
}
// ***************************************************
// MAIN PROGRAM
// ***************************************************
// call buildSourceStr to build global passwordSourceString 
// containing characters user has chosen for the password and 
// return the user selected password length 

var passwordLength = buildSourceStr(passwordSourceString);

// call generatePassword to generate the password
// from the global source string
for (i = 0; i < 10; i++) { 
  NewPassword = generatePassword(passwordLength, passwordSourceString);
  console.log('new password is ' + NewPassword);
}
