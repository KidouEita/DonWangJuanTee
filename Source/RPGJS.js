$(document).ready(function () {
    var obstclass = ["#obst1", "#obst2", "#obst3","#obst4","#obst5","#obst6","#obst7","#obst8","#obst9","#obst10","#obst11","#obst12"];
    $('#open').click(function () {
        $('.sidenav')[0].style.width = '250px';
    });
    $('.closebtn').click(function () {
        $('.sidenav')[0].style.width = '0px';
    });
    $('#about').click(function () {
        if($('#editor')[0].style.display!="none"){
            $('#editor').fadeOut();
        }
        else{
             $('#editor').fadeIn();
        }
    });
    
    $('#index').keydown(keyListener);
    $('#index').keyup(keyupListener);
    var elem = $("#person")[0];
    elem.style.top = '125px';
    elem.style.left = '90px';
    var paddleX = [82, 225, 211,0,0,226,353,0,290,80,208,0];
    var paddleY = [60, 59, 154,0,22,0,23,309,307,182,263,307];
    var paddleWidth = [76, 76, 108,190,33,157,33,95,95,80,100,383];
    var paddleHeight = [61, 61, 65,25,295,25,295,10,10,5,5,10];
    for (var i in obstclass) {
        $(obstclass[i])[0].style.width = paddleWidth[i] + "px";
        $(obstclass[i])[0].style.height = paddleHeight[i] + "px";
        $(obstclass[i])[0].style.top = paddleY[i] + "px";
        $(obstclass[i])[0].style.left = paddleX[i] + "px";
    }
    var t = [false, false, false,false,false,false,false,false,false,false,false,false];

    function checkColli() {
        this.checkNonCollision = true;
        for (var i = 0; i < paddleHeight.length; i++) {
            if (t[i] == false) checkNonCollision = false;
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
                } else {
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
            } else {
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
                } else {
                    t[i] = false;
                }
            }
            if (checkColli()) {
                var id2 = setInterval(frame2, 0.3);

                function frame2() {
                    elem.style.animation = "Up 0.3s infinite"
                    elem.style.top = y - 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/Up0.png')";
                    clearInterval(id2);
                }
            } else {
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
                } else {
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
            } else {
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
                } else {
                    t[i] = false;
                }
            }

            if (checkColli()) {
                var id4 = setInterval(frame4, 0.3);

                function frame4() {
                    elem.style.animation = "Front 0.3s infinite"
                    elem.style.top = y + 2 + 'px';
                    elem.style.backgroundImage = "url('./Source/Pic/Front0.png')";
                    clearInterval(id4);
                }
            } else {
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