
let myTable = `<tr> <th>CMND</th><th>Name</th><th>Birthday</th><th>Phone</th> </tr>`;
if(localStorage.length !== 0){
    let current_list = JSON.parse(localStorage.getItem("list"));
    for(let i = 0; i < current_list.length; i++){
        myTable += `<tr> <td>${current_list[i].cmnd}</td><td>${current_list[i].name}</td><td>${current_list[i].birthday}</td><td>${current_list[i].phone}</td></tr>`
    }

    document.getElementById("table").innerHTML = myTable;
};


document.getElementById("submit").onclick = (e) => {
    e.preventDefault();

    let student = {};
    student.cmnd = document.getElementById("cmnd").value;
    student.name = document.getElementById("name").value;
    student.birthday = document.getElementById("birthday").value;
    student.phone = document.getElementById("phone").value;

    let student_list;
    if(localStorage.getItem("list")){
        student_list = JSON.parse(localStorage.getItem("list"));
    }else{
        student_list = [];
    }
    
    if(localStorage.getItem(student.cmnd) !== null){
        for(let i = 0; i < student_list.length; i++){
            if(student_list[i].cmnd === student.cmnd){
                student_list[i].name = student.name;
                student_list[i].birthday = student.birthday;
                student_list[i].phone = student.phone;
                break;
            }
        }
    }
    else{
        localStorage.setItem(student.cmnd, JSON.stringify(student));
        student_list.push(student);
    }
    
    localStorage.setItem("list", JSON.stringify(student_list));

    myTable = `<tr> <th>CMND</th><th>Name</th><th>Birthday</th><th>Phone</th> </tr>`;
    for(let i = 0; i < student_list.length; i++){
        myTable += `<tr> <td>${student_list[i].cmnd}</td><td>${student_list[i].name}</td><td>${student_list[i].birthday}</td><td>${student_list[i].phone}</td></tr>`
    }

    document.getElementById("table").innerHTML = myTable;
}