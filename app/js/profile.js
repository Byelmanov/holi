document.getElementById('cartMenuTrash').addEventListener('click', function () {
    $('#cartMenu').slideUp('2000', function () {
        $('.cardCanseled').fadeIn('2000');
        $('.cardCanseled').css({
            display: 'flex'
        });
    });
    document.getElementById('profileSaveWithoutBuying').style.display = 'none';
    document.getElementById('profileSaveAndBuy').style.display = 'none';
});

document.getElementById('cartCanseledOK').addEventListener('click', function () {
    $('.cardCanseled').hide();
});

let saveForm = document.forms['profileUserContacts'];
saveForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let firstName = document.getElementById('profileFirstName').value;
    let lastName = document.getElementById('profileLastName').value;
    let phoneNumber = document.getElementById('profilePhone').value;
    let skype = document.getElementById('profileSkype').value;

    let error = true;

    if (checkIsEmpty(firstName) && checkIsEmpty(lastName) && checkIsEmpty(phoneNumber) && checkIsEmpty(skype)) {
        error = true;
    } else {
        error = false;
    }

    if (error) {
        saveForm.submit();
    }

});

function checkIsEmpty(str) {
    if (str == null || str == undefined || str == '') {
        return false;
    } else {
        return true;
    }
}

function checkPassword(str) {
    let strLength = str.length;
    if (str == null || str == undefined || str == '' || strLength < 8) {
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

document.getElementById('profileEditPasswordButton').addEventListener('click', function () {
    document.getElementById('profileEditPasswordWindow').style.display = 'flex';
});

document.getElementById('profileEditPasswordCross').addEventListener('click', function () {
    document.getElementById('profileEditPasswordWindow').style.display = 'none';
});

document.getElementById('profileEditPasswordInputRepeat').addEventListener('input', function () {
    let password = document.getElementById('profileEditPasswordInput').value;
    let passwordRepeat = this.value;

    let tick = document.getElementById('profileEditPasswordTick');
    let cross = document.getElementById('profileEditPasswordCrossPassword');
    let textToShow = document.getElementById('profileEditPasswordCapture');
    let submitButton = document.getElementById('profileEditPasswordSubmit');

    if (password === passwordRepeat) {
        cross.style.display = 'none';
        textToShow.style.display = 'none';
        tick.style.display = 'block';
        submitButton.style.background = '#F9E547';
    } else {
        cross.style.display = 'block';
        textToShow.style.display = 'block';
        tick.style.display = 'none';
        submitButton.style.background = '#FDF7CB';
    }
});

let editPasswordForm = document.forms['profileEditPasswordForm'];

editPasswordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let password = document.getElementById('profileEditPasswordInput').value;
    let passwordRepeat = document.getElementById('profileEditPasswordInputRepeat').value;

    if (password === passwordRepeat && checkPassword(password)) {
        this.submit();
    }
});

let editEmailForm = document.forms['profileEditEmailForm'];

editEmailForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('profileEditEmailInput').value;
    if (checkIsEmpty(email) && checkEmail(email)) {
        this.submit();
    }
});

document.getElementById('profileEditEmailButton').addEventListener('click', function () {
    document.getElementById('profileEditEmailWindow').style.display = 'flex';
});

document.getElementById('profileEditEmailCross').addEventListener('click', function () {
    document.getElementById('profileEditEmailWindow').style.display = 'none';
});

document.getElementById('profileEditEmailInput').addEventListener('input', function () {
    let emailValue = this.value;
    alert('input');
    let submitButton = document.getElementById('profileEditEmailSubmitButton');
    if (checkIsEmpty(emailValue) && checkEmail(emailValue)) {
        submitButton.style.background = '#F9E547';
    } else {
        submitButton.style.background = '#FDF7CB';
    }
});