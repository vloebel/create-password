var passwordSourceString = '';
var passwordString = '';

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
    passwordSourceString = passwordSourceString.concat('A0123456789');
  }

  if (useSpecial) {
    passwordSourceString = passwordSourceString.concat('\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/');
  }

  console.log('source string is ', passwordSourceString);
  console.log('srcStrLen is ', srcStrLen);

  // return the desired password length 
  return (pwdLength);
}

// FUNCTION generatePwdStr (pwLength, pwSource)
// Given the length of the desired password and
// the (global) string containing valid characters
// Pick characters at random until the password
// is full

function generatePwdStr(pwLength, pwSource) {
    var ps = 'Default-pa$$word'; 
  for (i = 0; i < pwLength; i++) {
    //nextIndex = get a random number between 0- pwSource.length;
    ps[i] = pwSource[nextIndex];

  }
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


