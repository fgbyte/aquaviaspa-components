"use strict";
//dropdown-card lg disposition
document.addEventListener('DOMContentLoaded', function () {
    var detailsElement = document.querySelectorAll('.dropdown-card');
    if (window.matchMedia('(min-width: 992px)').matches) {
        // Si la pantalla es 'lg' o más grande
        detailsElement.forEach(function (element) {
            element.toggleAttribute('open');
        });
    }
});
//banner-ficha
window.addEventListener('resize', adjustBannerFicha);
function adjustBannerFicha() {
    var bannerFichaCard = document.querySelector('.banner-ficha__card__img');
    var bannerFicha = document.querySelector('.banner-ficha');
    var lgSize = 992;
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
var carouselsTopVentas = document.querySelectorAll(".top-ventas__container");
var controlsList1 = document.querySelectorAll(".guias-top-ventas");
carouselsTopVentas.forEach(function (carousel, carouselIndex) {
    var controls = controlsList1[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-top-ventas");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-spa");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-spa");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var activeControlIndex = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
        setActiveControl(activeControlIndex);
    });
});
//transform module
var cardTransform = document.querySelector("#card-transform");
var cardTransformRight = document.querySelector(".card-transform-right");
var transformModule = document.querySelector(".transform-module");
document.addEventListener('DOMContentLoaded', function () {
    if (cardTransformRight) {
        cardTransformRight.addEventListener('mouseover', function (e) {
            if (window.innerWidth > 993) {
                if (cardTransform) {
                    cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.add('opac');
                }
            }
        });
        cardTransformRight.addEventListener('mouseout', function (e) {
            if (cardTransform) {
                cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.remove('opac');
            }
        });
    }
});
var cascos = Array.from({ length: 10 }, function (_, i) {
    return document.querySelectorAll("#casco-".concat(i + 1));
});
var muebles = Array.from({ length: 10 }, function (_, i) {
    return document.querySelectorAll("#mueble-".concat(i + 1));
});
function checkFirstMueble(index) {
    // Primero, removemos el estado 'checked' de todos los inputs en todos los muebles
    muebles.forEach(function (nodeList) {
        nodeList.forEach(function (mueble) {
            if (mueble instanceof HTMLElement) {
                var input = mueble.querySelector('input[type="radio"]');
                if (input instanceof HTMLInputElement) {
                    input.checked = false; // Establece la propiedad checked a false
                }
            }
        });
    });
    // Luego, establecemos el estado 'checked' al primer input del mueble con el índice correspondiente
    var firstMueble = muebles[index][0];
    if (firstMueble instanceof HTMLElement) {
        var input = firstMueble.querySelector('input[type="radio"]');
        if (input instanceof HTMLInputElement) {
            input.checked = true; // Establece la propiedad checked a true
        }
    }
}
//ocultar al principio todos los muebles menos el 1ro
muebles.forEach(function (nodeList, index) {
    nodeList.forEach(function (mueble) {
        if (mueble instanceof HTMLElement) {
            mueble.style.display = index === 0
                ? 'flex'
                : 'none';
        }
    });
});
//por cada casco checked mostrar el mueble correspondiente
cascos.forEach(function (nodeList, i) {
    nodeList.forEach(function (casco, _) {
        casco.addEventListener('click', function () {
            checkFirstMueble(i); //reset al 1er mueble del casco en cuestión
            muebles.forEach(function (nodeList, j) {
                if (nodeList) {
                    nodeList.forEach(function (mueble, _) {
                        if (mueble instanceof HTMLElement) {
                            mueble.style.display = i === j
                                ? 'flex'
                                : 'none';
                        }
                    });
                }
            });
        });
    });
});
var mueble1Inputs = document.querySelectorAll('#mueble-1 input');
var mueble2Inputs = document.querySelectorAll('#mueble-2 input');
var mueble3Inputs = document.querySelectorAll('#mueble-3 input');
var cascoInputs = document.querySelectorAll('#casco-1, #casco-2, #casco-3');
var imgs = document.querySelectorAll('.acabados__content__imgs img');
function updateFurnitureImages() {
    imgs.forEach(function (img) {
        img.style.display = 'none';
    });
    if (mueble1Inputs[0].checked) {
        imgs[0].style.display = 'block';
    }
    else if (mueble1Inputs[1].checked) {
        imgs[1].style.display = 'block';
    }
    else if (mueble1Inputs[2].checked) {
        imgs[2].style.display = 'block';
    }
    else if (mueble1Inputs[3].checked) {
        imgs[3].style.display = 'block';
    }
    else if (mueble2Inputs[0].checked) {
        imgs[4].style.display = 'block';
    }
    else if (mueble2Inputs[1].checked) {
        imgs[5].style.display = 'block';
    }
    else if (mueble2Inputs[2].checked) {
        imgs[6].style.display = 'block';
    }
    else if (mueble3Inputs[0].checked) {
        imgs[7].style.display = 'block';
    }
    else if (mueble3Inputs[1].checked) {
        imgs[8].style.display = 'block';
    }
}
function showFirstImage() {
    var helmet1Img = imgs[0];
    var helmet2Img = imgs[4];
    var helmet3Img = imgs[7];
    helmet1Img.style.display = 'none';
    helmet2Img.style.display = 'none';
    helmet3Img.style.display = 'none';
    if (cascoInputs[0].checked) {
        helmet1Img.style.display = 'block';
    }
    if (cascoInputs[1].checked) {
        helmet2Img.style.display = 'block';
    }
    if (cascoInputs[2].checked) {
        helmet3Img.style.display = 'block';
    }
    updateFurnitureImages();
}
mueble1Inputs.forEach(function (input) {
    input.addEventListener('change', showFirstImage);
});
mueble2Inputs.forEach(function (input) {
    input.addEventListener('change', showFirstImage);
});
mueble3Inputs.forEach(function (input) {
    input.addEventListener('change', showFirstImage);
});
cascoInputs.forEach(function (input) {
    input.addEventListener('change', showFirstImage);
});
showFirstImage();
var accseoriosSlider = document.querySelectorAll(".accseorios-slider");
var guiasAccseoriosSlider = document.querySelectorAll(".guias-accseorios-slider");
accseoriosSlider.forEach(function (carousel, carouselIndex) {
    var controls = guiasAccseoriosSlider[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-accseorios-slider");
    var previousItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-slider-accsesorios-left");
    var nextItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-slider-accsesorios-right");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    nextItem === null || nextItem === void 0 ? void 0 : nextItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) + 1;
            moveItems(newIndex);
        }
    });
    previousItem === null || previousItem === void 0 ? void 0 : previousItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) - 1;
            moveItems(newIndex);
        }
    });
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-accesorios");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var controlIndex = Math.floor(scrollPos / cardWidth.offsetWidth);
        setActiveControl(controlIndex);
    });
});
//categories
//pr-#
var links = Array.from({ length: 5 }, function (_, i) { return document.querySelectorAll("#pr-".concat(i + 1)); });
//prest-#
var cards = Array.from({ length: 5 }, function (_, i) { return document.querySelectorAll("#prest-".concat(i + 1)); });
var special = 1158;
function showOnly(cardNumber) {
    cards.forEach(function (nodeCard, index) {
        nodeCard.forEach(function (singleCard) {
            if (singleCard instanceof HTMLElement) {
                singleCard.style.display = index === cardNumber
                    ? 'block'
                    : 'none';
                singleCard.style.transition = index === cardNumber
                    ? 'all 1000ms'
                    : 'all 1000ms';
                singleCard.style.visibility = index === cardNumber
                    ? 'visible'
                    : 'hidden';
                singleCard.style.display = index === cardNumber
                    ? 'block'
                    : 'block';
                singleCard.style.position = index === cardNumber
                    ? 'relative'
                    : 'absolute';
                singleCard.style.opacity = index === cardNumber
                    ? '1'
                    : '0';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    //ocultar los modales al principio menos el 1 solo en LG
    if (window.matchMedia("(min-width: ".concat(special, "px)")).matches) {
        showOnly(0); //el 1ro del array
    }
    window.addEventListener('resize', function () {
        if (window.matchMedia("(min-width: ".concat(special, "px)")).matches) {
            showOnly(0); //el 1ro del array
        }
        else {
            cards.forEach(function (nodeCard) {
                nodeCard.forEach(function (singleCard) {
                    if (singleCard instanceof HTMLElement) {
                        singleCard.style.display = 'block';
                        singleCard.style.visibility = 'visible';
                        singleCard.style.transition = 'all 1000ms';
                        singleCard.style.position = 'relative';
                        singleCard.style.opacity = '1';
                    }
                });
            });
        }
    });
    links.forEach(function (nodeLink, i) {
        nodeLink.forEach(function (singleLink, _) {
            singleLink.addEventListener('click', function () {
                cards.forEach(function (nodeCard, j) {
                    if (nodeCard) {
                        nodeCard.forEach(function (singleCard, __) {
                            if (singleCard instanceof HTMLElement) {
                                singleCard.style.transition = i === j
                                    ? 'all 1000ms'
                                    : 'all 1000ms';
                                singleCard.style.visibility = i === j
                                    ? 'visible'
                                    : 'hidden';
                                singleCard.style.display = i === j
                                    ? 'block'
                                    : 'block';
                                singleCard.style.position = i === j
                                    ? 'relative'
                                    : 'absolute';
                                singleCard.style.opacity = i === j
                                    ? '1'
                                    : '0';
                            }
                        });
                    }
                });
            });
        });
    });
});
//prestaciones sliders
document.addEventListener('DOMContentLoaded', function () {
    var prestacionesGroups = document.querySelectorAll(".prestaciones-cards");
    var guiasPrestacionesGroups = document.querySelectorAll(".guias-prestaciones-cards");
    prestacionesGroups.forEach(function (prestaciones, groupIndex) {
        var controls = guiasPrestacionesGroups[groupIndex];
        var controlItems = controls.querySelectorAll(".controls-prestaciones-cards");
        setActiveControl(0);
        function setActiveControl(index) {
            controlItems.forEach(function (item, i) {
                if (i === index) {
                    item.classList.add("control-prestaciones-active");
                }
                else {
                    item.classList.remove("control-prestaciones-active");
                }
            });
        }
        controlItems.forEach(function (item, index) {
            item.addEventListener("click", function () {
                moveItems(index, prestaciones);
            });
        });
        var moveItems = function (index, carousel) {
            var cardWidth = carousel.querySelector(".card-prestacion");
            if (cardWidth) {
                carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
            }
        };
        prestaciones.addEventListener("scroll", function () {
            var cardWidth = prestaciones.querySelector(".card-prestacion");
            if (prestaciones === null || !cardWidth)
                return;
            var scrollPos = prestaciones.scrollLeft;
            var activeControlIndex = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
            setActiveControl(activeControlIndex);
        });
    });
});
//prestaciones module
document.addEventListener('DOMContentLoaded', function () {
    var filterLinks = Array.from({ length: 6 }, function (_, i) { return document.querySelectorAll("#fil-".concat(i + 1)); });
    var categories = Array.from({ length: 6 }, function (_, i) { return document.querySelectorAll("#category-".concat(i + 1)); });
    //links logic
    filterLinks.forEach(function (nodeLink) {
        nodeLink.forEach(function (link) {
            link.addEventListener('click', function (event) {
                if (window.matchMedia("(min-width: ".concat(special, "px)")).matches) {
                    showOnly(0); //el 1ro del array
                }
                // Remove 'checked' attribute from all filter links
                filterLinks.forEach(function (otherLink) {
                    otherLink.forEach(function (element) {
                        element.removeAttribute('checked');
                    });
                });
                // Add 'checked' attribute to the clicked link
                var clickedLink = event.target;
                clickedLink.setAttribute('checked', '');
            });
        });
    });
    //only 1 first logic
    categories.forEach(function (nodeCat, index) {
        nodeCat.forEach(function (singleCat) {
            if (singleCat instanceof HTMLElement) {
                singleCat.style.display = index === 0
                    ? 'flex'
                    : 'none';
            }
        });
    });
    //render logic
    filterLinks.forEach(function (nodeLink, i) {
        nodeLink.forEach(function (singleLink, _) {
            singleLink.addEventListener('click', function () {
                categories.forEach(function (nodeCat, j) {
                    if (nodeCat) {
                        nodeCat.forEach(function (singleCat, __) {
                            if (singleCat instanceof HTMLElement) {
                                singleCat.style.display = i === j
                                    ? 'flex'
                                    : 'none';
                            }
                        });
                    }
                });
            });
        });
    });
});
var prestacionesSliderSlider = document.querySelectorAll(".prestaciones-slider__slider");
var guiasPrestacionesSliderSlider = document.querySelectorAll(".guias-prestaciones-slider__slider");
prestacionesSliderSlider.forEach(function (carousel, carouselIndex) {
    var controls = guiasPrestacionesSliderSlider[carouselIndex];
    var controlItems = controls.querySelectorAll(".controls-prestaciones-slider__slider");
    var previousItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-prestaciones-slider-left");
    var nextItem = document === null || document === void 0 ? void 0 : document.querySelector(".arrow-prestaciones-slider-right");
    setActiveControl(0);
    function setActiveControl(index) {
        controlItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add("control-active");
            }
            else {
                item.classList.remove("control-active");
            }
        });
    }
    nextItem === null || nextItem === void 0 ? void 0 : nextItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) + 1;
            moveItems(newIndex);
        }
    });
    previousItem === null || previousItem === void 0 ? void 0 : previousItem.addEventListener("click", function () {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (carousel && cardWidth) {
            var newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) - 1;
            moveItems(newIndex);
        }
    });
    controlItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            moveItems(index);
        });
    });
    var moveItems = function (index) {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (cardWidth) {
            carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
        }
    };
    carousel.addEventListener("scroll", function () {
        var cardWidth = carousel.querySelector(".card-prestacion-lite");
        if (carousel === null || !cardWidth)
            return;
        var scrollPos = carousel.scrollLeft;
        var controlIndex = Math.floor(scrollPos / cardWidth.offsetWidth);
        setActiveControl(controlIndex);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    //Valores module
    var tabsValores = Array.from({ length: 5 }, function (_, i) { return document.getElementById("valor-".concat(i + 1)); });
    var modalsValores = Array.from({ length: 5 }, function (_, i) { return document.getElementById("modal-valor-".concat(i + 1)); });
    //ocultar los modales al principio menos el 1
    modalsValores.forEach(function (modal, i) {
        if (modal) {
            modal.style.display = i === 0 ? 'block' : 'none';
        }
    });
    //agregar eventListener a las tabsValores
    tabsValores.forEach(function (tab, i) {
        if (tab) {
            tab.addEventListener('click', function () {
                modalsValores.forEach(function (modal, j) {
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
    var navbar = document.querySelector('#navbar');
    if (!navbar)
        return;
    var banner = document.querySelector('#hero');
    var navLinks = navbar.querySelectorAll('.link');
    var navLogo = navbar.querySelector('#navlogo');
    var firstMenuBurger = navbar.querySelector('.menu-burger');
    var menuBurger = navbar.querySelectorAll('.menu-burger');
    var menuSpas = navbar.querySelector('#spas');
    var menuSwimspas = navbar.querySelector('#swimspas');
    var menuPrestaciones = navbar.querySelector('#prestaciones');
    var closeMenu = navbar.querySelectorAll('.close-menu');
    var previousMenu = navbar.querySelectorAll('.previous-menu');
    var mainMenu = document.querySelector('.main-menu');
    var spasMenu = document.querySelector('.spas-menu');
    var swimspasMenu = document.querySelector('.swimspas-menu');
    var prestacionesMenu = document.querySelector('.prestaciones-menu');
    var menuBackdrop = document.querySelector('.menuBackdrop');
    var accordionMenu = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.accordion-menu');
    var showContentMenu = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.show-content-menu');
    var accordionImg = navbar === null || navbar === void 0 ? void 0 : navbar.querySelectorAll('.accordion-img');
    if (!banner || !navLinks || !navLogo || !firstMenuBurger || !menuBurger || !menuSpas || !menuSwimspas || !menuPrestaciones || !closeMenu || !previousMenu || !mainMenu || !spasMenu || !swimspasMenu || !prestacionesMenu || !menuBackdrop)
        return;
    menuBurger.forEach(function (element) {
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
    closeMenu.forEach(function (elemet) {
        elemet.addEventListener('click', function () {
            mainMenu.classList.remove('active-menu');
            menuBackdrop.classList.remove('isOpenBackdrop');
            spasMenu.classList.remove('active-menu');
            swimspasMenu.classList.remove('active-menu');
            prestacionesMenu.classList.remove('active-menu');
            showContentMenu.forEach(function (content) { return content.classList.remove('active-acorddion'); });
            accordionImg.forEach(function (img) { return img.classList.remove('rotate-90'); });
        });
    });
    previousMenu.forEach(function (elemet) {
        elemet.addEventListener('click', function () {
            mainMenu.classList.add('active-menu');
            spasMenu.classList.remove('active-menu');
            swimspasMenu.classList.remove('active-menu');
            prestacionesMenu.classList.remove('active-menu');
            showContentMenu.forEach(function (content) { return content.classList.remove('active-acorddion'); });
            accordionImg.forEach(function (img) { return img.classList.remove('rotate-90'); });
        });
    });
    menuBackdrop.addEventListener('click', function () {
        mainMenu.classList.remove('active-menu');
        spasMenu.classList.remove('active-menu');
        swimspasMenu.classList.remove('active-menu');
        prestacionesMenu.classList.remove('active-menu');
        menuBackdrop.classList.remove('isOpenBackdrop');
        showContentMenu.forEach(function (content) { return content.classList.remove('active-acorddion'); });
        accordionImg.forEach(function (img) { return img.classList.remove('rotate-90'); });
    });
    accordionMenu.forEach(function (element, idx) {
        element.addEventListener('click', function () {
            if (showContentMenu[idx].classList.contains('active-acorddion')) {
                showContentMenu[idx].classList.remove('active-acorddion');
                accordionImg[idx].classList.remove('rotate-90');
            }
            else {
                showContentMenu.forEach(function (el, index) {
                    if (index !== idx) {
                        el.classList.remove('active-acorddion');
                        accordionImg[index].classList.remove('rotate-90');
                    }
                });
                showContentMenu[idx].classList.add('active-acorddion');
                accordionImg[idx].classList.add('rotate-90');
            }
        });
    });
    window.addEventListener('scroll', function () {
        if (window.scrollY > calculateBannerHeight()) {
            navbar.classList.add('white-mode');
            navLinks.forEach(function (link) {
                link.classList.remove('link--white');
            });
            navLogo.src = '/dist/assets/icons/logofooter.svg';
            firstMenuBurger.src = '/dist/assets/icons/menu-closed-black.svg';
        }
        else {
            navbar.classList.remove('white-mode');
            navLinks.forEach(function (link) {
                link.classList.add('link--white');
            });
            navLogo.src = '/dist/assets/icons/logo-navbar.svg';
            firstMenuBurger.src = '/dist/assets/icons/menu-closed-whait.svg';
        }
    });
    function calculateBannerHeight() {
        var bannerHeight = banner.offsetHeight;
        var navbarHeight = navbar.offsetHeight;
        return bannerHeight - navbarHeight;
    }
});
