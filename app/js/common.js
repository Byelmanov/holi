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

// get scroll position to show or hide burger menu
$(window).scroll(function () {
    let offset = $('#aboutSection').offset().top;
    if ($(this).scrollTop() >= offset) {
        $('#burgerMenu').show();
    } else {
        $('#burgerMenu').hide();
        $('#darkScreen').hide()
    }
});

// scripts for burger menu
document.getElementById('burgerImg').addEventListener('click', function () {
    setOfficerInBurgerMenu();
    $('.burgerMenu__list').slideToggle("slow", function () {
        $('#burgerImg').hide();
        $('#crossImg').show();
        $('#burgerMenu').css({
            'background': '#262626'
        });
        $('#darkScreen').show()
        let imgNode = document.getElementById('burgerMenuLogo');
        let attr = '/img/finalLogo1.2.svg';
        imgNode.setAttribute('src', attr);
    });
});

document.getElementById('crossImg').addEventListener('click', function () {
    $('.burgerMenu__list').slideToggle("slow", function () {
        $('#burgerImg').show();
        $('#crossImg').hide();
        $('#burgerMenu').css({
            'background': '#ffffff'
        });
        $('#darkScreen').hide()
        let imgNode = document.getElementById('burgerMenuLogo');
        let attr = '/img/finalLogo1.svg';
        imgNode.setAttribute('src', attr);
        document.getElementById('burgerMenuOfficer').style.top = '-50px';
    });
});

document.getElementById('darkScreen').addEventListener('click', function () {
    $('.burgerMenu__list').slideToggle("slow", function () {
        $('#burgerImg').show();
        $('#crossImg').hide();
        $('#burgerMenu').css({
            'background': '#ffffff'
        });
        $('#darkScreen').hide()
        let imgNode = document.getElementById('burgerMenuLogo');
        let attr = '/img/finalLogo1.svg';
        imgNode.setAttribute('src', attr);
        document.getElementById('burgerMenuOfficer').style.top = '-50px';
    });
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







