const form = document.getElementById('form');
const username = document.getElementById('username');
const roleno =document.getElementById('roleno');
const email = document.getElementById('email');
const dept = document.getElementById('dept');
const address = document.getElementById('address');
const country = document.getElementById('country');
const city = document.getElementById('city')
const pincode = document.getElementById('pincode')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(checkRequired([username, email, roleno, dept, pincode, address, city, country])){
    checkLength(username, 3, 15);checkLength(dept, 3, 30);
    checkLength(address, 10, 15);checkLength(country, 3, 15);
    checkLength(city, 3, 15);checkLength(pincode, 3, 15);
    checkLength(roleno, 8, 12);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }

});
function reset(){
    var element= document.getElementById(form);
    element.reset()
}