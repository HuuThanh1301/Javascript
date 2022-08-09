const timer = () => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    $('date').innerHTML = day;
    $('month').innerHTML = month + 1;
    $('year').innerHTML = year;
    $('hour').innerHTML = hour;
    $('minute').innerHTML = minute;
    $('second').innerHTML = second;
}

const $ = (x) => document.getElementById(x);
const $Q = (x) => document.querySelector(x);

$('clock').onclick = () => {
    $Q('.container').style.display = 'block';
    $('clock').style.display = 'none';
    document.body.style.backgroundColor = 'black';
    setInterval(timer, 1000);
}

$('cancel').onclick = () => {
    $Q('.container').style.display = 'none';
    $('clock').style.display = 'block';
    document.body.style.backgroundColor = 'white';
}


