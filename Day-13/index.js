const screen = document.getElementById('screen');

const button_list = Array.from(document.querySelectorAll('.inner-button'));

button_list.forEach(element => {
    element.addEventListener('click', e => {
        switch(e.target.innerHTML){
            case 'exp':
                if(screen.innerHTML.length >= 25){
                    return;
                }
                screen.innerHTML += '^';
                break;
            case '%':  
                console.log(screen.innerHTML) ; 
                console.log(!isNaN(parseInt(screen.innerHTML))) ;
                console.log(!isNaN(parseFloat(screen.innerHTML))) ;
                try{
                    if(eval(screen.innerHTML)){
                        if(!isNaN(parseInt(screen.innerHTML)) || !isNaN(parseFloat(screen.innerHTML))){
                            let num = Number.isInteger(screen.innerHTM) ? parseInt(screen.innerHTML) : parseFloat(screen.innerHTML);
                            num = num * 100;
                            num += '%';
                            screen.innerHTML = num;
                        }
                        else{
                            screen.innerHTML = "Syntax ERRROR";
                        }
                    }
                }
                catch{
                    screen.innerHTML = "Syntax ERRROR";
                }
                break;
            case 'C':
                screen.innerHTML = '';
                break;
            case 'del':
                screen.innerHTML = screen.innerHTML.slice(0, -1);
                break;
            case '=':
                try{
                    let numOnScreen = eval(screen.innerHTML);
                    if(screen.innerHTML === '.'){
                        screen.innerHTML = 0;
                    }
                    if(screen.innerHTML.includes('^')){
                        screen.innerHTML = screen.innerHTML.replaceAll('^','**');
                    }
                    if(typeof numOnScreen === 'number' && !isNaN(numOnScreen) && !Number.isInteger(numOnScreen)){
                        console.log('this is numonscreen', numOnScreen);
                        screen.innerHTML = numOnScreen.toPrecision(12);
                    }
                    screen.innerHTML = eval(screen.innerHTML);
                }
                catch{
                    screen.innerHTML = "Syntax ERROR";
                }
                break;  
            default:
                if(screen.innerHTML.length >= 25){
                    return;
                }
                screen.innerHTML += e.target.innerHTML;
        }
    })
})
