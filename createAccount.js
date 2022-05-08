var Email = JSON.parse(localStorage.getItem("Email"))

// console.log(Email)

document.querySelector("#email").innerText=Email.mail

var submition = document.querySelector("#SignUpForm")
submition.addEventListener("submit",haha)

function haha(){

    event.preventDefault();

    var mail = document.querySelector("#email").innerText
   var obj={
       mail:mail,
       fname:SignUpForm.fname.value,
       lname:SignUpForm.lname.value,
       passowrd:SignUpForm.password.value
   }

   localStorage.setItem("signupData",JSON.stringify(obj))


   window.location.href="welcomeCreateAccount.html"

   
}