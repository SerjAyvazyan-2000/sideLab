const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const headerBody = document.querySelector('.header-body');
const menuBg = document.querySelector('.menu-bg');


document.addEventListener('DOMContentLoaded', function () {
    if (burger) {
        burger.addEventListener("click", function (e) {
            if (menu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        menuBg.addEventListener("click", function (e) {
            if (menu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        function openMenu() {
            menu.classList.add('active');
            burger.classList.add('active');
            header.classList.add('active');
            headerBody.classList.add('active');
            menuBg.classList.add('active');

        }

        function closeMenu() {
            menu.classList.remove('active');
            burger.classList.remove('active');
            header.classList.remove('active');
            headerBody.classList.remove('active');
            menuBg.classList.remove('active');

        }
    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('.header')
    const footerTop = document.querySelector('.footer')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');
        if (footerTop) {
            footerTop.classList.add('moved');

        }


    } else {
        headerTop.classList.remove('moved');
        if (footerTop) {
            footerTop.classList.remove('moved');
        }

    }
});


document.querySelectorAll('.tolls-sub-item').forEach(item => {
    item.addEventListener('click', function (event) {
        document.querySelectorAll('.tolls-sub-item').forEach(el => el.classList.remove('active'));

        event.currentTarget.classList.add('active');
    });
});

document.querySelectorAll('.header-profile').forEach(item => {
    item.addEventListener('click', function () {
        item.classList.toggle('active');
    });
});

function toggleActiveStateSub(item) {
    const allItems = document.querySelectorAll('.block-tolls-item');
    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });
    item.classList.toggle('active');
}

document.querySelectorAll('.block-tolls-item').forEach(item => {
    item.addEventListener('click', (e) => {
        toggleActiveStateSub(item)
        e.preventDefault()
    });

});


document.addEventListener("DOMContentLoaded", function () {
    const loginCnt = document.querySelector(".login-cnt");
    const registrationCnt = document.querySelector(".registration-content");
    const registrationBtn = document.querySelector(".registration-bnt");
    const loginBtn = document.querySelector(".login-bnt");

    if (registrationBtn) {
        registrationBtn.addEventListener("click", function (event) {
            event.preventDefault();
            loginCnt.style.display = "none";
            registrationCnt.style.display = "flex";
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault();
            registrationCnt.style.display = "none";
            loginCnt.style.display = "flex";
        });
    }

});










