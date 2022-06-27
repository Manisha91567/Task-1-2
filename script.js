function login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if(email != "sankey901@solutions.com" && pass != "mypassword"){
        document.getElementById("error").innerHTML="Invalid email & password";
        return false;
    }

    if(email != "sankey901@solutions.com"){
        document.getElementById("error").innerHTML="Invalid email";
        return false;
    }

    if(pass != "mindset"){
        document.getElementById("error").innerHTML="Invalid password";
        return false;
    }

    if(email == "sankey901@solutions.com" && pass == "mypassword") {
        document.getElementById("error").innerHTML="welcome";
        window.location = "index.html";
        return false;
      
    } 

}