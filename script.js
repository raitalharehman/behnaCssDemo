// Keys Disable for inspect
$(document).keydown(function (event) {

    if (event.keyCode === 123 || event.keyCode === 116 || event.ctrlKey && event.shiftKey && event.keyCode === 73
        || event.ctrlKey && event.shiftKey && event.keyCode === 105 || event.ctrlKey && event.keyCode === 115
        || event.ctrlKey && event.keyCode === 83 || event.ctrlKey && event.keyCode === 85
        || event.ctrlKey && event.keyCode === 117 || event.ctrlKey && event.keyCode === 82
        || event.ctrlKey && event.keyCode === 114) {
        return false;
    }
});
// Right Click Disable
$(document).on("contextmenu", function (e) {
    e.preventDefault();
});
var num = 0;
var animate = ["", "bounce", "flash", "pulse",
    "rubberBand", "shake", "swing", "tada", "wobble", "jello", "bounceIn", "bounceInDown", "bounceInLeft",
    "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp",
    "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig",
    "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig",
    "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX",
    "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft",
    "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight",
    "slideInUp", "slideInDown", "slideInLeft", "slideInRight", "slideOutUp", "slideOutDown", "slideOutLeft",
    "slideOutRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown",
    "zoomOutLeft", "zoomOutRight", "zoomOutUp", "hinge", "jackInTheBox", "rollIn", "rollOut"];

function animation(animate) {

    var target = $("html");

    $(window).keydown(function (e) {
        if (e.keyCode === 0 || e.keyCode === 39 || e.keyCode === 38) {
            e.preventDefault();
            target.removeClass(animate[num]);
            target.addClass(animate[++num] + ' lol');
        }
        else if (e.keyCode === 0 || e.keyCode === 37 || e.keyCode === 40) {
            e.preventDefault();
            if (num === 0) {
                return false
            }
            else {
                target.removeClass(animate[num]);
                target.addClass(animate[--num] + ' lol');
            }
        }
    })
}

animation(animate);