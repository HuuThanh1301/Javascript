document.getElementById('register').onclick = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;

    location.href = `http://127.0.0.1:5500/courses.html?email=${email}&name=${name}&age=${age}&phone=${phone}`
}