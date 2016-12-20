$(document).ready(function () {
    window.scrollTo(0, 700);
    var obstclass = ["#obst1", "#obst2", "#obst3", "#obst4", "#obst5", "#obst6", "#obst7", "#obst8", "#obst9", "#obst10", "#slope1", "#slope2", "#slope3", "#slope4", "#slope5", "#slope6", "#slope7", "#slope8", "#slope9", "#slope10"];
    /** Slope numbered from bottom to top,from left to right */
    var transport = ["#trans1"];
    $('#open').click(function () {
        $('.sidenav')[0].style.width = '250px';
    });
    $('.closebtn').click(function () {
        $('.sidenav')[0].style.width = '0px';
    });
    $('#about').click(function () {
        if ($('#editor')[0].style.display != "none") {
            $('#editor').fadeOut();
        }
        else {
            $('#editor').fadeIn();
        }
    });
    $('#index').keydown(keyListener);
    $('#index').keyup(keyupListener);
    var elem = $("#person")[0];
    elem.style.top = '610px';
    elem.style.left = localStorage.getItem("RPG1Xproperty");
    var Score=localStorage.getItem("Score");
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
    for (var i in transport) {
        $(transport[i])[0].style.width = transWidth[i] + "px";
        $(transport[i])[0].style.height = transHeight[i] + "px";
        $(transport[i])[0].style.top = transY[i] + "px";
        $(transport[i])[0].style.left = transX[i] + "px";
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

    function checkColli() {
        this.checkNonCollision = true;
        for (var i = 0; i < paddleHeight.length; i++) {
            if (t[i] == false) checkNonCollision = false;
        }
        return checkNonCollision;
    }

    function checkColli2(tl) {
        this.checkNonCollision = false;
        for (var i = 0; i < transport.length; i++) {
            if (tl[i] == true) checkNonCollision = true;
        }
        return checkNonCollision;
    }

    function keyListener(e) {
        var rect = $("#person")[0].getBoundingClientRect();
        for (var i in obstclass) t[i] = false;
        switch (e.keyCode) {
        case 65:
            var x = parseInt(elem.style.left, 10);
            document.getElementById("p1").innerHTML=localStorage.getItem("Score");
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) || rect.top <= obstinner.top - 30) {
                    t[i] = true;
                }
                else {
                    t[i] = false;
                }
            }
            if (checkColli()) {
                var id = setInterval(frame, 0.3);

                function frame() {
                    elem.style.animation = "left 0.3s infinite"
                    elem.style.left = x - 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/left0.png')";
                    clearInterval(id);
                }
            }
            else {
                var id = setInterval(frame, 0.3);
                elem.style.animation = "left 0.3s infinite"
                elem.style.backgroundImage = "url('./Source/Pic/left0.png')";
                clearInterval(id);
            }
            break;
        case 87:
            var y = parseInt(elem.style.top, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) + 5 || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 30) {
                    t[i] = true;
                }
                else {
                    t[i] = false;
                }
            }
            if (checkColli()) {
                window.scrollBy(0, -2);
                var id2 = setInterval(frame2, 0.3);

                function frame2() {
                    elem.style.animation = "Up 0.3s infinite"
                    elem.style.top = y - 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/Up0.png')";
                    clearInterval(id2);
                }
            }
            else {
                var id2 = setInterval(frame2, 0.3);
                elem.style.animation = "Up 0.3s infinite"
                elem.style.backgroundImage = "url('./Source/Pic/Up0.png')";
                clearInterval(id2);
            }
            break;
        case 68:
            var x = parseInt(elem.style.left, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 25 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 30) {
                    t[i] = true;
                }
                else {
                    t[i] = false;
                }
            }
            if (checkColli()) {
                var id3 = setInterval(frame3, 0.3);

                function frame3() {
                    elem.style.animation = "right 0.3s infinite"
                    elem.style.left = x + 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/right0.png')";
                    clearInterval(id3);
                }
            }
            else {
                var id3 = setInterval(frame3, 0.3);
                elem.style.animation = "right 0.3s infinite"
                elem.style.backgroundImage = "url('./Source/Pic/right0.png')";
                clearInterval(id3);
            }
            break;
        case 83:
            var y = parseInt(elem.style.top, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 40) {
                    t[i] = true;
                }
                else {
                    t[i] = false;
                }
            }
            for (var i = 0; i < transport.length; i++) {
                var obstinner = $(transport[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(transport[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(transport[i])[0].style.width, 10) - 7 || rect.top <= obstinner.top - 40) {
                    ts[i] = false;
                }
                else {
                    ts[i] = true;
                }
            }
            if (checkColli()) {
                window.scrollBy(0, 2);
                var id4 = setInterval(frame4, 0.3);

                function frame4() {
                    elem.style.animation = "Front 0.3s infinite"
                    elem.style.top = y + 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                    clearInterval(id4);
                }
                if (ts[0]) {
                            location.replace("RPG1.html");
                            localStorage.setItem("");
                }
            }
            else {
                var id4 = setInterval(frame4, 0.3);
                elem.style.animation = "Front 0.3s infinite"
                elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                clearInterval(id4);
            }
            break;
        }
    }

    function keyupListener(e) {
        elem.style.animation = "";
    }
});