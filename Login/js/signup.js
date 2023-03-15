let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')
let signup = document.querySelector('.signup')


// show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success'
}

//check email is valid
function checkEmail(input) {

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    a = true
  } else {
    showError(input, 'Enail is not valid');
    a = false
  }
}

//check required fields
function checkRequired(inputArr) {
  b = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
      b = true
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  c = false;
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
    c = true
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  d = false
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
    d = false

  } else{
    d = true
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
signup.addEventListener('click', function (e) {
  e.preventDefault()
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, password2);
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  }
  let json = JSON.stringify(user);
  if (a == true&&b == true&&c == true&&d==true) {
    localStorage.setItem(username.value, json);
    alert("Successful")
  } else {
    alert("False")
  }
})
