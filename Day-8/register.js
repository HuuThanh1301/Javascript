document.getElementById('register').onclick = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;

    location.href = `https://huuthanh1301.github.io/Javascript/courses.html?email=${email}&name=${name}&age=${age}&phone=${phone}`
}