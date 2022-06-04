const studentArr = () => {
    const students = ["Loc", "Thuan", "Toan", "Quang", "Vu", "Thanh"]; //Loc, Thuan, Toan, Quang, Vu, Thanh
    students.push("Melody Mask");
    students.unshift("Ms.Puiyi");
    students[3] = "Yui Hatano";
    console.log(students);
    students.splice(students.length - 2, 1);
    students.splice(1, 1);
    console.log(students);
}

const sum = (array) => {
    let totalSum = 0;
    for(let i = 0; i < array.length; i++){
        totalSum += array[i];
    }
    return totalSum;
}

const moneyCalculator = () => {
    let moneyInput;
    let count = 1;
    const myExpense = [];
   
    while(true){  
        do{
            moneyInput = prompt("Nhap so tien thu "+ count);
            (isNaN(moneyInput) || moneyInput < 0) ? count = count : (count++, myExpense.push(parseInt(moneyInput)));
        }while((isNaN(moneyInput) || moneyInput < 0) && moneyInput !== "done");

        if(moneyInput === "done"){
            break;
        }
    }

    alert("Mang vua nhap: " + myExpense +"\nTong chi tieu: " + sum(myExpense));
}

const findMax = (array) => {
    let maxNum = -Infinity;
    for(let i = 0; i < array.length; i++){
        if(array[i] > maxNum){
            maxNum = array[i];
        }
    }
    return maxNum;
}

const returnValue = (array, index) => {
    if(index < 0 || index > array.length - 1){
        return 0;
    }
    return array[index];
}


const sumOfMax = () => {
    const myArr = [-3, -2, -10, 0, 5, 0, 5, -9];
    const maxValue = findMax(myArr);
    const index = myArr.indexOf(maxValue);
    const a = returnValue(myArr, index - 2);
    const b = returnValue(myArr, index - 1);
    const c = returnValue(myArr, index + 1);
    const d = returnValue(myArr, index + 2);
    const sum = a + b + c + d;
    alert(myArr + "\n"+ a + "+" + b + "+" + c + "+" + d + " = " + sum);
}

function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
}

const pokemon = () => {
    let paragraph = "Pokémon (Nhật: ポケモン Hepburn: Pokemon?) (tiếng Anh: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/)[1][2] còn được gọi là Pocket Monsters (Nhật: ポケットモンスター Hepburn: Poketto Monsutā?, n.đ Quái vật bỏ túi) tại Nhật Bản, là thương hiệu nhượng quyền truyền thông được quản lý bởi The Pokémon Company, một tập đoàn Nhật Bản giữa Nintendo, Game Freak và Creatures.[3] Bản quyền nhượng quyền được chia sẻ bởi cả ba công ty, nhưng Nintendo là chủ sở hữu duy nhất của nhãn hiệu này.[4] Nhượng quyền được tạo bởi Satoshi Tajiri vào năm 1999,[5] và tập trung vào các sinh vật hư cấu gọi là \"Pokémon\", mà con người, được gọi là Pokémon Trainers (Tiếng Việt gọi là Những nhà huấn luyện Pokémon), bắt và huấn luyện để chiến đấu với nhau để chơi thể thao. Khẩu hiệu tiếng Anh cho nhượng quyền thương mại là \"Gotta Catch 'Em All\".[6][7] Các tác phẩm trong thương hiệu nhượng quyền thương mại được đặt trong vũ trụ Pokémon."
    let myArr = paragraph.split(/[ .")]/);
    let count = 0;
    for(let i = 0; i < myArr.length; i++){
        if(myArr[i] === "Pokémon"){
            count++;
        }
    }
    let newParagraph = paragraph.replace(/Pokémon/g, "Pocket Monster");
    alert(count);
    let start = 0;
    let sentence;
    for(let i = 0; i < newParagraph.length; i++){
        if(newParagraph.charAt(i) === '.' && !charIsLetter(newParagraph.charAt(i+1))){
            sentence = newParagraph.substring(start, i+1);
            console.log(sentence);
            document.write(`<p>${sentence}</p>`);
            start = i+1;
        }
    }
}