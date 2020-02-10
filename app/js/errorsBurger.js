'use scrict';
document.getElementById('enterBurgerImg').addEventListener('click', function () {
    showEnterBurgerMenu();
});
document.getElementById('enterCloseImg').addEventListener('click', function () {
    hideEnterBurgerMenu();
});

function showEnterBurgerMenu() {
    $('.enterBurgerMenuWrap').css('background', '#262626');
    $('#enterBurgerBody').slideToggle('slow', function () {
        $('#enterBurgerImg').hide();
        $('#enterCloseImg').show();
        changeLogoToWhite();
    });
}

function hideEnterBurgerMenu() {
    $('#enterBurgerBody').slideToggle("slow", function () {
        $('#enterBurgerImg').show();
        $('#enterCloseImg').hide();
        $('.enterBurgerMenuWrap').css({
            'background': 'transparent'
        });
        changeLogoToBlack();
    });
}

function changeLogoToWhite() {
    let imgNode = document.getElementById('enterBurgerMenuLogo');
    let attr = '/img/finalLogo1.2.svg';
    imgNode.setAttribute('src', attr);
}
function changeLogoToBlack() {
    let imgNode = document.getElementById('enterBurgerMenuLogo');
    let attr = '/img/finalLogo1.svg';
    imgNode.setAttribute('src', attr);
}