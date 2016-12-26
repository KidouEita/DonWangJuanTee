var menuOn;
window.onbeforeunload=
function(){
        localStorage.setItem("WindowNow",window.location.pathname.split("/").slice(-1));
    }
$(document).ready(function () {
    var ChineseScore1;
    var ScienceScore1;
    var MathScore1;
    window.scrollTo(0, 700);
    var obstclass = ["#obst1", "#obst2", "#obst3", "#obst4", "#obst5", "#obst6", "#obst7", "#obst8", "#obst9", "#obst10", "#slope1", "#slope2", "#slope3", "#slope4", "#slope5", "#slope6", "#slope7", "#slope8", "#slope9", "#slope10"];
    var grassclass = ["#grass1", "#grass2", "#grass3","#grass4","#grass5","#grass6","#grass7","#grass8"];
    /** Slope numbered from bottom to top,from left to right */
    var transport = ["#trans1"];
    $('.progress')[0].style.top = "640px";
    $('.progress')[0].style.width = "360px";
    $('#open').click(function () {
        $('.sidenav')[0].style.width = '250px';
    });
    $('.closebtn').click(function () {
        $('.sidenav')[0].style.width = '0px';
    });
    $('#about').click(function () {
        if ($('#editor')[0].style.display != "none") {
            $('#editor').fadeOut();
        } else {
            $('#editor').fadeIn();
        }
    });
    $('#State').click(function () {
        if ($('#State2')[0].style.display != "none") {
            $('#State2').fadeOut();
        } else {
            $('#State2').fadeIn();
        }
    });
    $('#index').keydown(keyListener);
    $('#index').keyup(keyupListener);
    var elem = $("#person")[0];

    if (!localStorage.getItem("route101Xproperty")) {
        elem.style.left = localStorage.getItem("RPG1Xproperty");
        elem.style.top = '610px';
        ChineseScore1=localStorage.getItem("ChineseScore");
        ScienceScore1=localStorage.getItem("ScienceScore");
        MathScore1=localStorage.getItem("MathScore");
    } else {
        elem.style.left = localStorage.getItem("route101Xproperty");
        elem.style.top =
            localStorage.getItem("route101Yproperty");
        Score = localStorage.getItem("Health");
        elem.style.backgroundImage = localStorage.getItem("face");
        ChineseScore1=localStorage.getItem("ChineseScore");
        ScienceScore1=localStorage.getItem("ScienceScore");
        MathScore1=localStorage.getItem("MathScore");
    }
    var Health1 = localStorage.getItem("Health");
    var elemx = parseInt($("#person")[0].style.left, 10);
    var elemy = parseInt($("#person")[0].style.top, 10);
    $('.progress')[0].style.top = elemy + 25 + "px";
    $('.progress')[0].style.left = elemx + 1 + "px";
    $('.progress')[0].style.width = "25px";
    $('.progress')[0].style.height = "5px";
    $('.progress-bar')[0].style.width = Health1 + "%";
    $('#p1').text("國文分數："+ChineseScore1);
    $('#p2').text("數學分數："+MathScore1);
    $('#p3').text("自然分數："+ScienceScore1);
    var paddleX = [20, 35, 355, 230, 20, 225, 23, 160, 131, 20, //obst
                  30, 145, 285, 30, 83, 178, 60, 30, 30, 155]; //slope
    var paddleY = [18, 584, 10, 584, 1, 1, 230, 230, 54, 390, //obst
                  505, 505, 425, 330, 330, 330, 251, 169, 90, 90]; //slope
    var paddleWidth = [10, 152, 16, 152, 138, 138, 40, 95, 27, 171, //obst
                      65, 210, 75, 33, 60, 190, 100, 105, 105, 100]; //slope
    var paddleHeight = [623, 55, 600, 55, 25, 25, 27, 27, 123, 27, //obst
                       1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //slope
    var transX = [192];
    var transY = [627];
    var transWidth = [35];
    var transHeight = [10];
    var grassX = [191, 271, 240,32,64,192,256,160];
    var grassY = [560, 514, 544,544,512,384,209,96];
    var grassWidth = [30, 79, 80,114,111,96,96,195];
    var grassHeight = [80, 25, 30,30,30,77,77,77];
    for (var i in transport) {
        $(transport[i])[0].style.width = transWidth[i] + "px";
        $(transport[i])[0].style.height = transHeight[i] + "px";
        $(transport[i])[0].style.top = transY[i] + "px";
        $(transport[i])[0].style.left = transX[i] + "px";
    }
    for (var i in grassclass) {
        $(grassclass[i])[0].style.width = grassWidth[i] + "px";
        $(grassclass[i])[0].style.height = grassHeight[i] + "px";
        $(grassclass[i])[0].style.top = grassY[i] + "px";
        $(grassclass[i])[0].style.left = grassX[i] + "px";
    }
    for (var i in obstclass) {
        $(obstclass[i])[0].style.width = paddleWidth[i] + "px";
        $(obstclass[i])[0].style.height = paddleHeight[i] + "px";
        $(obstclass[i])[0].style.top = paddleY[i] + "px";
        $(obstclass[i])[0].style.left = paddleX[i] + "px";
    }
    var t = [false, false, false, false, false, false, false, false, false, false, //obst
             false, false, false, false, false, false, false, false, false, false]; //slope
    var ts = [false];
    var tg = [false, false, false,false,false,false,false,false];

    function checkColli() {
        this.checkNonCollision = true;
        for (var i = 0; i < paddleHeight.length; i++) {
            if (t[i] == false) checkNonCollision = false;
        }
        return checkNonCollision;
    }

    function checkColli2(tl) {
        this.checkNonCollision = false;
        for (var i = 0; i < grassclass.length; i++) {
            if (tl[i] == true) checkNonCollision = true;
        }
        return checkNonCollision;
    }

    function keyListener(e) {
        elemx = parseInt($("#person")[0].style.left, 10);
        elemy = parseInt($("#person")[0].style.top, 10);
        var rect = $("#person")[0].getBoundingClientRect();
        for (var i in obstclass) t[i] = false;
        switch (e.keyCode) {
        case 65:
            if (!menuOn) {
                var x = parseInt(elem.style.left, 10);
                for (var i = 0; i < paddleHeight.length; i++) {
                    var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) || rect.top <= obstinner.top - 25) {
                        t[i] = true;
                    } else {
                        t[i] = false;
                    }
                }
                for (var i = 0; i < grassclass.length; i++) {
                    var obstinner = $(grassclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(grassclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(grassclass[i])[0].style.width, 10) || rect.top <= obstinner.top - 30) {
                        tg[i] = false;
                    } else {
                        tg[i] = true;
                    }
                }
                if (checkColli()) {
                    var id = setInterval(frame, 0.3);

                    function frame() {
                        $('.progress')[0].style.left = elemx - 2 + "px"
                        elem.style.animation = "left 0.3s infinite"
                        elem.style.left = x - 2 + 'px';
                        elem.style.backgroundImage = "url('./Source/Pic/left0.png')";
                        clearInterval(id);
                    }
                } else {
                    var id = setInterval(frame, 0.3);
                    elem.style.animation = "left 0.3s infinite"
                    elem.style.backgroundImage = "url('./Source/Pic/left0.png')";
                    clearInterval(id);
                }
                if (checkColli2(tg)) {
                    if (Math.floor((Math.random() * 50) + 1) == 5) {
                        location.replace("Battle.html");
                        localStorage.setItem("face", "url('./Source/Pic/left0.png')");
                        localStorage.setItem("route101Xproperty", elem.style.left);
                        localStorage.setItem("route101Yproperty", elem.style.top);
                        localStorage.setItem("Health", Health1);
                        localStorage.setItem("ChineseScore",ChineseScore1);
                        localStorage.setItem("ScienceScore",ScienceScore1);
                        localStorage.setItem("MathScore",MathScore1);
                    }
                }
            }
            break;
        case 87:
            if (!menuOn) {
                var y = parseInt(elem.style.top, 10);
                var py = parseInt($('.progress')[0].style.top, 10);
                for (var i = 0; i < paddleHeight.length; i++) {
                    var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 25 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) + 5 || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 25) {
                        t[i] = true;
                    } else {
                        t[i] = false;
                    }
                }
                for (var i = 0; i < grassclass.length; i++) {
                    var obstinner = $(grassclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 25 || rect.top >= obstinner.top + parseInt($(grassclass[i])[0].style.height, 10) + 5 || rect.left >= obstinner.left + parseInt($(grassclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 25) {
                        tg[i] = false;
                    } else {
                        tg[i] = true;
                    }
                }
                if (checkColli()) {
                    window.scrollBy(0, -2);
                    var id2 = setInterval(frame2, 0.3);

                    function frame2() {
                        $('.progress')[0].style.top = elemy + 23 + "px";
                        elem.style.animation = "Up 0.3s infinite"
                        elem.style.top = y - 2 + 'px';
                        $('.progress')[0].style.top = py - 2 + 'px';
                        elem.style.backgroundImage = "url('./Source/Pic/Up0.png')";
                        clearInterval(id2);
                    }
                } else {
                    var id2 = setInterval(frame2, 0.3);
                    elem.style.animation = "Up 0.3s infinite"
                    elem.style.backgroundImage = "url('./Source/Pic/Up0.png')";
                    clearInterval(id2);
                }
                if (checkColli2(tg)) {
                    if (Math.floor((Math.random() * 50) + 1) == 5) {
                        location.replace("Battle.html");
                        localStorage.setItem("face", "url('./Source/Pic/Up0.png')");
                        localStorage.setItem("route101Xproperty", elem.style.left);
                        localStorage.setItem("route101Yproperty", elem.style.top);
                        localStorage.setItem("Health", Health1);
                        localStorage.setItem("ChineseScore",ChineseScore1);
                        localStorage.setItem("ScienceScore",ScienceScore1);
                        localStorage.setItem("MathScore",MathScore1);
                    }
                }
            }
            break;
        case 68:
            if (!menuOn) {
                var x = parseInt(elem.style.left, 10);
                for (var i = 0; i < paddleHeight.length; i++) {
                    var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 25 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 25) {
                        t[i] = true;
                    } else {
                        t[i] = false;
                    }
                }
                for (var i = 0; i < grassclass.length; i++) {
                    var obstinner = $(grassclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 25 || rect.top >= obstinner.top + parseInt($(grassclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(grassclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 25) {
                        tg[i] = false;
                    } else {
                        tg[i] = true;
                    }
                }
                if (checkColli()) {
                    var id3 = setInterval(frame3, 0.3);

                    function frame3() {
                        $('.progress')[0].style.left = elemx + 2 + "px";
                        elem.style.animation = "right 0.3s infinite"
                        elem.style.left = x + 2 + 'px';
                        elem.style.backgroundImage = "url('./Source/Pic/right0.png')";
                        clearInterval(id3);
                    }
                } else {
                    var id3 = setInterval(frame3, 0.3);
                    elem.style.animation = "right 0.3s infinite"
                    elem.style.backgroundImage = "url('./Source/Pic/right0.png')";
                    clearInterval(id3);
                }
                if (checkColli2(tg)) {
                    if (Math.floor((Math.random() * 50) + 1) == 5) {
                        location.replace("Battle.html");
                        localStorage.setItem("face", "url('./Source/Pic/right0.png')");
                        localStorage.setItem("route101Xproperty", elem.style.left);
                        localStorage.setItem("route101Yproperty", elem.style.top);
                        localStorage.setItem("Health", Health1);
                        localStorage.setItem("ChineseScore",ChineseScore1);
                        localStorage.setItem("ScienceScore",ScienceScore1);
                        localStorage.setItem("MathScore",MathScore1);
                    }
                }
            }
            break;
        case 83:
            if (!menuOn) {
                var py = parseInt($('.progress')[0].style.top, 10);
                var y = parseInt(elem.style.top, 10);
                for (var i = 0; i < paddleHeight.length; i++) {
                    var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 20 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 30) {
                        t[i] = true;
                    } else {
                        t[i] = false;
                    }
                }
                for (var i = 0; i < transport.length; i++) {
                    var obstinner = $(transport[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 20 || rect.top >= obstinner.top + parseInt($(transport[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(transport[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 30) {
                        ts[i] = false;
                    } else {
                        ts[i] = true;
                    }
                }
                for (var i = 0; i < grassclass.length; i++) {
                    var obstinner = $(grassclass[i])[0].getBoundingClientRect();
                    if (rect.left <= obstinner.left - 20 || rect.top >= obstinner.top + parseInt($(grassclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(grassclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 30) {
                        tg[i] = false;
                    } else {
                        tg[i] = true;
                    }
                }
                if (checkColli()) {
                    window.scrollBy(0, 2);
                    var id4 = setInterval(frame4, 0.3);

                    function frame4() {
                        $('.progress')[0].style.top = elemy + 27 + "px";
                        elem.style.animation = "Front 0.3s infinite"
                        elem.style.top = y + 2 + 'px';
                        $('.progress')[0].style.top = py + 2 + 'px';
                        elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                        clearInterval(id4);
                    }
                    if (ts[0]) {
                        location.replace("RPG1.html");
                        localStorage.setItem("route101Xproperty", elem.style.left);
                        localStorage.setItem("face", "url('./Source/Pic/Front0.png')");
                        localStorage.setItem("route101Yproperty", elem.style.top);
                        localStorage.setItem("Score", Score);
                    }
                } else {
                    var id4 = setInterval(frame4, 0.3);
                    elem.style.animation = "Front 0.3s infinite"
                    elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                    clearInterval(id4);
                }
                if (checkColli2(tg)) {
                    if (Math.floor((Math.random() * 50) + 1) == 5) {
                        location.replace("Battle.html");
                        localStorage.setItem("route101Xproperty", elem.style.left);
                        localStorage.setItem("route101Yproperty", elem.style.top);
                        localStorage.setItem("Health", Health1);
                        localStorage.setItem("ChineseScore",ChineseScore1);
                        localStorage.setItem("ScienceScore",ScienceScore1);
                        localStorage.setItem("MathScore",MathScore1);
                    }
                }
            }
            break;
        case 27:
            localStorage.clear();
            break;
        case 81: //Q
            if ($('.sidenav')[0].style.width == "250px") {
                $('.sidenav')[0].style.width = '0px';
                menuOn = false;
            } else {
                $('.sidenav')[0].style.width = '250px';
                menuOn = true;
            }
            break;
        }
    }

    function keyupListener(e) {
        elem.style.animation = "";
    }
});