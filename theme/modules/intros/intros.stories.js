export const intro = `
<section class="intro">
<div class="intro__container">
    <div class="intro__container__text">
        <blockquote>Aquavia Spa, <span>líder europeo en la fabricación de spas y swimspas</span></blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="intro__container__img">
        <img src="/dist/assets/img/intro-home.png" alt="Made in Europe">
    </div>
</div>
</section>
`

export const introFicha1 = `
<section class="intro intro-ficha bg-info">
        <div class="intro__container">
            <div class="intro__container__text">
                <blockquote>Un spa minimalista con prestaciones máximas</blockquote>
                <p><b>Menos es más,</b> decía el celebérrimo arquitecto Mies Van de Rohe. Este
                    minimalismo es lo que busca el Spa Quantum, una bañera de hidromasaje sin ornamentos
                    ni artificios, claramente pensado para aquellos usuarios a quienes les gusta
                    ostentar poco y demostrar con hechos. En este sentido, el Spa Quantum es una
                    enormemente efectiva máquina de hidroterapia para una multitud de utilidades
                    diferentes, desde el puro relax hasta la descontracturación muscular tras un
                    esfuerzo físico.
                    <br>
                    <b>Si desea comprar un spa exclusivo pero minimalista, vesátil pero completo, de
                        altas prestaciones y a un precio justo, he aquí el Spa Quantum.</b>
                </p>
            </div>
            <div class="intro__container__img">
                <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
            </div>
        </div>
    </section>
`

export const introFichaSlider1 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/css/main.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <section class="intro intro-ficha bg-info">
        <div class="intro__container">
            <div class="intro__container__text">
                <blockquote>Un spa minimalista con prestaciones máximas</blockquote>
                <p><b>Menos es más,</b> decía el celebérrimo arquitecto Mies Van de Rohe. Este
                    minimalismo es lo que busca el Spa Quantum, una bañera de hidromasaje sin ornamentos
                    ni artificios, claramente pensado para aquellos usuarios a quienes les gusta
                    ostentar poco y demostrar con hechos. En este sentido, el Spa Quantum es una
                    enormemente efectiva máquina de hidroterapia para una multitud de utilidades
                    diferentes, desde el puro relax hasta la descontracturación muscular tras un
                    esfuerzo físico.
                    <br>
                    <b>Si desea comprar un spa exclusivo pero minimalista, vesátil pero completo, de
                        altas prestaciones y a un precio justo, he aquí el Spa Quantum.</b>
                </p>
            </div>
            <div class="slider-container">
                <div class="swiper swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
                        </div>
                        <div class="swiper-slide">
                            <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="Made in Europe">
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>

    <!-- ScriptJS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var swiper = new Swiper('.swiper', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                },
            });
        });
    </script>
    <script src="/dist/js/main.js"></script>

</body>

</html>
`