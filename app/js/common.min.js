'use scrict';

//hover for instagram in footer
document.getElementById('footerInstagram').addEventListener('mouseover', function () {
    let imgNode = document.getElementById('footerInstagramImg');
    let attr = '/img/instagramPink.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerInstagramLink');
    link.style.color = '#EB6FBD';
    link.style.textDecoration = 'underline';

});
document.getElementById('footerInstagram').addEventListener('mouseout', function () {
    let imgNode = document.getElementById('footerInstagramImg');
    let attr = '/img/instagram.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerInstagramLink');
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
});
//hover for facebook in footer
document.getElementById('footerFacebook').addEventListener('mouseover', function () {
    let imgNode = document.getElementById('footerFacebookImg');
    let attr = '/img/facebookPink.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerFacebookLink');
    link.style.color = '#EB6FBD';
    link.style.textDecoration = 'underline';

});
document.getElementById('footerFacebook').addEventListener('mouseout', function () {
    let imgNode = document.getElementById('footerFacebookImg');
    let attr = '/img/facebook.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerFacebookLink');
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
});
//hover for email in footer
document.getElementById('footerMail').addEventListener('mouseover', function () {
    let imgNode = document.getElementById('footerMailImg');
    let attr = '/img/mailPink.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerMailLink');
    link.style.color = '#EB6FBD';
    link.style.textDecoration = 'underline';

});
document.getElementById('footerMail').addEventListener('mouseout', function () {
    let imgNode = document.getElementById('footerMailImg');
    let attr = '/img/mail.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerMailLink');
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
});
// hover for telegram in footer
document.getElementById('footerTelegram').addEventListener('mouseover', function () {
    let imgNode = document.getElementById('footerTelegramImg');
    let attr = '/img/telegramPink.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerTelegramLink');
    link.style.color = '#EB6FBD';
    link.style.textDecoration = 'underline';

});
document.getElementById('footerTelegram').addEventListener('mouseout', function () {
    let imgNode = document.getElementById('footerTelegramImg');
    let attr = '/img/telegramWhite.svg';
    imgNode.setAttribute('src', attr);
    let link = document.getElementById('footerTelegramLink');
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
});

// for doing animation once
let triggerForArrows = true;
let trrigerForFirstOfficer = true;
let trrigerForSecondOfficer = true;
let trrigerForThirdOfficer = true;
let trrigerForForthOfficer = true;

// get scroll position
$(window).on("scroll", function () {
    let offset = $('#aboutSection').offset().top;
    let scroll = $(this).scrollTop();
    let deviceHeight = window.screen.availHeight;
    let scrollPosDown = scroll + deviceHeight;
    let footerStartPos = document.getElementById('footer').offsetTop;
    if (scroll >= offset && scrollPosDown - 100 < footerStartPos) {
        $('#burgerMenu').show();
    } else {
        $('#burgerMenu').hide();
        $('#darkScreen').hide()
    }

    //change burger menu depends on background

    let aboutSection = document.getElementById('aboutSection');
    let roadSection = document.getElementById('roadSection');

    let aboutSectionStartPos = aboutSection.offsetTop;
    let aboutSectionEndPos = aboutSectionStartPos + aboutSection.offsetHeight;
    let roadSectionStartPos = roadSection.offsetTop;
    let roadSectionEndPos = roadSectionStartPos + roadSection.offsetHeight;

    if (scroll - 60 >= aboutSectionStartPos && scroll - 60 <= aboutSectionEndPos) {
        changeLogoToBlackWhite();
    } else if (scroll >= roadSectionStartPos && scroll <= roadSectionEndPos + 80) {
        changeLogoToWhite();
        changeBurgerImgToWhite();
    } else {
        changeLogoToBlack();
        changeBurgerImgToBlack();
    }

    let aboutScrollSection = document.getElementById('aboutScroll');
    let startPosOfMouseInAboutSection = aboutSectionStartPos + aboutScrollSection.offsetTop;
    if (scrollPosDown - 280 >= startPosOfMouseInAboutSection && scroll <= aboutSectionEndPos) {
        if (triggerForArrows) {
            animateArrowsInAboutSection();
        }
    } else {
        triggerForArrows = true;
    }

    // scripts for officers
    let programSection = document.getElementById('programSection');
    let programSectionStartPos = programSection.offsetTop;

    let priceSection = document.getElementById('priceSection');
    let priceSectionStartPos = priceSection.offsetTop + programSectionStartPos;

    let firstOfficer = document.querySelector('.program__item--first');
    let secondOfficer = document.querySelector('.program__item--second');
    let thirdOfficer = document.querySelector('.program__item--third');
    let forthOfficer = document.querySelector('.program__item--forth');

    let firstOfficerStartPos = firstOfficer.offsetTop + programSectionStartPos;
    let firstOfficerEndPos = firstOfficerStartPos + firstOfficer.offsetHeight;
    let secondOfficerStartPos = secondOfficer.offsetTop + programSectionStartPos;
    let secondOfficerEndPos = secondOfficerStartPos + secondOfficer.offsetHeight;
    let thirdOfficerStartPos = thirdOfficer.offsetTop + programSectionStartPos;
    let thirdOfficerEndPos = thirdOfficerStartPos + thirdOfficer.offsetHeight;
    let forthOfficerStartPos = forthOfficer.offsetTop + programSectionStartPos;
    let forthOfficerEndPos = forthOfficerStartPos + forthOfficer.offsetHeight;



    let animationNameLeft = 'fadeInLeft';
    let animationNameRight = 'fadeInRight';

    // if (scrollPosDown >= firstOfficerEndPos && scrollPosDown <= secondOfficerStartPos && trrigerForFirstOfficer) {
    //     animateCSS(firstOfficer, animationNameLeft);
    //     trrigerForFirstOfficer = false;
    // }
    // if (scrollPosDown >= secondOfficerEndPos && scrollPosDown <= thirdOfficerStartPos && trrigerForSecondOfficer) {
    //     animateCSS(secondOfficer, animationNameRight);
    //     trrigerForSecondOfficer = false;
    // }
    // if (scrollPosDown >= thirdOfficerEndPos && scrollPosDown <= forthOfficerStartPos && trrigerForThirdOfficer) {
    //     animateCSS(thirdOfficer, animationNameLeft);
    //     trrigerForThirdOfficer = false;
    // }
    // if (scrollPosDown >= forthOfficerEndPos && scrollPosDown <= priceSectionStartPos && trrigerForForthOfficer) {
    //     animateCSS(forthOfficer, animationNameRight);
    //     trrigerForForthOfficer = false;
    // }
    if (scrollPosDown >= firstOfficerEndPos && trrigerForFirstOfficer) {
        firstOfficer.style.visibility = 'visible';
        animateCSS(firstOfficer, animationNameLeft);
        trrigerForFirstOfficer = false;
    }
    if (scrollPosDown >= secondOfficerEndPos && trrigerForSecondOfficer) {
        secondOfficer.style.visibility = 'visible';
        animateCSS(secondOfficer, animationNameRight);
        trrigerForSecondOfficer = false;
    }
    if (scrollPosDown >= thirdOfficerEndPos && trrigerForThirdOfficer) {
        thirdOfficer.style.visibility = 'visible';
        animateCSS(thirdOfficer, animationNameLeft);
        trrigerForThirdOfficer = false;
    }
    if (scrollPosDown >= forthOfficerEndPos && trrigerForForthOfficer) {
        forthOfficer.style.visibility = 'visible';
        animateCSS(forthOfficer, animationNameRight);
        trrigerForForthOfficer = false;
    }

});

function animateCSS(node, animationName) {
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
    }

    node.addEventListener('animationend', handleAnimationEnd);


}



function changeBurgerImgToWhite() {
    $('#burgerImg').css({
        'background-image': 'url("../img/burgerOpenWhite.svg")'
    });
}
function changeBurgerImgToBlack() {
    $('#burgerImg').css({
        'background-image': 'url("../img/burgerOpen.svg")'
    });
}


function changeLogoToWhite() {
    let imgNode = document.getElementById('burgerMenuLogo');
    let attr = '/img/finalLogo1.2.svg';
    imgNode.setAttribute('src', attr);
}

function changeLogoToBlack() {
    let imgNode = document.getElementById('burgerMenuLogo');
    let attr = '/img/finalLogo1.svg';
    imgNode.setAttribute('src', attr);
}

function changeLogoToBlackWhite() {
    let imgNode = document.getElementById('burgerMenuLogo');
    let attr = '/img/finalLogo1.3.svg';
    imgNode.setAttribute('src', attr);
}

function showBurgerMenu() {
    $('#burgerMenu').css({
        'background': '#262626'
    });
    $('.burgerMenu__list').slideToggle("slow", function () {
        $('#burgerImg').hide();
        $('#crossImg').show();
        $('#darkScreen').show();
        changeLogoToWhite();
    });
}

function hideBurgerMenu() {
    $('.burgerMenu__list').slideToggle("slow", function () {
        $('#burgerImg').show();
        $('#crossImg').hide();
        $('#burgerMenu').css({
            'background': 'transparent'
        });
        $('#darkScreen').hide();
        changeLogoToBlack();
        document.getElementById('burgerMenuOfficer').style.top = '-50px';
    });
}

function animateArrowsInAboutSection() {
    let firstArrow = document.getElementById('aboutScrollArrow1');
    let secondArrow = document.getElementById('aboutScrollArrow2');
    let thirdArrow = document.getElementById('aboutScrollArrow3');

    setTimeout(showOneArrowInAboutSection, 0, firstArrow);
    setTimeout(showOneArrowInAboutSection, 500, secondArrow);
    setTimeout(showOneArrowInAboutSection, 1000, thirdArrow);
    setTimeout(hideOneArrowInAboutSection, 1500, firstArrow);
    setTimeout(hideOneArrowInAboutSection, 1500, secondArrow);
    setTimeout(hideOneArrowInAboutSection, 1500, thirdArrow);
    setTimeout(showOneArrowInAboutSection, 2000, firstArrow);
    setTimeout(showOneArrowInAboutSection, 2500, secondArrow);
    setTimeout(showOneArrowInAboutSection, 3000, thirdArrow);

    triggerForArrows = false;
}

function showOneArrowInAboutSection(elem) {
    elem.style.visibility = 'visible';
}
function hideOneArrowInAboutSection(elem) {
    elem.style.visibility = 'hidden';
}


// scripts for burger menu
document.getElementById('burgerImg').addEventListener('click', function () {
    showBurgerMenu();
    setOfficerInBurgerMenu();
});

document.getElementById('crossImg').addEventListener('click', function () {
    hideBurgerMenu();
});

document.getElementById('darkScreen').addEventListener('click', function () {
    hideBurgerMenu();
});

function setOfficerInBurgerMenu() {
    let deviceHeight = window.screen.availHeight;
    let halfDeviceHeight = deviceHeight / 2;

    let officer = document.getElementById('burgerMenuOfficer');

    let aboutSection = document.getElementById('aboutSection');
    let programSection = document.getElementById('programSection');
    let priceSection = document.getElementById('priceSection');
    let roadSection = document.getElementById('roadSection');
    let applicationSection = document.getElementById('applicationSection');
    let tutorsSection = document.getElementById('tutorsSection');
    let faqSection = document.getElementById('faqSection');

    let aboutSectionStartPos = aboutSection.offsetTop;
    let aboutSectionEndPos = aboutSectionStartPos + aboutSection.offsetHeight;
    let programSectionStartPos = programSection.offsetTop;
    let programSectionEndPos = programSectionStartPos + priceSection.offsetTop;
    let priceSectionStartPos = programSectionEndPos;
    let priceSectionEndPos = programSectionStartPos + programSection.offsetHeight;
    let roadSectionStartPos = roadSection.offsetTop;
    let roadSectionEndPos = applicationSection.offsetTop + applicationSection.offsetHeight;
    let tutorsSectionStartPos = tutorsSection.offsetTop;
    let tutorsSectionEndPos = tutorsSectionStartPos + faqSection.offsetTop;
    let faqSectionStartPos = tutorsSectionEndPos;
    let faqSectionEndPos = tutorsSectionStartPos + tutorsSection.offsetHeight;

    let scrollPos = $(window).scrollTop() + halfDeviceHeight;

    if (scrollPos >= aboutSectionStartPos && scrollPos < aboutSectionEndPos) {
        officer.style.top = '-37px';
    }
    if (scrollPos >= programSectionStartPos && scrollPos < programSectionEndPos) {
        officer.style.top = '20px';
    }
    if (scrollPos >= priceSectionStartPos && scrollPos < priceSectionEndPos) {
        officer.style.top = '73px';
    }
    if (scrollPos >= roadSectionStartPos && scrollPos < roadSectionEndPos) {
        officer.style.top = '130px';
    }
    if (scrollPos >= tutorsSectionStartPos && scrollPos < tutorsSectionEndPos) {
        officer.style.top = '187px';
    }
    if (scrollPos >= faqSectionStartPos && scrollPos < faqSectionEndPos) {
        officer.style.top = '243px';
    }
}
// program section show description on click on FIRST quesion mark
document.getElementById('programFirstQuestionMark').addEventListener('click', function () {
    let descriptionBlock = $('#programDescriptionFirst');
    descriptionBlock.fadeIn('3000', function () {
        $('#programFirstQuestionMark').hide();
        $('#programFirstCross').show();
    });
});
// program section hide description on click on FIRST cross
document.getElementById('programFirstCross').addEventListener('click', function () {
    let descriptionBlock = $('#programDescriptionFirst');
    descriptionBlock.fadeOut('3000', function () {
        $('#programFirstQuestionMark').show();
        $('#programFirstCross').hide();
    });
});

// program section show description on click on Forth quesion mark
document.getElementById('programForthQuestionMark').addEventListener('click', function () {
    let descriptionBlock = $('#programDescriptionForth');
    descriptionBlock.fadeIn('3000', function () {
        $('#programForthQuestionMark').hide();
        $('#programForthCross').show();
    });
});
// program section hide description on click on FORTH cross
document.getElementById('programForthCross').addEventListener('click', function () {
    let descriptionBlock = $('#programDescriptionForth');
    descriptionBlock.fadeOut('3000', function () {
        $('#programForthQuestionMark').show();
        $('#programForthCross').hide();
    });
});

// application section show description on click on question mark
document.getElementById('applicationQuestionMark').addEventListener('click', function () {
    let descriptionBlock = $('#applicationDescription');
    descriptionBlock.fadeIn('3000', function () {
        $('#applicationQuestionMark').hide();
        $('#applecationCross').show();
    });
});
// application section hide description on click on question mark
document.getElementById('applecationCross').addEventListener('click', function () {
    let descriptionBlock = $('#applicationDescription');
    descriptionBlock.fadeOut('3000', function () {
        $('#applicationQuestionMark').show();
        $('#applecationCross').hide();
    });
});
// price section show description on click on question mark
document.getElementById('priceQuestionMark').addEventListener('click', function () {
    let descriptionBlock = $('#priceDescription');
    descriptionBlock.fadeIn('3000', function () {
        $('#priceQuestionMark').hide();
        $('#priceCross').show();
    });
});
// price section hide description on click on question mark
document.getElementById('priceCross').addEventListener('click', function () {
    let descriptionBlock = $('#priceDescription');
    descriptionBlock.fadeOut('3000', function () {
        $('#priceQuestionMark').show();
        $('#priceCross').hide();
    });
});

// anchor scroll when you click on link in burger menu
$('.anchorScroll').click(function () {
    anchorScrollTo($(this));
    hideBurgerMenu();
});

// anchor scroll when you click on link in header
$('.header__block').click(function () {
    let element = $(this).children('a');
    anchorScrollTo(element);
});
// anchor scroll when you click on link in footer
$('.anchorScrollFooter').click(function () {
    anchorScrollTo($(this));
});
$('.anchorScrollContacts').click(function () {
    anchorScrollTo($(this));
});



function anchorScrollTo(element) {
    let anchor = element.attr('href');
    let menuHeadHeight = anchor == '#aboutSection' ? 0 : 80;
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - menuHeadHeight
    }, 500);
}

// scripts for accordeon in FAQ section

$('.faq__accordeon--head').click(function () {
    let elem = $(this).next('.faq__accordeon--body');
    if (elem.is(':hidden')) {
        hideAllAccordeonBodies();
        showAccordeonBody(elem);
    } else {
        hideAllAccordeonBodies();
    }
});

function hideAllAccordeonBodies() {
    $('.faq__accordeon--body').each(function () {
        if ($(this).is(':visible')) {
            $(this).slideUp('3000');
            let accordeonHead = $(this).prev('.faq__accordeon--head');
            let plusSymbol = accordeonHead.children('p');

            accordeonHead.css({
                'border-bottom': '2px solid #EB6FBD'
            });
            plusSymbol.text('+');
            plusSymbol.css({
                'font-size': '35px'
            });
        }
    });
}
function showAccordeonBody(elem) {
    elem.slideDown('3000');
    let accordeonHead = elem.prev('.faq__accordeon--head');
    let plusSymbol = accordeonHead.children('p');

    accordeonHead.css({
        'border': 'none'
    });
    plusSymbol.text('-');
    plusSymbol.css({
        'font-size': '50px'
    });
}

// script for print heading

const headerHeading1 = "Это";
const headerHeading2 = "Интенсив";
const headerHeading3 = "Английского";

let triggerForCursorInHeader = true;

function addOneLetter(letter, id) {
    let blockToIncertText = document.getElementById(id);
    blockToIncertText.innerText += letter;
    if (triggerForCursorInHeader == true) {
        blockToIncertText.style.border = 'none';
        triggerForCursorInHeader = false;
    } else {
        blockToIncertText.style.borderRight = '2px solid #000';
        triggerForCursorInHeader = true;
    }
}

function printWithInterval(message, id) {
    let start = 0;
    let end = message.length;
    setTimeout(function print() {
        addOneLetter(message[start], id);
        if (start < end - 1) {
            setTimeout(print, 150);
        }
        start++
    }, 100);
}

function offBorder(id) {
    let block = document.getElementById(id);
    block.style.border = 'none';
}

$(function () {
    printWithInterval(headerHeading1, 'headerHeadingPart1');
    setTimeout(offBorder, 600, 'headerHeadingPart1');
    setTimeout(printWithInterval, 450, headerHeading2, 'headerHeadingPart2');
    setTimeout(offBorder, 1650, 'headerHeadingPart2');
    setTimeout(printWithInterval, 1500, headerHeading3, 'headerHeadingPart3');
    setTimeout(offBorder, 3800, 'headerHeadingPart3');

});


// script for moving cars in road section

let trrigerForFirstCar = true;
let trrigerForSecondCar = true;
let trrigerForThirdCar = true;
let trrigerForForthCar = true;

$('.road__car--first').on('mouseover', function () {
    let car = $(this);
    let leftPos = car.css('left');
    if (trrigerForFirstCar) {
        trrigerForFirstCar = false;
        car.animate({
            left: '+=50'
        }, 1500, function () {
            car.animate({
                left: leftPos
            }, 1500, function () {
                trrigerForFirstCar = true;
            });
        });
    }
});
$('.road__car--second').on('mouseover', function () {
    let car = $(this);
    let leftPos = car.css('left');
    if (trrigerForSecondCar) {
        trrigerForSecondCar = false;
        car.animate({
            left: '+=50'
        }, 1500, function () {
            car.animate({
                left: leftPos
            }, 1500, function () {
                trrigerForSecondCar = true;
            });
        });
    }
});
$('.road__car--third').on('mouseover', function () {
    let car = $(this);
    let leftPos = car.css('left');
    if (trrigerForThirdCar) {
        trrigerForThirdCar = false;
        car.animate({
            left: '+=50'
        }, 1500, function () {
            car.animate({
                left: leftPos
            }, 1500, function () {
                trrigerForThirdCar = true;
            });
        });
    }
});
$('.road__car--forth').on('mouseover', function () {
    let car = $(this);
    let leftPos = car.css('left');
    if (trrigerForForthCar) {
        trrigerForForthCar = false;
        car.animate({
            left: '+=50'
        }, 1500, function () {
            car.animate({
                left: leftPos
            }, 1500, function () {
                trrigerForForthCar = true;
            });
        });
    }
});

// FORMS

let enterForm = document.forms["enterForm"];
enterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('enterEmail').value;
    let password = document.getElementById('enterPassword').value;
    if (checkIsEmpty(email) && checkIsEmpty(password) && checkEmail(email)) {
        this.submit;
    }
});

function checkIsEmpty(str) {
    if (str == null || str == undefined || str == '') {
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

let registrationForm = document.forms["registerForm"];
let registerEmailInput = document.getElementById('registerEmail');
let registerPasswordInput = document.getElementById('registerPassword');

registerEmailInput.addEventListener('focus', function () {
    if (!($('#registerEmailLabel').hasClass('register__emailLabel--small'))) {
        let textToShowAboveInput = document.getElementById('registerTextEmail');
        textToShowAboveInput.style.visibility = 'hidden';
    }

    this.setAttribute('placeholder', '');
    document.getElementById('registerCapture').style.display = 'block';
    document.getElementById('registerWarningEmail').style.display = 'none';
});

registerEmailInput.addEventListener('blur', function () {

    if (!($('#registerEmailLabel').hasClass('register__emailLabel--small'))) {
        let textToShowAboveInput = document.getElementById('registerTextEmail');
        textToShowAboveInput.style.visibility = 'hidden';
    }

    this.setAttribute('placeholder', 'Email');
    let valueFromInput = this.value;
    if (checkIsEmpty(valueFromInput) && checkEmail(valueFromInput)) {

    } else {
        document.getElementById('registerCapture').style.display = 'none';
        document.getElementById('registerWarningEmail').style.display = 'block';
    }
});

document.getElementById('registerNextButton').addEventListener('click', function () {
    let valueFromInput = registerEmailInput.value;
    if (checkIsEmpty(valueFromInput) && checkEmail(valueFromInput)) {
        let form = $('#registartionForm');
        form.animate({
            'padding-top': '60px'
        }, 1000);
        $('#registerEmailLabel').animate({
            'width': '60%'
        }, 1000);
        $('#registerEmailLabel').addClass('register__emailLabel--small');
        document.getElementById('registerTextEmail').style.display = 'none';
        $('#registerPasswordLabel').fadeIn(1500);
    } else {
        document.getElementById('registerCapture').style.display = 'none';
        document.getElementById('registerWarningEmail').style.display = 'block';
    }
});

registerPasswordInput.addEventListener('focus', function () {
    let textToShow = document.getElementById('registerTextPassword');
    textToShow.style.visibility = 'visible';
    this.setAttribute('placeholder', '');
    document.getElementById('registerWarningPassword').style.display = 'none';
    $('.register__wrapUnderInput--password').css({
        'justify-content': 'flex-end'
    });
});
registerPasswordInput.addEventListener('blur', function () {
    // let textToShow = document.getElementById('registerTextPassword');
    // textToShow.style.visibility = 'hidden';

    this.setAttribute('placeholder', 'Password');
    let valueFromInput = this.value;

    if (checkIsEmpty(valueFromInput)) {
        $('#registerSubmit').css({
            'background-color': '#F9E547'
        });
        $('#registerPasswordLabel').addClass('register__passwordLabel--small');
    } else {
        document.getElementById('registerWarningPassword').style.display = 'block';
        $('.register__wrapUnderInput--password').css({
            'justify-content': 'space-between'
        });
    }
});

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let emailValue = registerEmailInput.value;
    let passwordValue = registerPasswordInput.value;
    let error = true;
    if (!checkIsEmpty(emailValue) && !checkEmail(emailValue)) {
        document.getElementById('registerWarningEmail').style.display = 'block';
        $('.register__wrapUnderInput--email').css({
            'visibility': 'visible'
        })
        error = false;
    }
    if (!checkIsEmpty(passwordValue)) {
        document.getElementById('registerWarningPassword').style.display = 'block';
        $('.register__wrapUnderInput--password').css({
            'justify-content': 'space-between'
        });
        error = false;
    }

    if (error) {
        this.submit();
    }

});

function showEnterWindow() {
    document.getElementById('registrationDarkScreen').style.display = 'block';
    document.getElementById('enterWindow').style.display = 'block';
    document.getElementById('registerWindow').style.display = 'none';
}
function hideEnterAndRegisterWindows() {
    document.getElementById('registrationDarkScreen').style.display = 'none';
    document.getElementById('enterWindow').style.display = 'none';
    document.getElementById('registerWindow').style.display = 'none';
}
function showRegisterWindow() {
    document.getElementById('registerWindow').style.display = 'block';
    document.getElementById('enterWindow').style.display = 'none';
}

document.getElementById('applicationEnterLink').addEventListener('click', showEnterWindow);
document.getElementById('enterCross').addEventListener('click', hideEnterAndRegisterWindows);
document.getElementById('enterLinkToRegister').addEventListener('click', showRegisterWindow);
document.getElementById('registerLinkToEnter').addEventListener('click', showEnterWindow);


