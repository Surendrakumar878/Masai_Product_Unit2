var obj = JSON.parse(localStorage.getItem("signupData"))

document.querySelector("#nameHeading").innerText="Welcome,"+" "+obj.fname+obj.lname+"!"

document.querySelector("#SignUp").innerText="Hi,"+obj.fname+obj.lname || 'Sign in'

if(document.querySelector("#SignUp").innerText=="Hi,"+obj.fname+obj.lname){
    document.querySelector("#SignUp").href="#"
  
}


