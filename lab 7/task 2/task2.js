function validateEmail() {

    const email = document.getElementById("email").value;

    if(email === ""){
        alert("Field can not be empty");
        return;
    }


    let hasSymbol = false;
    for( let i=0; i<email.length; i++) {
        if(email[i] === "@") {
            hasSymbol = true;
            break;
        }  
    }

    if(! hasSymbol) {
        alert("Put a valid email address.");
        return;
    }



    const startingLetter = email.length - 4;
    const check = [".","c","o","m"];
    let matched = true;

    for(let j=0 ; j<check.length ; j++) {
        if(email[startingLetter + j] !== check[j]){
            matched = false;
            break;
        }
    }
      
    if(! matched) {
        alert("Put a valid email address.");
        return;
    }


    alert("welcome");
}