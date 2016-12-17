$(document).ready(function () {
    $('#index').keydown(keyListener);
    $('#index').keyup(keyupListener);
    
    var elem = $("#person")[0];
    elem.style.top = '100px';
    elem.style.left = '100px';
    var canvas = $('#myCanvas')[0];
    var ctx = canvas.getContext('2d');
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = 200
    
    function drawPaddle(a,b,c,d) {
        ctx.beginPath();
        ctx.rect(a,b,c,d);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    drawPaddle(200,300,75,10);

    function keyListener(e) {
        switch (e.keyCode) {
        case 37:
            var rect = $("#person")[0].getBoundingClientRect();
            p1.innerHTML = rect.top;
            var x = parseInt(elem.style.left, 10);
            if (rect.left <= paddleX || rect.top >= 300 || rect.left >= paddleX + paddleWidth + 10 || rect.top <= 280) {
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
            var rect = $("#person")[0].getBoundingClientRect();
            var y = parseInt(elem.style.top, 10);
            var rect = $("#person")[0].getBoundingClientRect();
            if (rect.left <= paddleX || rect.top >= 310 || rect.left >= paddleX + paddleWidth || rect.top <= 280) {
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
            var rect = $("#person")[0].getBoundingClientRect();
            if (rect.left <= paddleX - 10 || rect.top >= 300 || rect.left >= paddleX + paddleWidth || rect.top < 280) {
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
            var rect = $("#person")[0].getBoundingClientRect();
            var y = parseInt(elem.style.top, 10);
            if (rect.left <= paddleX || rect.top >= 300 || rect.left >= paddleX + paddleWidth || rect.top <= 270) {
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