document.addEventListener('DOMContentLoaded', function () {
    setInterval(autoSlide , 3000)
});

const image = document.querySelectorAll('.image-container > .image');


function autoSlide() {

    for (let i = 0; i < image.length; i++) {
        // console.log(image[i])
        if (image[i].classList.contains("hidden") == false) {
            image[i].classList.add("hidden");
            if (i+1 > image.length - 1) {
                image[0].classList.remove("hidden");
            }
            else {
                image[i+1].classList.remove("hidden");
            }

            break;
        }
    }
};


$(function () {

let $menuOpenHide = $('.fa-bars');

$menuOpenHide.click(function () {
    $('#menu-panel').toggleClass('menu-panel-visible menu-panel-hidden')
});

let $closeMenu = $('.close-btn');

$closeMenu.click(function () {
    $('#menu-panel').toggleClass('menu-panel-visible menu-panel-hidden')
});


let $openEmail = $('.email-field');

$openEmail.click(function () {
    $('.type-email-section, .send-button').toggleClass('hidden');
});

});







