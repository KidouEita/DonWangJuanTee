var menuOn = false;
$(document).ready(function () {
    var Enter=false;
    $('#index').keydown(keyListener);
    $(".progress").addClass('left').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
        Enter=true;
        $('.progress-bar')[0].style.width = 100+ "%";
    });

    function keyListener(e) {
        if (e.keyCode == 13&&Enter) {
                location.replace("RPG1.html");
        }
    }
});