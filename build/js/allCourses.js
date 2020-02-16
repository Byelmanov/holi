'use scrict';


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


let getButtons = $('.allCourses__item-description-button');

getButtons.on('click', function () {
    let parentCourse = getButtons.parent().parent();
    let dataId = parentCourse.attr("data-id");
    let input = document.getElementById('allCoursesArertInput');
    input.value = dataId;
    openAlertWindow();
});


function openAlertWindow() {
    document.getElementById('allCoursesAlertSection').style.display = 'flex';
    document.getElementById('allCoursesDarkScreen').style.display = 'block';
    document.addEventListener('keydown', checkEscAndHideWindowIfWasPressed);
}

