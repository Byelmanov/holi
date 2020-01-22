document.getElementById('profileBurgerMenuUser').addEventListener('click', function () {
    let elemToShow = document.getElementById('profileBurgerMenuSignOut');
    if (elemToShow.style.display == 'flex') {
        elemToShow.style.display = 'none';
    } else {
        elemToShow.style.display = 'flex';
    }
});

document.getElementById('profileUploadPhoto').addEventListener('change', function (e) {
    let fileName = this.value.split('\\').pop();
    let label = document.getElementById('profileUploadLabel');
    let labelText = label.innerText;
    if (fileName) {
        label.innerText = fileName;
    } else {
        label.innerText = labelText;
    }
});
