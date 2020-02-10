'use scrict';



$('form[name="myFormName"]').submit(function () {
    let idOfCourse = $('#allCoursesFirst').attr('data-id');
    $.post(
        $this.attr('action'),
        idOfCourse,
        getLinkToDirect,
        'text'
    );
    return false;

});

function getLinkToDirect(data) {
    window.location.href = data;
}


document.getElementById('allCoursesAlertCross').addEventListener('click', function () {
    document.getElementById('allCoursesAlertSection').style.display = 'none';
});

window.onload = function () {
    let firstCourse = document.getElementById('allCoursesFirst');
    if (!firstCourse.classList.contains('allCourses__item--bought')) {
        document.getElementById('allCoursesGetButton').addEventListener('click', openAlertWindow);
    }
}

function openAlertWindow() {
    document.getElementById('allCoursesAlertSection').style.display = 'flex';
}