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
    if (str == null || str == undefined || str == '' || strLength < 8 || strLength > 128) {
        return false;
    } else {
        return true;
    }
}
function checkEmail(str) {
    str = str.toString();
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (regExp.test(str)) {
        return true;
    } else {
        return false;
    }
}

let passwordForm = document.forms['setNewPassword'];

passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    let passwordRepeat = document.getElementById('passwordRepeat').value;
    let email = document.getElementById('email').value;

    if (password === passwordRepeat && checkPassword(password) && checkEmail(email)) {
        this.submit();
    }

});

document.getElementById('password').addEventListener('input', function () {
    let password = this.value;
    let capture = document.getElementById('setNewPasswordCaptureLength');
    if (checkPassword(password)) {
        capture.style.display = 'none';
    } else {
        capture.style.display = 'block';
    }
});

document.getElementById('passwordRepeat').addEventListener('input', function () {
    let password = document.getElementById('password').value;
    let passwordRepeat = this.value;
    let email = document.getElementById('email').value;

    let submitButton = document.getElementById('setNewPasswordSubmit');
    let tick = document.getElementById('setNewPasswordTick');
    let cross = document.getElementById('setNewPasswordCross');
    let captureTextToShow = document.getElementById('setNewPasswordCapture');

    if (password === passwordRepeat && checkEmail(email) && checkPassword(password)) {
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

let successAlert = document.getElementById('successAlertOK');
if (successAlert) {
    successAlert.addEventListener('click', function () {
        $('#successAlert').fadeOut('1000');
    });
}

let errorAlert = document.getElementById('errorAlertOK');
if (errorAlert) {
    errorAlert.addEventListener('click', function () {
        $('#errorAlert').fadeOut('1000');
    });
}