$(document).ready(function () {
    var Score;
    var obstclass = ["#obst1", "#obst2", "#obst3", "#obst4", "#obst5", "#obst6", "#obst7", "#obst8", "#obst9", "#obst10", "#obst11", "#obst12"];
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
    if (!localStorage.getItem("RPG1Xproperty")) {
        elem.style.left = 90 + "px";
        elem.style.top = 125 + "px";
    }
    else {
        elem.style.left = localStorage.getItem("RPG1Xproperty");
        elem.style.top = localStorage.getItem("RPG1Yproperty");
    }
    if (!localStorage.getItem("Score")) {
        localStorage.setItem("Score", 100);
    }
    else{
        Score=localStorage.getItem("Score");
    }
    
    var paddleX = [82, 225, 211, 0, 0, 226, 353, 0, 290, 80, 208, 0];
    var paddleY = [60, 59, 154, 0, 22, 0, 23, 309, 307, 182, 263, 307];
    var paddleWidth = [76, 76, 108, 190, 33, 157, 33, 95, 95, 80, 100, 383];
    var paddleHeight = [61, 61, 65, 25, 295, 25, 295, 10, 10, 5, 5, 10];
    var transX = [193];
    var transY = [0];
    var transWidth = [30];
    var transHeight = [10];
    for (var i in obstclass) {
        $(obstclass[i])[0].style.width = paddleWidth[i] + "px";
        $(obstclass[i])[0].style.height = paddleHeight[i] + "px";
        $(obstclass[i])[0].style.top = paddleY[i] + "px";
        $(obstclass[i])[0].style.left = paddleX[i] + "px";
    }
    for (var i in transport) {
        $(transport[i])[0].style.width = transWidth[i] + "px";
        $(transport[i])[0].style.height = transHeight[i] + "px";
        $(transport[i])[0].style.top = transY[i] + "px";
        $(transport[i])[0].style.left = transX[i] + "px";
    }
    var t = [false, false, false, false, false, false, false, false, false, false, false, false];
    var ts = [false];

    function checkColli(tl) {
        this.checkNonCollision = true;
        for (var i = 0; i < paddleHeight.length; i++) {
            if (tl[i] == false) checkNonCollision = false;
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
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) || rect.top <= obstinner.top - 30) {
                    t[i] = true;
                }
                else {
                    t[i] = false;
                }
            }
            if (checkColli(t)) {
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
            for (var i = 0; i < transport.length; i++) {
                var obstinner = $(transport[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(transport[i])[0].style.height, 10) - 5 || rect.left >= obstinner.left + parseInt($(transport[i])[0].style.width, 10) + 10 || rect.top <= obstinner.top) {
                    ts[i] = false;
                }
                else {
                    ts[i] = true;
                }
            }
            if (checkColli(t)) {
                var id2 = setInterval(frame2, 0.3);

                function frame2() {
                    elem.style.animation = "Up 0.3s infinite"
                    elem.style.top = y - 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/Up0.png')";
                    clearInterval(id2);
                }
                if (ts[0]) {
                    location.replace("route101.html");
                    localStorage.setItem("RPG1Xproperty", elem.style.left);
                    localStorage.setItem("RPG1Yproperty", "10px");
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
            if (checkColli(t)) {
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
            if (checkColli(t)) {
                var id4 = setInterval(frame4, 0.3);

                function frame4() {
                    elem.style.animation = "Front 0.3s infinite"
                    elem.style.top = y + 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                    clearInterval(id4);
                }
            }
            else {
                var id4 = setInterval(frame4, 0.3);
                elem.style.animation = "Front 0.3s infinite"
                elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                clearInterval(id4);
            }
            break;
        case 27:
            localStorage.removeItem("RPG1Xproperty");
            localStorage.removeItem("RPG1Yproperty");
            localStorage.removeItem("Score");
            break;
        }
    }

    function keyupListener(e) {
        elem.style.animation = "";
    }
});