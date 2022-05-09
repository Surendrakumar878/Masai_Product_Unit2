var obj = JSON.parse(localStorage.getItem("signupData"))

document.querySelector("#SignUp").innerText="Hi,"+obj.fname+obj.lname || 'Sign in'

if(document.querySelector("#SignUp").innerText=="Hi,"+obj.fname+obj.lname){
    document.querySelector("#SignUp").href="#"
  
}



var a=JSON.parse(localStorage.getItem("cartCount"))
console.log(a)
document.querySelector("#cartValue").innerText= a||0

document.querySelector("#form2").addEventListener("submit",procced);

function procced(){
    event.preventDefault();
    var otp = document.querySelector("#otp").value;

    if(otp == "1234"){
        alert("payment successful");
        window.location.href = "index.html";
    } else{
        alert("Enter Valid OTP");
        window.location.reload();
    }
}
