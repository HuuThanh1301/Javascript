const questionList = ['Ai dep trai nhat lop?', 'Con gi co 4 chan?', 'Con gi biet bay?', '1 + 1 bang bao nhieu?', 'Nuoc nao dong dan nhat the gioi?'];

const answerList = [
    {a: 'Loc', b: 'Toan', c: 'Thuan', d: 'Vu'},
    {a: 'ga', b: 'cho', c: 'vit', d: 'ran'},
    {a: 'heo', b: 'khi', c: 'chim', d: 'meo'},
    {a:'3', b: '4', c: '5', d: '2'},
    {a:'My', b: 'An Do', c: 'Indonesia', d: 'Trung Quoc'}
];

const correctAnswer = ['Loc', 'cho', 'chim', '2', 'Trung Quoc'];

const $ = (x) => document.querySelector(x);
const $All = (x) => document.querySelectorAll(x);

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

const display = () => {
    let ques = parseInt(localStorage.getItem('ques'));
    if(ques < 3){
        displayQuestion(ques);
        displayAnswer(ques);
        localStorage.setItem('ques', ques + 1);
    }
}

displayQuestion(0);
displayAnswer(0);

    let i = 0;
    const max_question = 5;
    const choiceList = $All('div[name="choice"]');
    [...choiceList].forEach(element => {
        element.addEventListener('click', e => {
            if(e.target.innerHTML === correctAnswer[i]){
                if($('#fifty').style.display === 'none'){
                    [...$All('div[name="choice"]')].forEach(item => item.style.display = 'block');
                }
                if(i != max_question - 1){
                    displayQuestion(i+1);
                    displayAnswer(i+1);
                    i+=1;
                }
                else{
                    return alert('Chuc mung, ban da tro thanh trieu phu');
                }
            }
            else{
                alert('Tro choi ket thuc!');
                window.location.reload();
            }
        })
    }); 

    $('#skip').onclick = (e) => {
        e.preventDefault();
        if($('#fifty').style.display === 'none'){
            [...$All('div[name="choice"]')].forEach(item => item.style.display = 'block');
        }
        $('#skip').style.display = 'none';
        displayQuestion(i+1);
        displayAnswer(i+1);
        i+=1;
    }

    $('#fifty').onclick = (e) => {
        e.preventDefault();
        console.log(correctAnswer[i]);
        const wrongAnswer = [...$All('div[name="choice"]')].filter(item => item.innerHTML !== correctAnswer[i]);
        const shuffled_wrongAnswer = wrongAnswer.sort(() => 0.5 - Math.random());
        shuffled_wrongAnswer.slice(0, 2).forEach(item => item.style.display = 'none');
        $('#fifty').style.display = 'none';

        console.log(shuffled_wrongAnswer);
    }

    $('#next').onclick = (e) => {
        e.preventDefault();
        if($('#playername').value !== ''){
            $('#modal').style.display = 'none';
            $('#layout').style.display = 'block';
            $('#help').style.display = 'flex';
            alert('Chao mung ' + $('#playername').value + ' da den voi ai la trieu phu!');
        }
    }









