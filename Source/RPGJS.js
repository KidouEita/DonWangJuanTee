$(document).ready(function () {
    var obstclass = ["#obst1", "#obst2", "#obst3"];
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
    elem.style.top = '25px';
    elem.style.left = '25px';
    var paddleX = [200, 30, 7];
    var paddleY = [300, 100, 287];
    var paddleWidth = [75, 150, 135];
    var paddleHeight = [10, 150, 135];
    for (var i in obstclass) {
        $(obstclass[i])[0].style.width = paddleWidth[i] + "px";
        $(obstclass[i])[0].style.height = paddleHeight[i] + "px";
        $(obstclass[i])[0].style.top = paddleY[i] + "px";
        $(obstclass[i])[0].style.left = paddleX[i] + "px";
    }
    var t = [false, false, false];

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
        case 37:
            var x = parseInt(elem.style.left, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 10 || rect.top <= obstinner.top - 10) {
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
        case 38:
            var y = parseInt(elem.style.top, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) + 10 || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 20 || rect.top <= obstinner.top - 10) {
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
            document.getElementById("p1").innerHTML = t[0];
            document.getElementById("p2").innerHTML = t[1];
            break;
        case 39:
            var x = parseInt(elem.style.left, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 25 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 20 || rect.top <= obstinner.top - 10) {
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
        case 40:
            var y = parseInt(elem.style.top, 10);
            for (var i = 0; i < paddleHeight.length; i++) {
                var obstinner = $(obstclass[i])[0].getBoundingClientRect();
                if (rect.left <= obstinner.left - 10 || rect.top >= obstinner.top + parseInt($(obstclass[i])[0].style.height, 10) || rect.left >= obstinner.left + parseInt($(obstclass[i])[0].style.width, 10) - 20 || rect.top <= obstinner.top - 20) {
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