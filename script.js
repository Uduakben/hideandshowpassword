let pass = document.getElementById("password");
let check = document.getElementById("check");


check.onclick = function (){
    if(pass.type == "password"){
        pass.type = "text";
        check.innerHTML = "hide";
    }
    else{
        pass.type = "password";
        check.innerHTML = "show"
    }
}