const show = document.getElementById('account_burger');
const close = document.getElementById('close');
const menu = document.getElementById('main_menu');

menu.style.visibility = "hidden";

show.onclick = function () {
    menu.style.visibility = "visible";
}

close.onclick = function () {
    menu.style.visibility = "hidden";
}

new Swiper('.swiper-conatainer', {
    mousewheel: {
        sensitivity: 1,
    },
    slidesPerView: 2.65,
    speed: 400,
    spaceBetween: 30,

});