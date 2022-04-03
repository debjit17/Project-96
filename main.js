function addUser(){

    user_name = document.getElementById("user_name").value;
    toString(user_name);
    isUserNameEmpty = user_name.replaceAll(" ", "");

    if(isUserNameEmpty != "")
    {
        localStorage.setItem("user_name", document.getElementById("user_name").value);
        window.location = "kwitter_room.html";
    }
    else
    {
        alert("Please Enter User Name To Continue");
    }
    
}