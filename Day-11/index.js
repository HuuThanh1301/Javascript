const validationRule = {
    username: { min: 8, max: 16, isRequired: true, regExPattern: /^[A-Za-z0-9_]*$/, isUser: true},
    email: { min: 10, max: 30, isRequired: true, regExPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, isEmail: true},
    // password: { min: 8, isRequired: true, regExPattern: /^[A-Za-z0-9_]*$/, isPassword: true},
  };

document.getElementById("submit").onclick = (e) => {
    e.preventDefault();
    console.log("submitted");
    const username = document.getElementById("username").value;

    const fieldValue = {
        username: username,
        email: email,
    };

    const arrayFieldValid = Object.keys(fieldValue).map(keyItem => {
        if(!fieldValue[keyItem] && validationRule[keyItem].isRequired){
            return false;
          }
        if(fieldValue[keyItem].length < validationRule[keyItem].min || 
        fieldValue[keyItem].length > validationRule[keyItem].max){
            return false;
        }
        if(validationRule[keyItem].isUser && fieldValue[keyItem]){
            // const regExp = /^[A-Za-z0-9_]*$/;
            return validationRule[keyItem].regExPattern.test(fieldValue[keyItem]);
        }
        if(validationRule[keyItem].isEmail && fieldValue[keyItem]){
            return validationRule[keyItem].regExPattern.test(fieldValue[keyItem]);
        }

        return true;
    })

    console.log(arrayFieldValid);
}