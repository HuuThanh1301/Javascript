var myVar = "Meo Meo";
function myFunc1(){
    document.getElementById("animal").innerText = myVar;
}

function myFunc2(){
    var yourName= prompt("Please enter your name");
    if(yourName != null){
        alert("Hello " + yourName);
    }
}

function myFunc3(){
    var name= 'user';
    var number = 10023;
    var arr= [1,2,3];
    console.log(name);
    console.log(number);
    console.log(arr);
}