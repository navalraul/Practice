function Register(event) {
    // alert("function");
    event.preventDefault();

    var userName = document.getElementById("username").value;
    // console.log(userName)
    var userEmail = document.getElementById("useremail").value;
    // console.log(userEmail)
    var Password = document.getElementById("password").value;
    // console.log(Password)
    var ConfirmPassword = document.getElementById("confirmpassword").value;
    // console.log(ConfirmPassword)

    var Ls = JSON.stringify(localStorage.setItem(Users))

    if (userName && userEmail && Password && ConfirmPassword) {
        if (Password.length <= 8 == ConfirmPassword <=8) {
            if (Password == ConfirmPassword){

            }else {
                console.log("Password matched")
            }
            
        }else {
            console.log("Password should be atleast 8 word")
        }
    }else {
        console.log("fill all the fields")
    }
    
}