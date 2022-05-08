var obj = JSON.parse(localStorage.getItem("signupData"))
document.querySelector("#SignUpName").innerText="Hi,"+obj.fname+obj.lname || 'Sign Up'

if(document.querySelector("#SignUpName").innerText=="Hi,"+obj.fname+obj.lname){
    document.querySelector("#SignUpName").href="#"
  
}

var arr = JSON.parse(localStorage.getItem("card"))

console.log(arr)