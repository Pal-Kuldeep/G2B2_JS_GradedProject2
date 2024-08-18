 document.getElementById('User_Name').addEventListener( 'input',function(){
localStorage.setItem('UserName',this.value);  

});



document.getElementById('User_Password').addEventListener('input', function(){
localStorage.setItem('UserPassword', this.value);

});

const userName = localStorage.getItem('UserName');

const userPassword = localStorage.getItem('UserPassword');


document.querySelector('button').addEventListener('click',function login() {
  const user = document.getElementById('User_Name').value;
  const password = document.getElementById('User_Password').value;
  
  if (userName == user && userPassword == password)
  {
    location.assign('./ResumePage.html');
  }
  else {
    document.getElementById('Error').innerText = "Invalid username/password referesh the page to login with correct credentails. ";
  }

});




