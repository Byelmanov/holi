document.getElementById('profileBurgerMenuUser').addEventListener('click', function () {
    let elemToShow = document.getElementById('profileBurgerMenuSignOut');
    if (elemToShow.style.display == 'flex') {
        elemToShow.style.display = 'none';
    } else {
        elemToShow.style.display = 'flex';
    }
});

document.getElementById('profileUploadPhoto').addEventListener('change', function (e) {

});

document.getElementById('cartMenuTrash').addEventListener('click', function () {
    $('#cartMenu').slideUp('2000');
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