// const $ = (selector) => document.querySelector(selector);
// const $All = (selector) => document.querySelectorAll(selector);

const validationRule = {
    email: {
        min: 0,
        max: 50, 
        isRequired: true,
        regExPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    phoneNumber: {
        min: 10,
        max: 12,
        isRequired: true,
        regExPattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    },
    birthday: {
        min: 10,
        max: 10,
        isRequired: true,
        regExPattern: '',
    },
    gender: {
        min: 1,
        max: 1,
        isRequired: true,
        regExPattern: '',
    },
    course: {
        min: 1,
        max: 3,
        isRequired: true,
        regExPattern: '',
    },
    classes: {
        min: 0,
        max: 50,
        isRequired: true,
        regExPattern: '',
    }
}

document.getElementById('submit').onclick = (e) => {
    // e.preventDefault();
    const email = document.querySelector('#email').value;
    const birthday = document.querySelector('#birthday').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const gender = [...document.querySelectorAll('input[name="gender"]')].filter(item => item.checked).map(item => item.value);
    const course = [...document.querySelectorAll('input[name="course"]')].filter(item => item.checked).map(item => item.value);
    const classes = document.querySelector('#classes').value;
    // const gender = [...document.querySelectorAll('input[name="gender"]')]
    // .map((input) => {
    //   if (input.checked) return input.value;
    // })
    // .filter((item) => item);
    
    console.log(classes);

    const fieldValue = {
        email: email,
        birthday: birthday,
        phoneNumber: phoneNumber,
        gender: gender,
        course: course,
        classes: classes
    };

    const arrayFieldValid = Object.keys(fieldValue).map(keyItem => {
        if(!fieldValue[keyItem] && validationRule[keyItem].isRequired){
            return {[keyItem] : false};
        }
        if(fieldValue[keyItem].length < validationRule[keyItem].min || fieldValue[keyItem].length > validationRule[keyItem].max){
            return {[keyItem]: false};
        }
        if(validationRule[keyItem].regExPattern){
            return {[keyItem]: validationRule[keyItem].regExPattern.test(fieldValue[keyItem])};
        }

        return {[keyItem]: true};
    })

    console.log(arrayFieldValid);

    arrayFieldValid.map(item => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        if(value){
            // document.querySelector(`#${key}`).style.border = '1px solid green';
            document.querySelector(`#${key}`).style.color = 'green';
        }
        else{
            // document.querySelector(`#${key}`).style.border = '1px solid red';
            document.querySelector(`#${key}`).style.color = 'red';
        }
    })

    
}