// Assignment Code
// assigns the html generate passwordbutton 
// to a var so we can add event listener
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var str = 'abracadabra';

  // get number of characters between 8-128

  // Prompt for at least one special character from among
  // lowercase, uppercase, numeric, and / or special characters

  // generate the password





  
  return str;
}





// Write password to the #password input
// but what does the "readonly" mean under #password?

function writePassword() {
  var pwd = generatePassword();
  var pwdText = document.querySelector("#password");

  pwdText.value = pwd;  

  // document.getElementById(password).value = password;

  console.log('pwd is '+ pwd);
  console.log('pwd text is ' + pwdText);
  console.log('pswd text value is ' + pwdText.value);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.title = "Fishy";