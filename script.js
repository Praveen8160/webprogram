  // ___________________________________________
  var currenturl = window.location.href;
  console.log("Current url", currenturl);
// ___________________________________________

var myParameter = prompt('enter settimeout parameter');
function myFunction(parameter) {
    alert( parameter);
  }
  setTimeout(function() {
    myFunction(myParameter);
  },2000);

// ___________________________________________

  const email = prompt('enter email address');
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  if(validateEmail(email))
  {
    alert('email is valid');
  }
  else
  {
    alert('email is not valid');
  }
// ___________________________________________
const script1 = document.createElement('script');
script1.src = 'script1.js';
document.head.appendChild(script1);

script1.onload = function () {
    console.log("script1.js is loaded.");
};

// ___________________________________________

function startsWith(str1, str2) {
    return str1.startsWith(str2);
}

const str1 = prompt('enter string 1');
const str2 = prompt('enter string 2');
if (startsWith(str1, str2)) {
    alert("String1 starts with string2.");
} else {
    alert("String1 are not start with the string2.");
}

