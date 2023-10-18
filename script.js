let choices = document.querySelectorAll(".choices input"),
generateBtn=document.querySelector(".generateBtn"),
inputSlider = document.querySelector(".inputSlider"),
passwordLength = document.querySelector(".passwordLength"),
inputPassword = document.querySelector(".inputPassword"),
copyIcon = document.querySelector(".copyIcon");

let character = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","~!@#$%^&*()?/","0123456789"]

const updateSlider=()=> {
    passwordLength.textContent = inputSlider.value;
}

const generatePassword=()=> {
    let pass="";
    let generatedPass= "";

    choices.forEach((choice,index)=>{
        if (choice.checked){
            pass+=character[index]
        }
    })
   // console.log(pass)
   for(i=0;i<inputSlider.value;i++){
    generatedPass+=pass.charAt(Math.random()*pass.length)
   }
   inputPassword.value = generatedPass;
        }

    const copyPassword=()=>{
        if(inputPassword.value!=""){
            navigator.clipboard.writeText(inputPassword.value)
            copyIcon.className = "fa fa-check"
            setTimeout(()=>{
                copyIcon.title = "Password Copied"
                copyIcon.className = "fa fa-clone"
            },2000)
        }
    }

updateSlider()

inputSlider.addEventListener("input",updateSlider)

generateBtn.addEventListener("click", generatePassword)

copyIcon.addEventListener("click",copyPassword)