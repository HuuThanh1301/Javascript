const myFunc1a = (name) => {
    alert("Hello " + name);
}

const myFunc1b = (a, b, c) => {
    let min_value = Math.min(a,b,c);
    let result;
    if(min_value === a){
        result = b - c - a;
    }
    else if(min_value === b){
        result = a - c - b;
    }
    else{
        result = b - a - c;
    }
    alert("Gia tri a, b ,c lan luot la: " + a + " " + b + " " + c +
    "\n" + "Gia tri can tim la: " + result);
}

const myFunc1c = (obj) => {
    let diemTB = (obj.toan + obj.ly + obj.hoa + obj.sinh + obj.van + obj.su + obj.dia + obj.anh) / 8;
    let message;
    if(diemTB < 5){
        message = "Hoc sinh yeu";
    }
    else if(5 <= diemTB && diemTB < 6.5){
        message = "Hoc sinh trung binh";
    }
    else if(6.5 <= diemTB && diemTB < 8){
        message = "Hoc sinh kha";
    }
    else{
        message = "Hoc sinh gioi";
    }

    alert("Diem trung binh la: " + diemTB + "\n" + message);
}


const calculator = (electric_amount) => {
    let money;
    if(electric_amount <= 150){
        money = electric_amount * 3000 ;
    }
    else if(electric_amount <= 500){
        money = 150 * 3000 + (electric_amount - 150) * 5000;
    }
    else if(electric_amount <= 1500){
        money = 150 * 3000 + 350 * 5000 + (electric_amount - 500) * 10000;
    }
    else{
        money = 150 * 3000 + 350 * 5000 + 1000 * 10000 + (electric_amount - 1500) * 20000;
    }

    return money;
}
const myFunc2 = () => {
    let electric_amount;
    do{
        electric_amount = prompt("Enter the amount of electricity used (the amound must be in the range from 100 to 2000): ");
        electric_amount = parseInt(electric_amount);
        console.log(typeof electric_amount);
        console.log(electric_amount);
    }while(Number.isNaN(electric_amount) || electric_amount < 100 || electric_amount > 2000);

    alert("So tien phai tra: " + calculator(electric_amount));
}