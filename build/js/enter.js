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


function checkIsEmpty(str) {
    if (str == null || str == undefined || str == '') {
        return false;
    } else {
        return true;
    }
}

function checkEmail(str) {
    str = str.toString();
    if (str.indexOf('@') == -1) {
        return false;
    } else {
        return true;
    }
}

let enterForm = document.forms["enterForm"];
enterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('enterEmail').value;
    let password = document.getElementById('enterPassword').value;
    if (checkIsEmpty(email) && checkIsEmpty(password) && checkEmail(email)) {
        enterForm.submit();
    }
});