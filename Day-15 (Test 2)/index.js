const $ = (x) => document.getElementById(x);
const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const isInThePast = (remindDate) => {
    const today = new Date();
    return remindDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
}

const isToday = (remindDate) => {
    const today = new Date();
    return remindDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
}

const formatDate = (remindDate) => {
    const remindDateParts = remindDate.split('-');
    return remindDateParts[2] + '/' + remindDateParts[1]  + '/' + remindDateParts[0];
}
let remindList = getData('list');

const notifyDate = () => {
    const notifyList = remindList.filter(item => isToday(new Date(item.date)));
    let contentList = '';
    notifyList.forEach(item => {
        contentList += `<div>Hom nay ${item.content} day nhe</div>`;
    });
    $('notify').innerHTML = contentList;
}

const displayList = () => {
    notifyDate();
    if(remindList.length !== 0) {
        let text = '';
        remindList.forEach(item => {
            if(isToday(new Date(item.date))){
                text += `<div class='current'>Ngay ${formatDate(item.date)} <br/>${item.content}<span class='delete' data-content=${item.content} data-date=${item.date}>&times;</span></div>`
            }else{
                text += `<div class='future'>Ngay ${formatDate(item.date)} <br/>${item.content}<span class='delete' data-content=${item.content} data-date=${item.date}>&times;</span></div>`
            }
        });
        $('myList').innerHTML = text;
    }
    let deleteButtons = document.querySelectorAll('.delete');
    [...deleteButtons].forEach(item => {
        item.addEventListener('click', () => {
            console.log(item.getAttribute('data-content'), item.getAttribute('data-date'));
            remindList = remindList.filter(element => element.content !== item.getAttribute('data-content') && element.date !== item.getAttribute('data-date'));
            console.log(remindList);
            item.parentElement.style.display = 'none';
            setData('list', remindList);
        })
    })

}

displayList();


$('save').onclick = () => {
    const remindDateString = $('remind_date').value;
    const remindDate = new Date(remindDateString);
    const remindContent = $('content').value;

    let message = '';
    if(remindContent === ''){
        message += 'Ban chua nhap noi dung<br/>';
    }
    if(remindDateString === ''){
        message += 'Ban chua nhap ngay';
    }
    if(message !== ''){
        return $('validate').innerHTML = message;
    }
    else{
        $('validate').innerHTML = '';
    }

    if(!isInThePast(remindDate)){
        remindList.push({content: remindContent, date: remindDateString});
        setData('list', remindList);
        displayList();
    }
    else{
        return(alert('Cannot choose date from the past'));
    }

}



