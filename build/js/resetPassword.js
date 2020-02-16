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

let resetPasswordForm = document.forms['resetPassword'];

resetPasswordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let emailValue = document.getElementById('resetPasswordInput').value;
    let error = true;
    if (!(checkIsEmpty(emailValue)) && !(checkEmail(emailValue))) {
        error = false;
    }
    if (error) {
        resetPasswordForm.submit();
    }

});

document.getElementById('successAlertOK').addEventListener('click', function () {
    $('#successAlert').fadeOut('1000');
});

document.getElementById('errorAlertOK').addEventListener('click', function () {
    $('#errorAlert').fadeOut('1000');
});
