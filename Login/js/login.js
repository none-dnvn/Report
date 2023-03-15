let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let login = document.querySelector('.login')


// Event listeners
login.addEventListener('click', (e) => {
  e.preventDefault;
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  }
 
  let json = JSON.stringify(user)
  if(localStorage.getItem(username.value) == json){
    window.location = 'http://127.0.0.1:5500/index.html'
    alert("Successful")
    
      
  }else if (!username.value ||!email.value|| !password.value) {
    alert("False")
  } else {
    alert("False")
  }
})
