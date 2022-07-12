const questionList = ['Ai dep trai nhat lop?', 'Con gi co 4 chan?', 'Con gi biet bay?' ];

const answerList = [{a: 'Loc', b: 'Toan', c: 'Thuan', d: 'Vu'}, {a: 'ga', b: 'cho', c: 'vit', d: 'ran'}, {a: 'heo', b: 'khi', c: 'chim', d: 'meo'}];

const correctAnswer = ['Loc', 'cho', 'chim'];

const $ = (x) => document.querySelector(x);
const $All = (x) => document.querySelectorAll(x);



// localStorage.setItem('ques-num', x);

const displayQuestion = (x) => {
    document.getElementById('question').innerHTML = questionList[x];
}

const displayAnswer = (x) => {
    document.getElementById('a').innerHTML = answerList[x].a;
    document.getElementById('b').innerHTML = answerList[x].b;
    document.getElementById('c').innerHTML = answerList[x].c;
    document.getElementById('d').innerHTML = answerList[x].d;
}

localStorage.setItem('ques', 0);

let questionNum = localStorage.getItem('ques');

const display = () => {
    displayQuestion(questionNum);
    displayAnswer(questionNum);
    const listOfChoice = $All('div[name="choice"]');
    console.log(listOfChoice);
    listOfChoice.forEach(element => {
        element.addEventListener('click', e => {
            if(e.target.innerHTML === correctAnswer[questionNum]){
                localStorage.setItem('ques', parseInt(questionNum) + 1);
            }
            else{
                return alert('Tro choi ket thuc');
            }
        })
    })
}

const totalDisplay = () => {
    for(let i = 0; i < 3; i++){
        display();
    }
};

totalDisplay();








