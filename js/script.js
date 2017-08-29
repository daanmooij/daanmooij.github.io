$(document).ready(function () {
    $('.fa-twitter').hover(function () {
        $('#profile-pic').addClass('twitter');
    }, function () {
        $('#profile-pic').removeClass('twitter');
    });

    $('.fa-github').hover(function () {
        $('#profile-pic').addClass('github');
    }, function () {
        $('#profile-pic').removeClass('github');
    });

    $('.fa-linkedin').hover(function () {
        $('#profile-pic').addClass('linkedin');
    }, function () {
        $('#profile-pic').removeClass('linkedin');
    });
});