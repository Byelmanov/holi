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
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (regExp.test(str)) {
        return true;
    } else {
        return false;
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
    let submitButton = document.getElementById('profileEditEmailSubmitButton');
    if (checkIsEmpty(emailValue) && checkEmail(emailValue)) {
        submitButton.style.background = '#F9E547';
    } else {
        submitButton.style.background = '#FDF7CB';
    }
});


window.addEventListener('load', checkIsCartVisible);

function checkIsCartVisible() {
    let cart = document.getElementById('cartMenu');
    if (cart) {
        showButtonsIfCartVisible();
        hideCartInPaymentSection();
        document.getElementById('cartMenuTrash').addEventListener('click', function () {
            $('#cartMenu').slideUp('2000', function () {
                $('.cardCanseled').fadeIn('2000');
                $('.cardCanseled').css({
                    display: 'flex'
                });
            });
            document.getElementById('profileSaveWithoutBuying').style.display = 'none';
            document.getElementById('profileSaveAndBuy').style.display = 'none';
            document.getElementById('profileSave').style.display = 'block';
        });

        document.getElementById('cartCanseledOK').addEventListener('click', function () {
            $('.cardCanseled').hide();
        });

    } else {
        hideButtonsIfCartVisible();
        showCartInPaymentSection();
    }
}

function showButtonsIfCartVisible() {
    let saveWithoutBuying = document.getElementById('profileSaveWithoutBuying');
    let save = document.getElementById('profileSave');
    let saveAndBuy = document.getElementById('profileSaveAndBuy');
    save.style.display = 'none';
    saveWithoutBuying.style.display = 'block';
    saveAndBuy.style.display = 'block';
}

function hideButtonsIfCartVisible() {
    let saveWithoutBuying = document.getElementById('profileSaveWithoutBuying');
    let save = document.getElementById('profileSave');
    let saveAndBuy = document.getElementById('profileSaveAndBuy');
    save.style.display = 'block';
    saveWithoutBuying.style.display = 'none';
    saveAndBuy.style.display = 'none';
}

function hideCartInPaymentSection() {
    document.getElementById('profileItemPaymentCart').style.display = 'none';
    document.getElementById('profileItemPaymentWarningAndPrice').style.display = 'block';
}
function showCartInPaymentSection() {
    document.getElementById('profileItemPaymentCart').style.display = 'flex';
    document.getElementById('profileItemPaymentWarningAndPrice').style.display = 'none';
}

let firstNameInput = document.getElementById('profileFirstName');
let secondNameInput = document.getElementById('profileLastName');
let phoneNumberInput = document.getElementById('profilePhone');
let skypeInput = document.getElementById('profileSkype');

let firstNameStar = document.getElementById('profileFirstNameStar');
let secondNameStar = document.getElementById('profileLastNameStar');
let phoneNumberStar = document.getElementById('profilePhoneStar');
let skypeStar = document.getElementById('profileSkypeStar');

firstNameInput.addEventListener('input', function () {
    let firstName = this.value;
    if (checkIsEmpty(firstName)) {
        firstNameStar.style.display = 'none';
    } else {
        firstNameStar.style.display = 'block';
    }
    checkAllInputsAreEmpty();
});
secondNameInput.addEventListener('input', function () {
    let secondName = this.value;
    if (checkIsEmpty(secondName)) {
        secondNameStar.style.display = 'none';
    } else {
        secondNameStar.style.display = 'block';
    }
    checkAllInputsAreEmpty()
});
phoneNumberInput.addEventListener('input', function () {
    let phoneNumber = this.value;
    if (checkIsEmpty(phoneNumber)) {
        phoneNumberStar.style.display = 'none';
    } else {
        phoneNumberStar.style.display = 'block';
    }
    checkAllInputsAreEmpty();
});
skypeInput.addEventListener('input', function () {
    let skype = this.value;
    if (checkIsEmpty(skype)) {
        skypeStar.style.display = 'none';
    } else {
        skypeStar.style.display = 'block';
    }
    checkAllInputsAreEmpty();
});

function checkAllInputsAreEmpty() {
    let firstName = firstNameInput.value;
    let secondName = secondNameInput.value;
    let phoneNumber = phoneNumberInput.value;
    let skype = skypeInput.value;

    let warning = document.getElementById('profilePaymentWarning');
    let done = document.getElementById('profilePaymentWarningDone');

    if (checkIsEmpty(firstName) && checkIsEmpty(secondName) && checkIsEmpty(phoneNumber) && checkIsEmpty(skype)) {
        warning.style.display = 'none';
        done.style.display = 'block';
    } else {
        warning.style.display = 'block';
        done.style.display = 'none';
    }


}