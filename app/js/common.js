// script for hamburger menu
document.querySelector('#menu_hamburger').addEventListener('click', function () {
    $('#header_menu').slideToggle(function () {
        $('#header_menu').animate({ top: '70' }, 500);
        $('#menu_hamburger').hide();
        $('#menu_cross').show();
    });
});
document.querySelector('#menu_cross').addEventListener('click', function () {
    $('#header_menu').animate({ top: '0' }, 500, function () {
        $('#header_menu').slideToggle(function () {
            $('#menu_cross').hide();
            $('#menu_hamburger').show();
        });
    });

});

//script for slider
$('#slider').slick({
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    autoplay: false,
});

//custom arrows for slider
$('#sliderNextButton').click(function () {
    $('#slider').slick('slickNext');
});
$("#sliderPrevButton").click(function () {
    $("#slider").slick("slickPrev");
});

//custom dots for slider
$(".slider__dot").click(function () {
    var scrollTo = $(this).text();
    $('#slider').slick('slickGoTo', scrollTo);
});
// remove active 
$("#slider").on("beforeChange", function () {
    var currentPos = $('#slider').slick('slickCurrentSlide');
    var arrayOfItems = document.getElementsByClassName("slider__dot");
    arrayOfItems[currentPos].classList.remove("slider__dot--active");
});
// add ative
$('#slider').on('afterChange', function () {
    var currentPos = $('#slider').slick('slickCurrentSlide');
    var arrayOfItems = document.getElementsByClassName("slider__dot");
    arrayOfItems[currentPos].classList.add("slider__dot--active");
});
