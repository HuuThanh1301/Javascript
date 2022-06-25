// const arrayItem = new Array(9).fill({});
const boardGame = new Array(10)

for(let i = 0; i < 10; i++){
    boardGame[i] = new Array(9);
    for(let j = 0; j < 9; j++){
        boardGame[i][j] = {};
    }
}

board = '';
boardGame.map((arrItem, y) => {
    let row = '';
    arrItem.map((item, x) => {
        row += `<div id=${x}-${y}></div>`;
    })
    board += '<div>' + row + '</div>';
})
document.getElementById('board').innerHTML = board;
class Chessman{
    constructor(type){
        this.type = type;
    }

    movingMethod = () => "";
}

class Tank extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "đi như xe";
}
boardGame[0][0] = new Tank("tank");
boardGame[0][8] = new Tank("tank");
boardGame[9][0] = new Tank("tank");
boardGame[9][8] = new Tank("tank");
console.log(boardGame);

class Knight extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "chạy như ngựa";
}
boardGame[0][1] = new Knight("knight");
boardGame[0][7] = new Knight("knight");
boardGame[9][1] = new Knight("knight");
boardGame[9][7] = new Knight("knight");

class Defender extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "tĩnh như tượng";
}

boardGame[0][2] = new Defender("defender");
boardGame[0][6] = new Defender("defender");
boardGame[9][2] = new Defender("defender");
boardGame[9][6] = new Defender("defender");

class Guardian  extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "bảo vệ như sĩ";
}

boardGame[0][3] = new Guardian("guardian");
boardGame[0][5] = new Guardian("guardian");
boardGame[9][3] = new Guardian("guardian");
boardGame[9][5] = new Guardian("guardian");

class General extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "sướng như vua";
}
boardGame[0][4] = new General("king");
boardGame[9][4] = new General("king");


class Canon extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "bắn như pháo";
}
boardGame[2][1] = new Canon("canon");
boardGame[2][7] = new Canon("canon");
boardGame[7][1] = new Canon("canon");
boardGame[7][7] = new Canon("canon");

class Soldier extends Chessman{
    constructor(type) {
        super(type);
    }
    movingMethod = () => "Đi như lính";
}

for( let i = 0; i < 9; i++){
    if(i % 2 === 0){
        boardGame[3][i] = new Soldier("soldier");
        boardGame[6][i] = new Soldier("soldier");
    }
    
}
