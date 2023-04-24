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

    
        if (userName && userEmail && Password && ConfirmPassword) { 
        if (Password.length >= 8 && ConfirmPassword.length >=8) {
            // alert("funtion");5
            if (Password == ConfirmPassword){

                var store = JSON.parse (localStorage.getItem("Userdata")) || []
                var flag = false;
                for (i = 0; i<store.length; i++) {
                    if(store[i].useremail == userEmail) {
                        flag = true;
                    } 
                }
                if (!flag){
                var Userinfo = {username:userName,useremail:userEmail,password:Password,confirmPassword:ConfirmPassword}

                store.push(Userinfo);
                localStorage.setItem("Userdata",JSON.stringify(store))
                alert("Register successful")

                document.getElementById("username").value=""
                document.getElementById("useremail").value=""
                document.getElementById("password").value=""
                document.getElementById("confirmpassword").value=""
                }
                else{
                    alert("Email already exist")
                }
                
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