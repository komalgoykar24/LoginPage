function echeck() {
    var email = document.getElementById("username").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var resultLabel = document.getElementById("echeck");
    
    if (emailRegex.test(email)) {
        resultLabel.innerHTML = "Valid email";
        resultLabel.style.color = "green";
        return true;
    } else {
        resultLabel.innerHTML = "Invalid email";
        resultLabel.style.color = "red";
        return false;

    }
}

function pcheck() {
    var p = document.getElementById("password").value;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var resultLabel = document.getElementById("pcheck"); 
    
    if (regularExpression.test(p)) {
        resultLabel.innerHTML = "Valid password";
        resultLabel.style.color = "green";
        return true;
    } else {
        resultLabel.innerHTML = "Invalid password";
        resultLabel.style.color = "red";
        return false;

    }
}


function mcheck() {
    var m = document.getElementById("number").value;
    var resultLabel = document.getElementById("mcheck"); 
    
    if (/^\d{10}$/.test(m)) {
        resultLabel.innerHTML = "Valid Mobile Number";
        resultLabel.style.color = "green";
        return true;
    } else {
        resultLabel.innerHTML = "Invalid Mobile Number, must be ten digits";
        resultLabel.style.color = "red";
        return false;

    }
}


function correct()
{
      if(echeck() && pcheck() && mcheck())
    {
        window.open("login.html");
    }
    else
    {
        alert("Check your detalis");
    }
     
}

