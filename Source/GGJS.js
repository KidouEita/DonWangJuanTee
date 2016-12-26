$(document).ready(function () {
    var menuOn = false;
    var Enter = false;
    $(".back").addClass('left').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
        Enter = true;
    });
    $('#index').keydown(keyListener);

    function keyListener(e) {
        if (e.keyCode == 13 && Enter) {
            location.replace("Start.html");
            localStorage.clear();
        }
    }
});