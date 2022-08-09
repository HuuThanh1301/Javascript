const $ = (x) => document.querySelector(x);
const $All = (x) => document.querySelectorAll(x);

const questionList = [
    {
        question: 'Con gi co 4 chan?',
        answer: ['Con Chim', 'Con Ca', 'Con Ran', 'Con Cho'],
        correctAnswer: 'Con Cho'
    },
    {
        question: '1 + 1 bang bao nhieu?',
        answer: ['1', '2', '3', '4'],
        correctAnswer: '2'
    },
    {
        question: 'Nuoc nao dong dan nhat the gioi',
        answer: ['My', 'An Do', 'Trung Quoc', 'Singapore'],
        correctAnswer: 'Trung Quoc'
    }
]

let count = 10;
let myVar;

// ????????????????????
// let countDown = setInterval(() => {
//     if(count >= 0){
//         $('#counter').innerHTML = count;
//     }
//     count--;
// }, 1000);
const countDown = () => {
    myVar = setInterval(() => {
        if(count >= 0){
            $('#counter').innerHTML = count;
        }

        if(count < 0){
            clearInterval(myVar);  // ?????????????????
            alert('Het thoi gian! Tro choi ket thuc');
            return window.location.reload();
        }

        count--;
    }, 1000);
}

const display = (id) => {
    $('#question').innerHTML = questionList[id].question;
    $('#a').innerHTML = questionList[id].answer[0];
    $('#b').innerHTML = questionList[id].answer[1];
    $('#c').innerHTML = questionList[id].answer[2];
    $('#d').innerHTML = questionList[id].answer[3];
    countDown();
}

display(0);


let DOM_object = 'empty';
let index = 0;
const max_question = 3;


[...$All('.answer')].forEach(element => {
    element.addEventListener('click', () => {
        DOM_object = element;
        DOM_object.style.backgroundColor = 'blue';
        let other_answers = [...$All('.answer')].filter(item => item != DOM_object);
        other_answers.forEach(item => item.style.backgroundColor = 'black');
    })
})

$('#confirm').onclick = () => {
    // clearInterval(countDown);
    clearInterval(myVar);
    if(DOM_object === 'empty'){
        alert('Ban phai chon dap an');
    }
    if(DOM_object.innerHTML === questionList[index].correctAnswer){
        if(index < max_question - 1){
            DOM_object.style.backgroundColor = 'green';
            setTimeout(() => {
                DOM_object.style.backgroundColor = 'black';
                DOM_object = 'empty';
                count = 10;
                display(index + 1);
                index = index + 1;
            }, 1500);
        }
        else{
            DOM_object.style.backgroundColor = 'green';
            return alert('Chuc mung, ban da chien thang');
        }
    }
    else{
        DOM_object.style.backgroundColor = 'red';
        setTimeout(() => {
            DOM_object.style.backgroundColor = 'black';
            alert('Tro choi ket thuc');
            return window.location.reload();
        }, 1500);
    }
}







