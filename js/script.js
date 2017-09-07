$(document).ready(function () {
    $('.fa-twitter').hover(function () {
        $('#profile-pic').css('transform','rotate(-30deg)');
    }, function () {
        $('#profile-pic').css('transform','rotate(0deg)');
    });

    $('.fa-github').hover(function () {
        $('#profile-pic').css('transform', 'rotate(30deg)');        
    }, function () {
        $('#profile-pic').css('transform', 'rotate(0deg)');        
    });

    $('.fa-linkedin').hover(function () {
        $('#profile-pic').css('transform', 'rotateY(180deg)');        
    }, function () {
        $('#profile-pic').css('transform', 'rotate(0deg)');
    });
});