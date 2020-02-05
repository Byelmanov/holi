document.getElementById('profileBurgerMenuUser').addEventListener('click', function () {
    let elemToShow = document.getElementById('profileBurgerMenuSignOut');
    if (elemToShow.style.display == 'flex') {
        elemToShow.style.display = 'none';
    } else {
        elemToShow.style.display = 'flex';
    }
});