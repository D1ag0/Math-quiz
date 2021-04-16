function myFunction() {
    var quiz = '';
    for (var i=0; i < 20; i++) {
        var aNumber = Math.floor(Math.random()*10);
        var bNumber = Math.floor(Math.random()*10);
         quiz += '<p>' + aNumber + ' + ' + bNumber + ' = ____' + '<p>';
    }
    document.getElementById("quiz1").innerHTML = quiz;  

    var quiz = '';
    for (var i=0; i < 20; i++) {
        var aNumber = Math.floor(Math.random()*10);
        var bNumber = Math.floor(Math.random()*10);
         quiz += '<p>' + aNumber + ' + ' + bNumber + ' = ____' + '<p>';
    }
    document.getElementById("quiz2").innerHTML = quiz;  

    var quiz = '';
    for (var i=0; i < 20; i++) {
        var aNumber = Math.floor(Math.random()*10);
        var bNumber = Math.floor(Math.random()*10);
         quiz += '<p>' + aNumber + ' + ' + bNumber + ' = ____' + '<p>';
    }
    document.getElementById("quiz3").innerHTML = quiz;  
}

