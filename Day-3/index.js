const myFunc1 = () => {
    const employee = {};
    employee.name = prompt("Nhap ten nhan vien: ");
    do{
        employee.level = prompt("Nhap trinh do nhan vien (bao gom fresher, junior, middle, senior bat ke chu hoa hay chu thuong): ");
    }while(employee.level.toLocaleLowerCase() !== 'fresher' &&
    employee.level.toLocaleLowerCase() !== 'junior' && 
    employee.level.toLocaleLowerCase() !== 'middle' && 
    employee.level.toLocaleLowerCase() !== 'senior');

    do{
        employee.role = prompt("Nhap chuc vu nhan vien (bao gom member, trainer, team lead, pm bat ke chu hoa hay chu thuong): ");
    } while(employee.role.toLocaleLowerCase() !== 'member' &&
    employee.role.toLocaleLowerCase() !== 'trainer' && 
    employee.role.toLocaleLowerCase() !== 'team lead' && 
    employee.role.toLocaleLowerCase() !== 'pm');

    do{
        employee.experience = prompt("Nhap tham nien nhan vien: ");
        employee.experience = parseInt(employee.experience);
        console.log(typeof employee.experience);
        console.log(employee.experience);
    }while(Number.isNaN(employee.experience) || employee.experience < 0 || employee.experience > 10);

    employee.salary = 0;

    switch(employee.level.toLocaleLowerCase()){
        case 'fresher':
            employee.salary = 8000000;
            break;
        case 'junior':
            employee.salary = 10000000;
            break;
        case 'middle':
            employee.salary = 15000000;
            break;
        case 'senior':
            employee.salary = 20000000;
            break;
    }

    switch(employee.role.toLocaleLowerCase()){
        case 'member':
            employee.salary += 0;
            break;
        case 'trainer':
            employee.salary += 1000000;
            break;
        case 'team lead':
            employee.salary += 3000000;
            break;
        case 'pm':
            employee.salary += 8000000;
            break;
    }

    switch(employee.experience){
        case 0:
        case 1:
        case 2:
            employee.salary += 0;
            break;
        case 3:
        case 4:
            employee.salary += 500000;
            break;
        case 5:
        case 6:
        case 7:
            employee.salary += 2000000;
            break;
        case 8:
        case 9:
        case 10:
            employee.salary += 4000000;
            break;
    }

    if(employee.level.toLocaleLowerCase() === 'senior' && employee.role.toLocaleLowerCase() === 'team lead'){
        if(employee.experience < 3){
            employee.salary += 500000;
        }
        else if(employee.experience >= 3 && employee.experience < 5){
            employee.salary += 2000000;
        }
        else if(employee.experience >= 5 && employee.experience < 8){
            employee.salary += 5000000;
        }
        else{
            employee.salary += 10000000;
        }
    }

    if(employee.role.toLocaleLowerCase() === 'pm'){
        if(employee.experience >= 5 && employee.experience < 8){
            employee.salary = employee.salary * (1 + 0.05);
            console.log("HAHAHA");
        }
        else if(employee.experience >= 8){
            employee.salary = employee.salary * (1 + 0.06);
            console.log("HIHIHI");
        }
    }

    alert("Luong cua nhan vien " + employee.name + " la: " + employee.salary);
}

const myFunc2 = () => {
    const myArr = [];
    for(let i=0; i<200; i++){
        if(i%4===0 && i%8!==0){
            myArr.push(i);
        }
    }
    alert(myArr);
}

// function swap_func(a, b){
//     let temp = a;
//     a = b;
//     b = temp;
// }

const myFunc3 = () => {
    const myArr = [2,3, 5, 6, 3, 6, 8, 7, 3, 1, 2, 5, 7, 8, 4];
    for(let i = 0; i < myArr.length - 1; i++){
        for(let j = 0; j < myArr.length - i - 1; j++){
            if(myArr[j] < myArr[j+1]){
                let temp = myArr[j];
                myArr[j] = myArr[j+1];
                myArr[j+1] = temp;
            }
        }
    }
    

    let sum = 0;
    for(let j = 0; j < myArr.length; j++){
        sum += myArr[j];
    }

    alert("Mang sau khi sap xep: " + myArr +"\nTong cac phan tu cua mang: " + sum);

}
