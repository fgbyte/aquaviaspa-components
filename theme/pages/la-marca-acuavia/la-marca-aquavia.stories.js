export const laMarca = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/css/main.css">
  <title>La Marca Aquavia</title>
</head>

<body>
  <!-- *****HERO******* -->
  <section class="banner banner--video">
    <div id="hero" class="banner__img">
      <img src="/dist/assets/img/pareja-spa-banner-intro.webp" alt="">
      <div class="glightbox play-btn">
        <img src="/dist/assets/icons/play-btn-video.svg" alt="">
      </div>
    </div>
    <div class="banner__text">
      <h1>Aquavia Spa, fabricante de spas y bañeras de hidromasaje líder en Europa</h1>
      <p>Diseño con marca Barcelona, innovación intensiva y absoluta garantía de calidad son tres de los ejes
        principales asociados a Aquavia Spa, fabricante de spas con 35 años de exitosa trayectoria. Seguimos
        apostando por la fabricación propia de spas, a contracorriente de la tendencia mundial de
        deslocalizaciones.</p>
    </div>

    <script src="/dist/vendors/glightbox.min.js"></script>
    <script type="text/javascript">
      document.querySelector('.glightbox.play-btn').addEventListener('click', function () {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/dist/vendors/glightbox.min.css'; //! RUTA DEL CSS de glightbox
        document.head.appendChild(link);
      });
      const lightbox = GLightbox({
        // Agregar la ruta del video debajo
        'href': 'https://mivideo.com',
        'type': 'video',
        'source': 'youtube',
        'width': 900,
        'autoPlayVideos': 'true',
      });
    </script>
  </section>

  <section class="conceptualizamos">
    <p>Conceptualizamos, diseñamos, fabricamos, testeamos y comercializamos nuestros spas mediante un proceso que, bajo
      <span>pedido totalmente personalizado</span>, nos permite servir en un plazo de menos de tres semanas. Esta
      agilidad es posible
      gracias a una estricta programación (en base a procesos LEAN), pero también a la solvencia de un equipo
      profesional enormemente preparado y experimentado.
    </p>
    <p>Aquavia Spa fabrica spas <span>para uso privado y público</span>, bañeras de hidromasaje para cualquier
      naturaleza e
      intensidad de utilización pero siempre orientadas a la exclusividad y a la maximización de prestaciones. De
      nuestra moderna fábrica de spas, de 5.000 metros cuadrados, salen cada año más de 2.000 spas y swimspas dirigidos
      a 40 países de Europa, Asia y África.</p>
  </section>

  <section class="intro intro-ficha bg-info intro-modulo-la-marca-aquavia ">
    <div class="intro__container">
      <div class="intro__container__text">
        <blockquote>Innovación constante, control minucioso y diseño centrado en la experiencia de usuario</blockquote>
        <p>Diseñados, producidos y comercializados exclusivamente desde Barcelona, los spa de Aquavia son líderes en
          calidad, funcionalidad y solvencia técnica.
        </p>
        <p>Controlamos hasta el último detalle: un diseño de vanguardia, materiales minuciosamente seleccionados,
          eficiencia y ergonomía, acabados incontestables y un control de calidad realizado en todos y cada uno de los
          procesos. Todo ello sirve para que cualquiera de nuestras bañeras de hidromasaje sea el producto de mayor
          calidad y prestaciones, el más exclusivo dentro de su propia categoría en el mercado.
        </p>
        <p>Nuestros spa incorporan la última y más alta tecnología al servicio de las personas que los van a utilizar.
          El usuario está en el centro de nuestro esfuerzo en I+D y la calidad en el diseño se fundamenta en mejorar lo
          que se ve y lo que sólo puede sentirse. Esto, combinado con la máxima eficiencia productiva basada en procesos
          LEAN, nos convierte en los más competitivos en valor añadido dentro del mercado de hidromasajes.
        </p>
      </div>
      <div class="intro__container__img">
        <img src="/dist/assets/img/innovación-constante.webp" alt="Made in Europe">
      </div>
    </div>
  </section>


  <!-- *****valores***** -->
  <section class="valores valores-modulo-la-marca-aquavia">
    <h2>VALORES AQUAVIA</h2>
    <div class="valores__card">
      <div class="valores__card__links">
        <details class="dropdown-valor" open>
          <summary class="no-marker link-arrow-grow-white-reverse">
            <div class="d-flex align-items-center container-arrow-white">
              <div class="link__arrow-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
            </div>
            <span id="valor-1">Calidad</span>
          </summary>

          <div class="details-inner">
            <div id="detail-valor-1" class="details-inner__text">
              
            </div>
          </div>
        </details>
        <details class="dropdown-valor">
          <summary class="no-marker link-arrow-grow-white-reverse">
            <div class="d-flex align-items-center container-arrow-white">
              <div class="link__arrow-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
            </div>
            <span id="valor-2">Innovación</span>
          </summary>

          <div class="details-inner">
            <div id="detail-valor-2" class="details-inner__text">
              
            </div>
          </div>
        </details>
        <details class="dropdown-valor">
          <summary class="no-marker link-arrow-grow-white-reverse">
            <div class="d-flex align-items-center container-arrow-white">
              <div class="link__arrow-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
            </div>
            <span id="valor-3">Diseño</span>
          </summary>

          <div class="details-inner">
            <div id="detail-valor-3" class="details-inner__text">
              
            </div>
          </div>
        </details>
        <details class="dropdown-valor">
          <summary class="no-marker link-arrow-grow-white-reverse">
            <div class="d-flex align-items-center container-arrow-white">
              <div class="link__arrow-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
            </div>
            <span id="valor-4">Empatía</span>
          </summary>

          <div class="details-inner">
            <div id="detail-valor-4" class="details-inner__text">
             
            </div>
          </div>
        </details>
        <details class="dropdown-valor">
          <summary class="no-marker link-arrow-grow-white-reverse">
            <div class="d-flex align-items-center container-arrow-white">
              <div class="link__arrow-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
                <g id="Grupo_12494" class="link__arrow-svg-white" data-name="Grupo 12494"
                  transform="translate(-326.008 -160.675)">
                  <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
                    stroke-width="1" />
                  <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
                    stroke-width="1" />
                </g>
              </svg>
            </div>
            <span id="valor-5">Exclusividad</span>
          </summary>

          <div class="details-inner">
            <div id="detail-valor-5" class="details-inner__text">
              
            </div>
          </div>
        </details>
      </div>
      <div class="valores__card__modals">
        <div id="modal-valor-1" class="modal__valor">
          <h5>Nuestra política de calidad es radical, global e integral. </h5>
          <p> No se centra únicamente en el producto final sino en todos y cada uno de los puntos del
            proceso
            de diseño,
            producción, distribución y posventa. Lo confirman nuestras certificaciones (ISO 9001
            para
            sistemas de gestión
            de calidad, marcaje CE sobre las más estrictas normas europeas), pero vamos mucho más
            allá:
            nuestra filosofía
            de empresa incluye la máxima calidad en el trabajo, en las condiciones laborales y en
            nuestra
            relación con el
            entorno y el medioambiente.</p>
        </div>
        <div id="modal-valor-2" class="modal__valor">
          <h5>Modal 2</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum eaque optio cum reprehenderit
            consequuntur sint doloremque exercitationem ipsam maxime qui commodi in iure suscipit! </p>
        </div>
        <div id="modal-valor-3" class="modal__valor">
          <h5>Modal 3</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum eaque optio cum reprehenderit
            consequuntur sint doloremque exercitationem ipsam maxime qui commodi in iure suscipit! </p>
        </div>
        <div id="modal-valor-4" class="modal__valor">
          <h5>Modal 4</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum eaque optio cum reprehenderit
            consequuntur sint doloremque exercitationem ipsam maxime qui commodi in iure suscipit! </p>
        </div>
        <div id="modal-valor-5" class="modal__valor">
          <h5>Modal 5</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum eaque optio cum reprehenderit
            consequuntur sint doloremque exercitationem ipsam maxime qui commodi in iure suscipit! </p>
        </div>
      </div>
    </div>
  </section>

  <!-- *****banner-cta-center***** -->
  <style>
    .banner-cta-center {
      background-image: url(/dist/assets/img/banner-cta-center-bg.webp);
    }

    @media (min-width: 992px) {
      .banner-cta-center {
        background-image: url(/dist/assets/img/banner-cta-center-bg--lg.webp);
      }
    }
  </style>
  <section class="banner-cta-center">
    <div class="banner-cta-center__card">
      <div class="banner-cta-center__card__logo">
        <img src="/dist/assets/icons/banner-cta-center-logo-hoja.svg" alt="">
        <h4>SOSTENIBILIDAD Y MEDIO AMBIENTE</h4>
        <svg width="98px" height="3px" viewBox="0 0 98 3" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L97 1" id="Line" fill="none" fill-rule="evenodd" stroke="#FFFFFF" stroke-width="1"
            stroke-linecap="square" />
        </svg>
      </div>
      <h3>Conoce nuestro <span>Manual de buenas prácticas</span></h3>
    </div>

    <button type="button" class="btn-cta btn-cta-banner btn-cta--sm"><span>VER MÁS</span>
      <div class="d-flex align-items-center btn-cta-banner__inner">
        <div class="btn-cta__arrow"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.026" height="20.162" viewBox="0 0 9.026 20.162">
          <g id="Grupo_12494" class="btn-cta__arrow-svg" data-name="Grupo 12494"
            transform="translate(-326.008 -160.675)">
            <line id="Línea_18" data-name="Línea 18" x1="8.24" y1="10.486" transform="translate(326.401 160.984)"
              stroke-width="1" />
            <line id="Línea_19" data-name="Línea 19" y1="9.029" x2="8.24" transform="translate(326.401 171.471)"
              stroke-width="1" />
          </g>
        </svg>
      </div>
    </button>
  </section>


  <section class="intro-special">
    <div class="intro-header bg-info">
        <h2>Diseño para una vida feliz</h2>
        <p>El diseño no hace la felicidad, pero ayuda. Aquavia Spa concibe el diseño de cada spa en dos direcciones:
            interiormente, en clave ergonómica y terapéutica, para conseguir que cualquier parte del cuerpo pueda
            beneficiarse del masaje óptimo y el máximo bienestar; y exteriormente, desde el punto de vista de la
            estética, hasta el punto de que nuestras bañeras de hidromasaje se convierten en los elementos centrales
            y diferenciales del espacio donde se encuentran. Sin duda, la felicidad no consiste en tener un spa en
            casa. Aunque, ¡qué felicidad, tener un spa!</p>
    </div>
    <div class="intro-special__imgs ">
        <div class="imgs__container">
            <img class="intro-img-bg" src="/dist/assets/img/intro-img-left.webp" alt="imagen de una marca">
            <img class="intro-img-inside" src="/dist/assets/icons/logo-ue.svg" alt="logo de la marca ue">

        </div>
        <div class="imgs__container">
            <img class="intro-img-bg" src="/dist/assets/img/intro-img-right.webp" alt="imagen">
            <img class="intro-img-inside " src="/dist/assets/icons/logo-bcn-desing-white.webp"
                alt="logo de la marca bcn">


        </div>


    </div>
    <button type="button" class="btn-ficha mx-auto px-5">¿QUIERE SER DISTRIBUIDOR?</button>

</section>

  <script src="/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/dist/js/main.js"></script>
</body>

</html>
`