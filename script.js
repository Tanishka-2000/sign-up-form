let password = document.querySelector("#password");
let passwordReTyped = document.querySelector("#confirmPassword");
let errorMessage = document.querySelector(".error_message");

passwordReTyped.addEventListener("input",function(){
    if(password.value === this.value){
        errorMessage.style.display = "none";
    }else{
        errorMessage.style.display = "block";
    }
});
