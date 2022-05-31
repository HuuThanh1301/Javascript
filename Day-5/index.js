
const happyBirthday = () => {
    const name = prompt("Enter your name: ");
    const enteredDate = prompt("Enter your birthday (dd/mm/yyyy): ");
 
    const extracted_date = enteredDate.split("/");
    const formatted_date = extracted_date[1] + "/" + extracted_date[0] + "/" + extracted_date[2];
    const birthday = new Date(formatted_date);
    const currentDate = new Date();
    let next_birthday;
    let difference_in_time;
    let difference_in_days;
    if(currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() === birthday.getDate()){
        alert("Chuc mung sinh nhat " + name);
    }
    else{
        if(currentDate.getMonth() < birthday.getMonth() || 
        (currentDate.getMonth() === birthday.getMonth() && birthday.getDate() > currentDate.getDate())){
            next_birthday = new Date(extracted_date[1] + "/" + extracted_date[0] + "/" + currentDate.getFullYear());
            difference_in_time = next_birthday.getTime() - currentDate.getTime();
            difference_in_days = difference_in_time / (1000 * 3600 * 24);
        }
        else if(currentDate.getMonth() > birthday.getMonth() || 
        (currentDate.getMonth() === birthday.getMonth() && birthday.getDate() < currentDate.getDate())){
            const nextYear = currentDate.getFullYear() + 1;
            next_birthday = new Date(extracted_date[1] + "/" + extracted_date[0] + "/" + nextYear);
            difference_in_time = next_birthday.getTime() - currentDate.getTime();
            difference_in_days = difference_in_time / (1000 * 3600 * 24);
        }
        console.log(difference_in_days);
        alert("Con " + Math.ceil(difference_in_days) + " ngay nua toi sinh nhat ban");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
      return true;
    }
  
    return false;
}

const userInput = () => {
    let user_result = [];
    let randomNum;
    for(let i = 0; i < 6; i++){
        do{
            randomNum = prompt("Inputs cannot be duplicated (from 1 to 45). Please enter number " + (i + 1) + ": ");
        }while(isNaN(randomNum) || randomNum < 1 || randomNum > 45);
        user_result.push(randomNum);
    }
    return user_result;
}

const checkVietlott = () => {
    let user_result = userInput();
    let vietlott_result = [];
    let duplicate = 0;
    do{
        vietlott_result = [];
        for(let i = 0; i < 6; i++){
            let randomNum = getRndInteger(1, 46);
            vietlott_result.push(randomNum);
        }
        // console.log(vietlott_result);
        // console.log(containsDuplicates(vietlott_result));
    }while(containsDuplicates(vietlott_result) === true);

    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            if(user_result[i] == vietlott_result[j]){
                duplicate++;
            }
        }
    }
    console.log("Ket qua vietlott: " + vietlott_result);
    console.log("Ma so xo cua ban: "+ user_result)
    console.log("Number of duplicates " + duplicate);

    switch(duplicate){
        case 2:
            alert("Ban trung giai khuyen khich");
            break;
        case 3: 
            alert("Ban trung giai ba");
            break;
        case 4:
            alert("Ban trung giai nhi");
            break;
        case 5:
            alert("Ban trung giai nhat");
            break;
        case 6:
            alert("Giai jackpot. Chúc mừng bạn là người may mắn nhất hôm nay");
            break;
        default:
            alert("Chuc ban may man lan sau");
    }

    // alert(vietlott_result);
    // console.log("User Result: " + user_result);
}