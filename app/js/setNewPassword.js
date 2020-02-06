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

function checkPassword(str) {
    let strLength = str.length;
    if (str == null || str == undefined || str == '' || strLength < 8) {
        return false;
    } else {
        return true;
    }
}

let passwordForm = document.forms['setNewPassword'];

passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    let passwordRepeat = document.getElementById('passwordRepeat').value;

    if (password === passwordRepeat && checkPassword(password)) {
        this.submit();
    }

});

document.getElementById('passwordRepeat').addEventListener('input', function () {
    let password = document.getElementById('password').value;
    let passwordRepeat = this.value;

    let submitButton = document.getElementById('setNewPasswordSubmit');
    let tick = document.getElementById('setNewPasswordTick');
    let cross = document.getElementById('setNewPasswordCross');
    let captureTextToShow = document.getElementById('setNewPasswordCapture');

    if (password === passwordRepeat) {
        cross.style.display = 'none';
        captureTextToShow.style.display = 'none';
        tick.style.display = 'block';
        submitButton.style.background = '#F9E547';
    } else {
        cross.style.display = 'block';
        captureTextToShow.style.display = 'block';
        tick.style.display = 'none';
        submitButton.style.background = '#FDF7CB';
    }

});