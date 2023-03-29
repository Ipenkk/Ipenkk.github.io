const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const inputAge = document.getElementById("inputAge")
const inputRadioCek = document.getElementById("inputRadio")
const buttonRegister = document.getElementById("buttonRegister")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")

buttonRegister.addEventListener("click", (event)=>{
    event.preventDefault()
    var errorText = ""

    const isi = inputRadioCek.checked
    if(!isi){
        errorText = "Can't be empty!"
    }

    const age=inputAge.value
    if(age < 17){
        errorText = "Minimal 17th!"
    }

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

    const name=inputName.value
    if(!name.includes(" ")){
        errorText = "Minimal 2 words!"
    }

    if(errorText == ""){
        alert("Register Successfull!")
        location.replace("Login.html")
    }
   
    divError.innerText = errorText
})