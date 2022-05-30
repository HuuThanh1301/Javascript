function convertToNumber(value) {
    return value = parseInt(value);
}

const happyBirthday = () => {
    const name = prompt("Enter your name: ");
    const birthday = prompt("Enter your birthday (dd/mm/yyyy): ");
    const extracted_date_string = birthday.split("/");
    const extracted_date_number = extracted_date_string.map(convertToNumber);
    const currentDate = new Date();
    console.log(currentDate.getMonth()+1);
    console.log(typeof (currentDate.getMonth()+1 ));
    console.log(extracted_date_number[1]);
    console.log(typeof extracted_date_number[1]);
  
    const monthsOfYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days_left;

    if(currentDate.getDate() === extracted_date_number[0] && currentDate.getMonth() + 1 === extracted_date_number[1]){
        alert("Happy birthday to you, "+name);
    }
    else if(currentDate.getDate() < extracted_date_number[0] && currentDate.getMonth() + 1 === extracted_date_number[1]){
        days_left = extracted_date_number[0] - currentDate.getDate();
        console.log("HIHIHI");
    }
    // else{
    //     console.log("HAHAHA");
    //     let days_left;
    //     if(currentDate.getDate() < extracted_date_number[0] && currentDate.getMonth() + 1 === extracted_date_number[1]){
    //         days_left = extracted_date_number[0] - currentDate.getDate();
    //         console.log("HIHIHI");
    //     }
    // }


 
}