var menuOn = false;
$(document).ready(function () {
    var Enter = false;
    var Page = "RPG1.html";
    $('#index').keydown(keyListener);
    $(".progress").addClass('left').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
        Enter = true;
        $('.progress-bar')[0].style.width = 100 + "%";
        $('.glyphicon').fadeIn();
    });
    if (!localStorage.getItem("WindowNow")) {
        Page="RPG1.html";
    }
    else {
        Page = localStorage.getItem("WindowNow");
    }

    function keyListener(e) {
        if (e.keyCode == 13 && Enter) {
            location.replace(Page);
        }
    }
});