var obj = JSON.parse(localStorage.getItem("signupData"))



document.querySelector("#SignUp").innerText="Hi,"+obj.fname+obj.lname || 'Sign in'

if(document.querySelector("#SignUp").innerText=="Hi,"+obj.fname+obj.lname){
    document.querySelector("#SignUp").href="#"
  
}


var a=JSON.parse(localStorage.getItem("cartCount"))
console.log(a)
document.querySelector("#cartValue").innerText= a||0


document.querySelector("#form2").addEventListener("submit", crossCheck);

function crossCheck(){
    event.preventDefault();
    var cardNum = document.querySelector("#cardNum").value;
    var ccv = document.querySelector("#ccv").value;
    var expiry = document.querySelector("#exp").value;
    
    // console.log(cardNum,ccv,expiry);

    if(cardNum == "12345678" && ccv == "1234" && expiry == "2022-05"){
        alert("OTP Send Successfully");
        window.location.href = "OTP.html";
    }else{
        alert("Enter Valid Card Details")
        window.location.reload();
    }
}
