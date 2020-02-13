'use scrict';

let buyForm = document.forms['allCoursesBuyForm'];

buyForm.addEventListener('submit', function () {
    let idOfCourse = $('#allCoursesFirst').attr('data-id');
    document.getElementById('allCoursesArertInput').value = idOfCourse;
});

document.getElementById('allCoursesAlertCross').addEventListener('click', function () {
    document.getElementById('allCoursesAlertSection').style.display = 'none';
    document.getElementById('allCoursesDarkScreen').style.display = 'none';
    document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
});
document.getElementById('allCoursesDarkScreen').addEventListener('click', function () {
    document.getElementById('allCoursesAlertSection').style.display = 'none';
    document.getElementById('allCoursesDarkScreen').style.display = 'none';
    document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
})

function checkEscAndHideWindowIfWasPressed(e) {
    e = e || window.event;
    if (e.keyCode === 27) {
        document.getElementById('allCoursesAlertSection').style.display = 'none';
        document.getElementById('allCoursesDarkScreen').style.display = 'none';

        document.removeEventListener('keydown', checkEscAndHideWindowIfWasPressed);
    }
}

window.onload = function () {
    let firstCourse = document.getElementById('allCoursesFirst');
    if (!firstCourse.classList.contains('allCourses__item--bought')) {
        document.getElementById('allCoursesGetButton').addEventListener('click', openAlertWindow);
    }
}

function openAlertWindow() {
    document.getElementById('allCoursesAlertSection').style.display = 'flex';
    document.getElementById('allCoursesDarkScreen').style.display = 'block';
    document.addEventListener('keydown', checkEscAndHideWindowIfWasPressed);
}