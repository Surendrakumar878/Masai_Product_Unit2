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