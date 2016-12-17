$(document).ready(function() {
    $('#index').keydown(keyListener);
    $('#index').keyup(keyupListener);
    var elem = $("#person")[0];
    elem.style.top = '100px';
    elem.style.left = '100px';
    var canvas = $('#myCanvas')[0];
    var ctx = canvas.getContext('2d');
    var ctx2 = canvas.getContext('2d');

    var paddleHeight = [10, 150];
    var paddleWidth = [75, 150];
    var paddleX = [200, 30];
    var paddleY = [300, 100];
    var t = [false, false];

    /*
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = 200;
    var paddleY = 300;
    var paddleHeight2 = 150;
    var paddleWidth2 = 150;
    var paddleX2 = 30;
    var paddleY2 = 100;
    */


    function Shape(x, y, w, h, fill) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }
    var obst = [];

    function drawPaddle() {
        for (var i = 0; i < paddleHeight.length; i++) obst.push(new Shape(paddleX[i], paddleY[i], paddleWidth[i], paddleHeight[i]));

        for (var i in obst) {
            oRec = obst[i];
            ctx.fillStyle = oRec.fill;
            ctx.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
        }
    }
    drawPaddle();

    function checkColli() {
        this.checkNonCollision = true;
        for (var i = 0; i < paddleHeight.length; i++) {
            if (t[i] == false) checkNonCollision = false;
        }
        return checkNonCollision;
    }

    function keyListener(e) {
        var rect = $("#person")[0].getBoundingClientRect();
        for (var i in obst) t[i] = false;
        switch (e.keyCode) {
            case 37:
                var x = parseInt(elem.style.left, 10);
                for (var i = 0; i < paddleHeight.length; i++) {
                    if (rect.left <= paddleX[i] - 10 || rect.top >= paddleY[i] + paddleHeight[i] || rect.left >= paddleX[i] + paddleWidth[i] + 10 || rect.top <= paddleY[i] - 10) {
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
                    if (rect.left <= paddleX[i] - 10 || rect.top >= paddleY[i] + paddleHeight[i] +10|| rect.left >= paddleX[i] + paddleWidth[i] || rect.top <= paddleY[i] - 10) {
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
            case 39:
                var x = parseInt(elem.style.left, 10);
                for (var i = 0; i < paddleHeight.length; i++) {
                    if (rect.left <= paddleX[i] - 20 || rect.top >= paddleY[i] + paddleHeight[i] || rect.left >= paddleX[i] + paddleWidth[i] || rect.top <= paddleY[i] - 10) {
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
                    if (rect.left <= paddleX[i] - 10 || rect.top >= paddleY[i] + paddleHeight[i] || rect.left >= paddleX[i] + paddleWidth[i]|| rect.top <= paddleY[i] - 20) {
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