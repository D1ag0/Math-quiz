// to toggle between on / off

var MathSymbolArray = [];
var plusArray = [];
var minusArray = [];
var timesArray = [];
var divideArray = [];

//  JS for button effect for signs
function addPlus() {
    document.getElementById("plusBtn").classList.toggle("btnDown");
}
function addMinus() {
    document.getElementById("minusBtn").classList.toggle("btnDown");
}
function addTimes() {
    document.getElementById("timesBtn").classList.toggle("btnDown");
}
function addDivide() {
    document.getElementById("divideBtn").classList.toggle("btnDown");
}

// JS for button effect for Numbers
function number10() {
    var btnClass = document.getElementById("Btn10");
    btnClass.classList.toggle("btnDown");
    document.getElementById("Btn20").classList = "";
    document.getElementById("Btn50").classList = "";
    document.getElementById("Btn100").classList = "";
}
function number20() {
    var btnClass = document.getElementById("Btn20");
    btnClass.classList.toggle("btnDown");
    document.getElementById("Btn10").classList = "";
    document.getElementById("Btn50").classList = "";
    document.getElementById("Btn100").classList = "";
}
function number50() {
    var btnClass = document.getElementById("Btn50");
    btnClass.classList.toggle("btnDown");
    document.getElementById("Btn20").classList = "";
    document.getElementById("Btn10").classList = "";
    document.getElementById("Btn100").classList = "";
}
function number100() {
    var btnClass = document.getElementById("Btn100");
    btnClass.classList.toggle("btnDown");
    document.getElementById("Btn20").classList = "";
    document.getElementById("Btn50").classList = "";
    document.getElementById("Btn10").classList = "";
}



// functionf or create quiz
function quickQuiz() {
    // this is part for create sign array --------
    if (document.getElementById("plusBtn").className === "btnDown") {
        var x = document.getElementById("plusBtn").innerHTML;
    }
    if (document.getElementById("minusBtn").className === "btnDown") {
        var y = document.getElementById("minusBtn").innerHTML;
    }
    if (document.getElementById("timesBtn").className === "btnDown") {
        var a = document.getElementById("timesBtn").innerHTML;
    }
    if (document.getElementById("divideBtn").className === "btnDown") {
        var b = document.getElementById("divideBtn").innerHTML;
    }
    MathSymbolArray.splice(0,1, x);
    MathSymbolArray.splice(1,1, y);
    MathSymbolArray.splice(2,1, a);
    MathSymbolArray.splice(3,1, b);
    MathSymbolArray = MathSymbolArray.filter(item => item);
    // to check if sign has been chosen
    if (MathSymbolArray == "") {
        alert("You have to choose at least one sign!");
        return;
    }
    
    console.log(MathSymbolArray);
    
    // JS for choos number for random
    var maxNumber;

    if (document.getElementById("Btn100").classList == "btnDown") {
        maxNumber = "100";
    } else if (document.getElementById("Btn50").classList == "btnDown") {
        maxNumber = "50";
    } else if (document.getElementById("Btn20").classList == "btnDown") {
        maxNumber = "20";
    } else {
        maxNumber = "10";
    }
    console.log(maxNumber);
    // this is part to generate quiz for three column -----
    // first column
    var quiz = '';
    for (var i=0; i < 20; i++) {
        var aNumber = Math.floor(Math.random()*maxNumber);
        var bNumber = Math.floor(Math.random()*maxNumber);
        var myArray = MathSymbolArray;
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

         quiz += '<p>' + aNumber +' '+ randomItem +' '+ bNumber + ' = ____' + '<p>';
    }
   
    document.getElementById("quiz1").innerHTML = quiz;
    // second column
    var quiz = '';
    for (var i=0; i < 20; i++) {
        var aNumber = Math.floor(Math.random()*maxNumber);
        var bNumber = Math.floor(Math.random()*maxNumber);
        var myArray = MathSymbolArray;
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

         quiz += '<p>' + aNumber +' '+ randomItem +' '+ bNumber + ' = ____' + '<p>';
    }
    document.getElementById("quiz2").innerHTML = quiz;  
    // third colmn
    var quiz = '';
    for (var i=0; i < 20; i++) {
        var aNumber = Math.floor(Math.random()*maxNumber);
        var bNumber = Math.floor(Math.random()*maxNumber);
        var myArray = MathSymbolArray;
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

         quiz += '<p>' + aNumber +' '+ randomItem +' '+ bNumber + ' = ____' + '<p>';
    }
    document.getElementById("quiz3").innerHTML = quiz;  
   
}

