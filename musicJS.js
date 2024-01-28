function validate()
{
    var Username= document.getElementById("Username").value;
    var password= document.getElementById("password").value;
    if(Username== "admin" && password=="admin")
    {
        alert("Succesfully logged in!");
        window.location.replace("./musicAfterLogin.html");
        return false;
    }
    else
    {
        alert("Oops! loggin failed");
    }

}