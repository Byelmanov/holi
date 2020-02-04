'use scrict';

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

let registrationForm = document.forms["registerForm"];
let registerEmailInput = document.getElementById('registerEmail');
let registerPasswordInput = document.getElementById('registerPassword');

registerEmailInput.addEventListener('focus', function () {
    if (($('#registerEmailLabel').hasClass('register__emailLabel--small')) == false) {
        let textToShowAboveInput = document.getElementById('registerTextEmail');
        textToShowAboveInput.style.visibility = 'visible';
    }

    this.setAttribute('placeholder', '');
    document.getElementById('registerCapture').style.display = 'block';
    document.getElementById('registerWarningEmail').style.display = 'none';
});

registerEmailInput.addEventListener('blur', function () {

    if (($('#registerEmailLabel').hasClass('register__emailLabel--small')) == false) {
        let textToShowAboveInput = document.getElementById('registerTextEmail');
        textToShowAboveInput.style.visibility = 'hidden';
    }

    this.setAttribute('placeholder', 'Email');
    let valueFromInput = this.value;
    if (checkIsEmpty(valueFromInput) && checkEmail(valueFromInput)) {

    } else {
        document.getElementById('registerCapture').style.display = 'none';
        document.getElementById('registerWarningEmail').style.display = 'block';
    }
});

document.getElementById('registerNextButton').addEventListener('click', function () {
    let valueFromInput = registerEmailInput.value;
    if (checkIsEmpty(valueFromInput) && checkEmail(valueFromInput)) {
        let form = $('#registartionForm');
        form.animate({
            'padding-top': '60px'
        }, 1000);
        $('#registerEmailLabel').animate({
            'width': '60%'
        }, 1000);
        $('#registerEmailLabel').addClass('register__emailLabel--small');
        document.getElementById('registerTextEmail').style.display = 'none';
        $('#registerPasswordLabel').fadeIn(1500);
    } else {
        document.getElementById('registerCapture').style.display = 'none';
        document.getElementById('registerWarningEmail').style.display = 'block';
    }
});

registerPasswordInput.addEventListener('focus', function () {
    let textToShow = document.getElementById('registerTextPassword');
    textToShow.style.visibility = 'visible';
    this.setAttribute('placeholder', '');
    document.getElementById('registerWarningPassword').style.display = 'none';
    $('.register__wrapUnderInput--password').css({
        'justify-content': 'flex-end'
    });
});
registerPasswordInput.addEventListener('blur', function () {
    // let textToShow = document.getElementById('registerTextPassword');
    // textToShow.style.visibility = 'hidden';

    this.setAttribute('placeholder', 'Password');
    let valueFromInput = this.value;

    if (checkIsEmpty(valueFromInput)) {
        $('#registerSubmit').css({
            'background-color': '#F9E547'
        });
        $('#registerPasswordLabel').addClass('register__passwordLabel--small');
    } else {
        document.getElementById('registerWarningPassword').style.display = 'block';
        $('.register__wrapUnderInput--password').css({
            'justify-content': 'space-between'
        });
    }
});

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let emailValue = registerEmailInput.value;
    let passwordValue = registerPasswordInput.value;
    let error = true;
    if (!checkIsEmpty(emailValue) && !checkEmail(emailValue)) {
        document.getElementById('registerWarningEmail').style.display = 'block';
        $('.register__wrapUnderInput--email').css({
            'visibility': 'visible'
        })
        error = false;
    }
    if (!checkIsEmpty(passwordValue)) {
        document.getElementById('registerWarningPassword').style.display = 'block';
        $('.register__wrapUnderInput--password').css({
            'justify-content': 'space-between'
        });
        error = false;
    }

    if (error) {
        this.submit();
    }

});

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