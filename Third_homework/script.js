// generate random password

function generate() {
  //  set password length/complexity



  // POSSIBLE PASSWORD VALUES
  let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

  let password = "";

  //  create forloop to choose password characters

  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  }
  // add password to textbox/display area
  document.getElementById("display").value = password;

}