const $ = selector => document.querySelector(selector);

const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const admins = [{name: 'admin', password: 'Aa@123456'}, {name: 'admin2', password: 'admin123admin'}] ;

const isAdminLoggin = () => {
    let isLogin = localStorage.getItem('login');
    if(isLogin){
        $('#modal').style.display = 'none';
        $('.layout').style.display = 'flex';
    }
}

setData('admin', admins);
isAdminLoggin();


let studentList = getData('studentList');

const displayTable = () => {
    let table = '<tr><th>CMND</th><th>Name</th><th>Birthday</th><th>Phone</th></tr>'
    if(studentList.length !==0){
        let row = '';
        // for(item of studentList){
        //     row += `<tr><td>${item.cmnd}</td><td>${item.name}</td><td>${item.birthday}</td><td>${item.phone}</td></tr>`
        // }
        // table += row;
        studentList.forEach(item => {
            row += `<tr><td>${item.cmnd}</td><td>${item.name}</td><td>${item.birthday}</td><td>${item.phone}</td></tr>`
        })
        table += row;
        $('#myTable').innerHTML = table;
    }
    else{
        alert('There is no data in local storage');
    }
}

displayTable();

$('#submit').onclick = e => {
    e.preventDefault();
    const cmnd = $('#cmnd').value;
    const name = $('#name').value;
    const birthday = $('#birthday').value;
    const phone = $('#phone').value;
    const index = studentList.findIndex(item => item.cmnd === cmnd);
    if(index !== -1){
        studentList.splice(index, 1, {cmnd: cmnd, name: name, birthday: birthday, phone: phone});
    }else{
        studentList.push({cmnd: cmnd, name: name, birthday: birthday, phone: phone});
    }
    setData('studentList', studentList);
    displayTable();
}

$('#login').onclick = (e) => {
    e.preventDefault();
    const admin = $('#admin').value;
    const password = $('#password').value;
    const adminList = getData('admin');
    const login_admin = adminList.filter(item => item.name === admin && item.password === password);
    if(login_admin.length !== 0){
        $('#modal').style.display = 'none';
        $('.layout').style.display = 'flex';
        localStorage.setItem('login', true);
    }
    else{
        alert('Login failed');
    }
}

$('#logout').onclick = (e) => {
    e.preventDefault();
    localStorage.setItem('login', false);
    $('#modal').style.display = 'block';
    $('.layout').style.display = 'none';
}
