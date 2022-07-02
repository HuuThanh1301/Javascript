document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
})

const admin_array = [{name: 'admin', password: 'Aa@123456'}, {name: 'admin2', password: 'admin123admin'}];

localStorage.setItem("admin", JSON.stringify(admin_array));

document.getElementById("sign-in").onclick = (e) => {
    e.preventDefault();
    const admin_user = document.getElementById("email").value;
    const admin_password = document.getElementById("password").value;
    for(let i = 0; i < admin_array.length; i++){
        if(admin_user === admin_array[i].name && admin_password === admin_array[i].password){
            location.href = "http://127.0.0.1:5500/data.html";
        }
        else{
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("email").style.background = "#fabbbb";
            document.getElementById("password").style.border = "1px solid red";
            document.getElementById("password").style.background = "#fabbbb";
        }
    }
}