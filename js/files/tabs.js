function openTabs(evt, openTabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTabs).style.display = "block";
    evt.currentTarget.className += " active";
}

// Перебрасываем контент в tab ------------
const tablet = 991.98;
$(document).ready(function () {
    if ($(window).width() < tablet) {
        $('#tab-1').appendTo($('.tab-content-1'));
        $('#tab-2').appendTo($('.tab-content-2'));
        $('#tab-3').appendTo($('.tab-content-3'));
        $('#tab-4').appendTo($('.tab-content-4'));
        $('.tab-content').css('display', 'none');
    }
})