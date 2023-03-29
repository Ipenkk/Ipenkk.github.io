const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const buttonLogin = document.getElementById("buttonLogin")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")

buttonLogin.addEventListener("click", (event)=>{
    event.preventDefault()
    var errorText = ""

    const PASS=inputPassword.value
    // console.log("77")
    if(PASS.length < 8){
        // console.log(PASS)
        errorText = "Minimal 8 character!"
    }

    const email=inputEmail.value
    if(!email.includes("@gmail.com")|| email.length <= 10){
        errorText = "Please include an '@' in email address"
    }

    if(errorText == ""){
        alert("Login Successfull!")
        location.replace("Register.html")
    }
   
    divError.innerText = errorText
})