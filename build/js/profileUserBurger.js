'use scrict';

document.getElementById('profileBurgerMenuOpen').addEventListener('click', function () {
    $('.profile__burgerMenu--body').slideDown('1500', function () {
        $('#profileBurgerMenuOpen').hide();
        $('#profileBurgerMenuClose').show();
    });
});

document.getElementById('profileBurgerMenuClose').addEventListener('click', function () {
    $('.profile__burgerMenu--body').slideUp('1500', function () {
        $('#profileBurgerMenuOpen').show();
        $('#profileBurgerMenuClose').hide();
    });
});