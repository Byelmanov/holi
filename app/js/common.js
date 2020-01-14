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

$(window).scroll(function () {
    let offset = $('#aboutSection').offset().top;
    if ($(this).scrollTop() >= offset) {
        $('#burgerMenu').show();
    } else {
        $('#burgerMenu').hide();
    }
});

document.getElementById('burgerImg').addEventListener('click', function () {
    $('.burgerMenu__list').slideToggle("slow", function () {
        $('#burgerImg').hide();
        $('#crossImg').show();
        $('#burgerMenu').css({
            'background': '#262626'
        });
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
        let imgNode = document.getElementById('burgerMenuLogo');
        let attr = '/img/finalLogo1.svg';
        imgNode.setAttribute('src', attr);
    });
});




