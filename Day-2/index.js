const myFunc1 = () => {
    const income = prompt("Nhap thu nhap hang thang: ");
    const text_interest = prompt("Nhap lai xuat mot nam: ");
    const num_interest = text_interest.split('%');
    const years = prompt("Nhap so nam: ");
    if(income != null && text_interest!= null && years!=null){
        const total_income = (income*12) * years *(1 + num_interest[0]/100);
        alert("Thu nhap trong " + years + " nam voi lai xuat " + text_interest + " mot nam la: " + total_income.toFixed(2));
    }

  
}

const myFunc2 = () => {
    const name = prompt("Enter your name: ");
    const d = new Date();
  
    let thu;
    switch(d.getDay()){
        case 0: thu = "chu nhat"; break;
        case 1: thu = "2"; break;
        case 2: thu = "3"; break;
        case 3: thu = "4"; break;
        case 4: thu = "5"; break;
        case 5: thu = "6"; break;
        case 6: thu = "7"; break;
    }
    let thang;
    switch(d.getMonth()){
        case 0: thang = "1"; break;
        case 1: thang = "2"; break;
        case 2: thang = "3"; break;
        case 3: thang = "4"; break;
        case 4: thang = "5"; break;
        case 5: thang = "6"; break;
        case 6: thang = "7"; break;
        case 7: thang = "8"; break;
        case 8: thang = "9"; break;
        case 9: thang = "10"; break;
        case 10: thang = "11"; break;
        case 11: thang = "12"; break;
    }
   
    alert("Hello " + name + ", hom nay la thu " + thu + " ngay " + d.getDate() +
     " thang " + thang + " nam " + d.getFullYear());
}

const myFunc3 = () => {
    const subject = prompt("Enter your favourite subject: ");
    if(subject.toLocaleLowerCase() === "cong nghe thong tin"){
        alert(true);
    }
    else{
        alert(false);
    }

}





