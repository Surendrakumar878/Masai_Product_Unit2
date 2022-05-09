document.querySelector("#SignUpForm").addEventListener("submit",getMail)



function getMail(){
    event.preventDefault();
    console.log("hahaha")
    var obj={
        mail:SignUpForm.Email.value
    }

    localStorage.setItem("Email",JSON.stringify(obj))


    window.location.href = "createAccount.html";
}

// if(document.querySelector("#SignUpValue").innerText=="Hi,"+obj.fname+obj.lname){
//     document.querySelector("#SignUpValue").href="#"
  
// }

// document.querySelector('#signUpValue').innerText='Sign Up'
// var data=JSON.stringify(localStorage.setItem("SignupData"))

