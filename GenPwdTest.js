var passwordSourceString = '';
var passwordString = '';

// FUNCTION buildSourceStr
// create a source array for the password generator
// based on user specified length and including
// the the user's choice of character types

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
  // create a source array of password characters that incluldes only
  // the types chosen by the user above
  
 // Initialize the length of the password source array
  var srcStrLen = 0;

  // add lowercase letters, if any
  if (useLower) {
    passwordSourceString = passwordSourceString.concat('abcdefghijklmnopqrstuvwxyz');
    srcStrLen += 26;
  }
  // add upper case, if any
  if (useUpper) {
    passwordSourceString = passwordSourceString.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    srcStrLen += 26;
  }
  // add numbers, if any
  if (useNum) {
    passwordSourceString = passwordSourceString.concat('A0123456789');
    srcStrLen += 10;
  }
  // add special characters, if any
  if (useSpecial) {
    passwordSourceString = passwordSourceString.concat('\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/');
    srcStrLen += 32;
  }

  console.log('source string is ', passwordSourceString);
  console.log('srcStrLen is ', srcStrLen);

  // the source string array is global 
  return (pwdLength);
}

// Given a string and its length (probably not even necessary)
// create a new password of the desired lenght by selecting
// characters from the source string at random

function generatePwdStr(strLen, string) {
  var ps = 'Default-pa$$word'; 
  return (ps);
}

// call function to fill the (global array) source string 
// and return the desired password length 
var passwordLength = buildSourceStr(passwordSourceString);

console.log('MAIN source string is ' + passwordSourceString)
console.log('MAIN sourceStringLength is ', passwordSourceString.length);

// call function to generate ran
var newPwdStr = 'not2secure'
newPwdStr = generatePwdStr(passwordSourceString, passwordLength);

console.log('the password is '+ newPwdStr);


