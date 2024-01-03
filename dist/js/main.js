"use strict";
//dropdown-card lg disposition
document.addEventListener('DOMContentLoaded', () => {
    const detailsElement = document.querySelectorAll('.dropdown-card');
    if (window.matchMedia('(min-width: 992px)').matches) {
        // Si la pantalla es 'lg' o más grande
        detailsElement.forEach((element) => {
            element.toggleAttribute('open');
        });
    }
});
//banner-ficha
window.addEventListener('resize', adjustBannerFicha);
function adjustBannerFicha() {
    const bannerFichaCard = document.querySelector('.banner-ficha__card__img');
    const bannerFicha = document.querySelector('.banner-ficha');
    const lgSize = 992;
    if (window.innerWidth >= lgSize) {
        if (bannerFichaCard) {
            bannerFichaCard.removeAttribute('id');
        }
        if (bannerFicha) {
            bannerFicha.setAttribute('id', 'hero');
        }
    }
    else {
        if (bannerFicha) {
            bannerFicha.removeAttribute('id');
        }
        if (bannerFichaCard) {
            bannerFichaCard.setAttribute('id', 'hero');
        }
    }
}
adjustBannerFicha();
const carouselsTopVentas = document.querySelectorAll(".top-ventas__container");
const controlsList1 = document.querySelectorAll(".guias-top-ventas");
carouselsTopVentas.forEach((carousel, carouselIndex) => {
    const controls = controlsList1[carouselIndex];
    const controlItems = controls.querySelectorAll(".controls-top-ventas");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    controlItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            moveItems(index);
        });
    });
    const moveItems = (index) => {
        const cardWidth = carousel.querySelector(".card-spa");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", () => {
        const cardWidth = carousel.querySelector(".card-spa");
        if (carousel === null || !cardWidth)
            return;
        const scrollPos = carousel.scrollLeft;
        const activeControlIndex = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
        setActiveControl(activeControlIndex);
    });
});
//transform module
const cardTransform = document.querySelector("#card-transform");
const cardTransformRight = document.querySelector(".card-transform-right");
const transformModule = document.querySelector(".transform-module");
document.addEventListener('DOMContentLoaded', () => {
    if (cardTransformRight) {
        cardTransformRight.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 993) {
                if (cardTransform) {
                    cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.add('opac');
                }
            }
        });
        cardTransformRight.addEventListener('mouseout', (e) => {
            if (cardTransform) {
                cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.remove('opac');
            }
        });
    }
});
// categories prestaciones
//prestaciones inner generic para todos las categories
document.addEventListener('DOMContentLoaded', () => {
    //pr-#
    const links = Array.from({ length: 5 }, (_, i) => document.querySelectorAll(`#pr-${i + 1}`));
    //prest-#
    const prests = Array.from({ length: 5 }, (_, i) => document.querySelectorAll(`#prest-${i + 1}`));
    const special = 1158;
    // console.log(links);
    // console.log(prests);
    //ocultar los modales al principio menos el 1
    //! tiene que ser solo en LG
    if (window.matchMedia(`(min-width: ${special}px)`).matches) {
        prests.forEach((pre, i) => {
            // console.log(pre)
            // console.log(i)
            pre.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = i === 0 ? 'block' : 'none'; //el 1ro del array
                }
            });
        });
    }
    window.addEventListener('resize', () => {
        if (window.matchMedia(`(min-width: ${special}px)`).matches) {
            prests.forEach((pre, i) => {
                pre.forEach(element => {
                    if (element instanceof HTMLElement) {
                        element.style.display = i === 0
                            ? 'block'
                            : 'none';
                    }
                });
            });
        }
        else {
            prests.forEach((pre) => {
                pre.forEach(element => {
                    if (element instanceof HTMLElement) {
                        element.style.display = 'block';
                    }
                });
            });
        }
    });
    links.forEach((link, i) => {
        link.forEach((singleLink, _) => {
            singleLink.addEventListener('click', () => {
                prests.forEach((prest, j) => {
                    if (prest) {
                        prest.forEach((singlePrest, __) => {
                            if (singlePrest instanceof HTMLElement) {
                                singlePrest.style.display = i === j
                                    ? 'block'
                                    : 'none';
                            }
                        });
                    }
                });
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    //Valores module
    const tabsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`valor-${i + 1}`));
    const modalsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`modal-valor-${i + 1}`));
    //ocultar los modales al principio menos el 1
    modalsValores.forEach((modal, i) => {
        if (modal) {
            modal.style.display = i === 0 ? 'block' : 'none';
        }
    });
    //agregar eventListener a las tabsValores
    tabsValores.forEach((tab, i) => {
        if (tab) {
            tab.addEventListener('click', () => {
                modalsValores.forEach((modal, j) => {
                    if (modal) {
                        modal.style.display = i === j ? 'block' : 'none';
                    }
                });
            });
        }
    });
});
//navbar & menu lateral
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('#navbar');
    if (!navbar)
        return;
    const banner = document.querySelector('#hero');
    const navLinks = navbar.querySelectorAll('.link');
    const navLogo = navbar.querySelector('#navlogo');
    const firstMenuBurger = navbar.querySelector('.menu-burger');
    const menuBurger = navbar.querySelectorAll('.menu-burger');
    const menuSpas = navbar.querySelector('#spas');
    const menuSwimspas = navbar.querySelector('#swimspas');
    const menuPrestaciones = navbar.querySelector('#prestaciones');
    const closeMenu = navbar.querySelectorAll('.close-menu');
    const previousMenu = navbar.querySelectorAll('.previous-menu');
    const mainMenu = document.querySelector('.main-menu');
    const spasMenu = document.querySelector('.spas-menu');
    const swimspasMenu = document.querySelector('.swimspas-menu');
    const prestacionesMenu = document.querySelector('.prestaciones-menu');
    const menuBackdrop = document.querySelector('.menuBackdrop');
    const accordionMenu = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.accordion-menu');
    const showContentMenu = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.show-content-menu');
    const accordionImg = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.accordion-img');
    if (!banner || !navLinks || !navLogo || !firstMenuBurger || !menuBurger || !menuSpas || !menuSwimspas || !menuPrestaciones || !closeMenu || !previousMenu || !mainMenu || !spasMenu || !swimspasMenu || !prestacionesMenu || !menuBackdrop)
        return;
    menuBurger.forEach((element) => {
        element.addEventListener('click', function () {
            mainMenu.classList.add('active-menu');
            menuBackdrop.classList.add('isOpenBackdrop');
        });
    });
    menuSpas.addEventListener('click', function () {
        spasMenu.classList.add('active-menu');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active-menu');
    });
    menuSwimspas.addEventListener('click', function () {
        swimspasMenu.classList.add('active-menu');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active-menu');
    });
    menuPrestaciones.addEventListener('click', function () {
        prestacionesMenu.classList.add('active-menu');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active-menu');
    });
    closeMenu.forEach((elemet) => {
        elemet.addEventListener('click', function () {
            mainMenu.classList.remove('active-menu');
            menuBackdrop.classList.remove('isOpenBackdrop');
            spasMenu.classList.remove('active-menu');
            swimspasMenu.classList.remove('active-menu');
            prestacionesMenu.classList.remove('active-menu');
        });
    });
    previousMenu.forEach((elemet) => {
        elemet.addEventListener('click', function () {
            mainMenu.classList.add('active-menu');
            spasMenu.classList.remove('active-menu');
            swimspasMenu.classList.remove('active-menu');
            prestacionesMenu.classList.remove('active-menu');
        });
    });
    menuBackdrop.addEventListener('click', function () {
        mainMenu.classList.remove('active-menu');
        spasMenu.classList.remove('active-menu');
        swimspasMenu.classList.remove('active-menu');
        prestacionesMenu.classList.remove('active-menu');
        menuBackdrop.classList.remove('isOpenBackdrop');
    });
    accordionMenu.forEach((elemet, idx) => {
        elemet.addEventListener('click', () => {
            showContentMenu.forEach((el) => {
                el.classList.remove('active-acorddion');
            });
            accordionImg.forEach((el) => {
                el.classList.remove('rotate-90');
            });
            showContentMenu[idx].classList.add('active-acorddion');
            accordionImg[idx].classList.add('rotate-90');
        });
    });
    window.addEventListener('scroll', function () {
        if (window.scrollY > calculateBannerHeight()) {
            navbar.classList.add('white-mode');
            navLinks.forEach((link) => {
                link.classList.remove('link--white');
            });
            navLogo.src = '/dist/assets/icons/logofooter.svg';
            firstMenuBurger.src = '/dist/assets/icons/menu-closed-black.svg';
        }
        else {
            navbar.classList.remove('white-mode');
            navLinks.forEach((link) => {
                link.classList.add('link--white');
            });
            navLogo.src = '/dist/assets/icons/logo-navbar.svg';
            firstMenuBurger.src = '/dist/assets/icons/menu-closed-whait.svg';
        }
    });
    function calculateBannerHeight() {
        const bannerHeight = banner.offsetHeight;
        return bannerHeight;
    }
});
