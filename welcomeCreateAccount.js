var obj = JSON.parse(localStorage.getItem("signupData"))

document.querySelector("#nameHeading").innerText="Welcome,"+" "+obj.fname+obj.lname+"!"

document.querySelector("#SignUp").innerText="Hi,"+obj.fname+obj.lname || 'Sign in'

if(document.querySelector("#SignUp").innerText=="Hi,"+obj.fname+obj.lname){
    document.querySelector("#SignUp").href="#"
  
}

document.querySelector("#goToIndex").addEventListener("click",hahahaha)

function hahahaha(){
    window.location.href="index.html"
}

var a=JSON.parse(localStorage.getItem("cartCount"))
console.log(a)
document.querySelector("#cartValue").innerText= a||0


