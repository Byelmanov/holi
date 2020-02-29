'use scrict';

document.getElementById('profileSaveWithoutBuying').addEventListener('click', function () {
    setDataAttrInHiddenInput(this);
});
document.getElementById('profileSave').addEventListener('click', function () {
    setDataAttrInHiddenInput(this);
});
document.getElementById('profileSaveAndBuy').addEventListener('click', function () {
    setDataAttrInHiddenInput(this);
});

function setDataAttrInHiddenInput(elem) {
    let value = elem.getAttribute("data-action");
    let input = document.getElementById('profileHiddenInput');
    input.setAttribute('value', value);
}



let saveForm = document.forms['profileUserContacts'];

saveForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let firstName = document.getElementById('profileFirstName').value;
    let lastName = document.getElementById('profileLastName').value;
    let phoneNumber = document.getElementById('profilePhone').value;
    let skype = document.getElementById('profileSkype').value;

    let error = true;

    if (checkIsEmpty(firstName) && checkIsEmpty(lastName) && checkIsEmpty(phoneNumber) && checkPhoneNumber(phoneNumber) && checkIsEmpty(skype)) {
        error = true;
    } else {
        error = false;
    }

    if (error) {
        let formData = new FormData(saveForm);
        let action = saveForm.getAttribute('action');
        $.ajax({
            type: "POST",
            url: action,
            data: formData,
            dataType: 'json',
            processData: false,
            async: false,
            contentType: false,
            complete: function (data) {
                console.log(data);
                checkStatusOfRequestAfterSaving(data);
            },
        });

    }
});

function checkStatusOfRequestAfterSaving(data) {
    let status = data.status;
    let message = data.responseJSON.message;

    if (status == 200) {
        let inputToCheckButton = document.getElementById('profileHiddenInput').value;
        if (inputToCheckButton == 'save_buy') {
            sendAjaxToGetBuyForm();
        } else {
            sendAjaxToGetPhotoPath();
            putTextInSuccessAlertAndShowIt(message);
            setInputsDisabledAndAddStyleToThem();

            document.getElementById('profileSaveWithoutBuying').style.display = 'none';
            document.getElementById('profileSave').style.display = 'none';
            document.getElementById('profileSaveAndBuy').style.display = 'none';
            document.getElementById('profileEditProfileSection').style.display = 'flex';
            document.getElementById('profileEditProfileButton').addEventListener('click', setInputsAbledAndAddStyleToThem);
        }

    } else if (statusCode = 404) {
        putTextInErrorAlertAndShowIt('Что-то пошло не так');
    } else if (statusCode = 500) {
        putTextInErrorAlertAndShowIt('Что-то пошло не так');
    } else {
        let errors = data.responseJSON.errors;
        let errorMessage;
        for (error in errors) {
            errorMessage += errors[error] + "\n";
        }
        putTextInErrorAlertAndShowIt(errorMessage);
    }
}

function sendAjaxToGetPhotoPath() {
    let form = document.forms['profileUserContacts'];
    let action = form.getAttribute('data-userinfo');
    let data = new FormData(form);
    $.ajax({
        type: "POST",
        url: action,
        data: data,
        dataType: 'json',
        processData: false,
        contentType: false,
        complete: function (data) {
            let status = data.status;
            if (status == 200) {
                let photoPath = data.responseJSON.photo;
                let photoNode = document.getElementById('profileUserPhoto');
                photoNode.setAttribute('src', photoPath);
            } else {
                putTextInErrorAlertAndShowIt('Что-то пошло не так');
            }
        }
    });
}

function sendAjaxToGetBuyForm() {
    let action = document.getElementById('profileSaveAndBuy').getAttribute('data-payment-url');
    $.ajax({
        type: "POST",
        url: action,
        dataType: 'json',
        processData: false,
        async: false,
        contentType: false,
        complete: function (data) {
            let status = data.status;
            let message = data.responseJSON.message;
            if (status == 200) {
                let blockToInsert = document.getElementById('buyFormWrap');
                blockToInsert.innerHTML = data.responseJSON.form;
                let form = document.querySelector('#buyFormWrap form');
                form.submit();
            } else if (statusCode == 404) {
                putTextInErrorAlertAndShowIt('Что-то пошло не так');
            } else if (statusCode == 500) {
                putTextInErrorAlertAndShowIt('Что-то пошло не так');
            } else {
                if (data.errors) {
                    let errors = data.responseJSON.errors;
                    let errorMessage;
                    for (error in errors) {
                        errorMessage += errors[error] + "\n";
                    }
                    putTextInErrorAlertAndShowIt(errorMessage);
                } else {
                    putTextInErrorAlertAndShowIt(message);
                }
            }
        },
    });
}




function checkIsEmpty(str) {
    if (str == null || str == undefined || str == '') {
        return false;
    } else {
        return true;
    }
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
function checkPhoneNumber(str) {
    str = str.toString();
    var regExpForPhone = /^\+[0-9]{1,3}\([0-9]{3}\)[0-9]{7}$/;

    if (regExpForPhone.test(str)) {
        return true;
    } else {
        return false;
    }
}


document.getElementById('profileEditPasswordButton').addEventListener('click', function () {
    document.getElementById('profileEditPasswordWindow').style.display = 'block';
    document.getElementById('profileDarkScreen').style.display = 'block';
    document.addEventListener('keydown', checkEscAndHideWindowIfWasPressed);
});

document.getElementById('profileEditPasswordCross').addEventListener('click', function () {
    document.getElementById('profileEditPasswordWindow').style.display = 'none';
    document.getElementById('profileDarkScreen').style.display = 'none';
    document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
});

document.getElementById('profileEditPasswordInput').addEventListener('input', function () {
    let textToShow = document.getElementById('profileEditPasswordCaptureFirst');
    let password = this.value.toString();
    if (password.length < 8) {
        textToShow.style.display = 'block';
    } else {
        textToShow.style.display = 'none';
    }
});

document.getElementById('profileEditPasswordInputRepeat').addEventListener('input', function () {
    let password = document.getElementById('profileEditPasswordInput').value;
    let passwordRepeat = this.value;

    let tick = document.getElementById('profileEditPasswordTick');
    let cross = document.getElementById('profileEditPasswordCrossPassword');
    let textToShow = document.getElementById('profileEditPasswordCapture');
    let submitButton = document.getElementById('profileEditPasswordSubmit');

    if (password === passwordRepeat && password.toString().length >= 8) {
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
    document.getElementById('profileEditEmailWindow').style.display = 'block';
    document.getElementById('profileDarkScreen').style.display = 'block';
    document.addEventListener('keydown', checkEscAndHideWindowIfWasPressed);
});

document.getElementById('profileEditEmailCross').addEventListener('click', function () {
    document.getElementById('profileEditEmailWindow').style.display = 'none';
    document.getElementById('profileDarkScreen').style.display = 'none';
    document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
});

document.getElementById('profileDarkScreen').addEventListener('click', function () {
    document.getElementById('profileEditEmailWindow').style.display = 'none';
    document.getElementById('profileEditPasswordWindow').style.display = 'none';
    document.getElementById('profileDarkScreen').style.display = 'none';
    document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
});

// esc check

function checkEscAndHideWindowIfWasPressed(e) {
    e = e || window.event;
    if (e.keyCode === 27) {
        document.getElementById('profileEditEmailWindow').style.display = 'none';
        document.getElementById('profileEditPasswordWindow').style.display = 'none';
        document.getElementById('profileDarkScreen').style.display = 'none';

        document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
    }
}

document.getElementById('profileEditEmailInput').addEventListener('input', function () {
    let emailValue = this.value;
    let submitButton = document.getElementById('profileEditEmailSubmitButton');
    if (checkIsEmpty(emailValue) && checkEmail(emailValue)) {
        submitButton.style.background = '#F9E547';
    } else {
        submitButton.style.background = '#FDF7CB';
    }
});

function hideTrash() {
    $('#cartMenu').slideUp('2000', function () {
        $('.cardCanseled').fadeIn('2000');
        $('.cardCanseled').css({
            display: 'flex'
        });
    });
    hideButtonsIfCartVisible();
    showCartInPaymentSection();
}

window.addEventListener('load', checkIsCartVisible);

function checkIsCartVisible() {
    let cart = document.getElementById('cartMenu');
    let name = document.getElementById('profileFirstName').value;
    if (cart) {
        showButtonsIfCartVisible();
        hideCartInPaymentSection();

        document.getElementById('cartCanseledOK').addEventListener('click', function () {
            $('.cardCanseled').hide();
        });
        if (name) {
            checkAllInputsAreEmpty();
        }

    } else {
        hideButtonsIfCartVisible();
        showCartInPaymentSection();
        if (name) {
            setInputsDisabledAndAddStyleToThem();
            document.getElementById('profileEditProfileSection').style.display = 'flex';
            document.getElementById('profileEditProfileButton').addEventListener('click', setInputsAbledAndAddStyleToThem);
            document.getElementById('profileSave').style.display = 'none';
        }

    }
}

window.addEventListener('load', checkUserPhoto);

function checkUserPhoto() {
    let img = document.getElementById('profileUserPhoto');
    let srcOfImg = img.getAttribute('src');

    if (srcOfImg != "") {
        let blockWithBg = document.querySelector('.profile__item--user-img');
        blockWithBg.style.backgroundImage = 'none';
    }
}

let firstNameInput = document.getElementById('profileFirstName');
let secondNameInput = document.getElementById('profileLastName');
let phoneNumberInput = document.getElementById('profilePhone');
let skypeInput = document.getElementById('profileSkype');



function setInputsAbledAndAddStyleToThem() {
    firstNameInput.removeAttribute('disabled');
    secondNameInput.removeAttribute('disabled');
    phoneNumberInput.removeAttribute('disabled');
    skypeInput.removeAttribute('disabled');
    document.getElementById('profileUploadPhoto').removeAttribute('disabled');
    document.getElementById('profileUploadLabel').style.visibility = 'visible';


    let firstNameInputClass = firstNameInput.classList[1].toString();
    firstNameInput.classList.remove(firstNameInputClass);

    let secondNameInputClass = secondNameInput.classList[1].toString();
    secondNameInput.classList.remove(secondNameInputClass);

    let phoneNumberInputClass = phoneNumberInput.classList[1].toString();
    phoneNumberInput.classList.remove(phoneNumberInputClass);

    let skypeInputClass = skypeInput.classList[1].toString();
    skypeInput.classList.remove(skypeInputClass);

    document.getElementById('profileSave').style.display = 'block';
    document.getElementById("profileEditProfileSection").style.display = 'none';

    document.getElementById('profileEditProfileButton').removeEventListener('click', setInputsAbledAndAddStyleToThem);

}

function setInputsDisabledAndAddStyleToThem() {
    firstNameInput.setAttribute('disabled', true);
    secondNameInput.setAttribute('disabled', true);
    phoneNumberInput.setAttribute('disabled', true);
    skypeInput.setAttribute('disabled', true);
    document.getElementById('profileUploadPhoto').setAttribute('disabled', true);
    document.getElementById('profileUploadLabel').style.visibility = 'hidden';

    let disabled = '--disabled';

    let firstNameInputClass = firstNameInput.classList[0].toString();
    firstNameInput.classList.add(firstNameInputClass + disabled);

    let secondNameInputClass = secondNameInput.classList[0].toString();
    secondNameInput.classList.add(secondNameInputClass + disabled);

    let phoneNumberInputClass = phoneNumberInput.classList[0].toString();
    phoneNumberInput.classList.add(phoneNumberInputClass + disabled);

    let skypeInputClass = skypeInput.classList[0].toString();
    skypeInput.classList.add(skypeInputClass + disabled);

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
    if (checkIsEmpty(phoneNumber) && checkPhoneNumber(phoneNumber)) {
        phoneNumberStar.style.display = 'none';
    } else {
        phoneNumberStar.style.display = 'block';
    }
    checkAllInputsAreEmpty();
});

phoneNumberInput.addEventListener('focus', function () {
    let number = this.value;
    if (number == "" || number == undefined) {
        this.value += '+';
    }
    triggerForPhoneInputFirst = true;
    triggerForPhoneInputSecond = true;
});

let triggerForPhoneInputFirst = true;
let triggerForPhoneInputSecond = true;

phoneNumberInput.addEventListener('input', function () {
    let number = this.value;
    let length = number.length;
    let lastSymbol = number[length - 1];
    if (!checkLastSymbolOfPhoneNumber(lastSymbol) || length > 16) {
        this.value = number.slice(0, (length - 1));
    }
    if (length == 3 && triggerForPhoneInputFirst) {
        this.value += "(";
        triggerForPhoneInputFirst = false;
    }
    if (length == 7 && triggerForPhoneInputSecond) {
        this.value += ")";
        triggerForPhoneInputSecond = false;
    }
    checkAllInputsAreEmpty();
    if (number == "") {
        this.value = '+';
    }

});

function checkLastSymbolOfPhoneNumber(symbol) {
    let error = true;
    if (isNaN(symbol)) {
        error = false;
    }
    if (symbol == "(" || symbol == ")" || symbol == "+") {
        error = true;
    }
    if (error) {
        return true;
    } else {
        return false;
    }
}

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

    if (checkIsEmpty(firstName) && checkIsEmpty(secondName) && checkIsEmpty(phoneNumber) && checkPhoneNumber(phoneNumber) && checkIsEmpty(skype)) {
        warning.style.display = 'none';
        done.style.display = 'block';
        document.getElementById('profileSaveAndBuy').style.background = '#F9E547';
        document.getElementById('profileSave').style.background = '#F9E547';

    } else {
        warning.style.display = 'block';
        done.style.display = 'none';
        document.getElementById('profileSaveAndBuy').style.background = '#FDF7CB';
        document.getElementById('profileSave').style.background = '#FDF7CB';
    }
}

$('form[name = "profileCartCancel"]').submit(function (e) {
    e.preventDefault();
    let action = this.getAttribute('action');
    $.ajax({
        type: 'POST',
        url: action,
        async: 'false',
        data: new FormData(this),
        dataType: 'json',
        processData: false,
        contentType: false,
        complete: function (data) {
            console.log(data);
            checkStatusOfRequestAfterCartClose(data)
        },
    });
});

function checkStatusOfRequestAfterCartClose(data) {
    let status = data.status;
    let text = data.responseJSON.message;

    if (status == 200) {
        hideTrash();

    } else if (statusCode == 404) {
        putTextInErrorAlertAndShowIt('Что-то пошло не так');
    } else if (statusCode == 500) {
        putTextInErrorAlertAndShowIt('Что-то пошло не так');
    } else {
        putTextInErrorAlertAndShowIt(text);
    }
}

function putTextInErrorAlertAndShowIt(text) {
    let block = document.getElementById('errorAlertText');
    block.innerHTML = text;
    block.parentElement.style.display = 'flex';
}

function putTextInSuccessAlertAndShowIt(text) {
    let block = document.getElementById('successAlertText');
    block.innerHTML = text;
    block.parentElement.style.display = 'flex';
}

document.getElementById('successAlertOK').addEventListener('click', function () {
    $('#successAlert').fadeOut('1000');
});

document.getElementById('errorAlertOK').addEventListener('click', function () {
    $('#errorAlert').fadeOut('1000');
});