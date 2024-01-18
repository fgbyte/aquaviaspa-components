export const spaListados = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/css/main.css">
  <title>Spas Listado</title>
</head>

<body>
  <!-- *****HERO******* -->
  <section id="hero" class="banner">
    <div class="banner__img">
      <img src="/dist/assets/img/card-beneficios1.webp" alt="">
    </div>
    <div class="banner__text">
      <h1>Spas</h1>
      <h2>Spas de exterior e interior para cada uso y necesidad.</h2>
      <p>Todos nuestros spas son aptos para exterior e interior y reúnen la calidad y las prestaciones para ser
        considerados exclusivos dentro de su segmento en el mercado. En Aquavia Spa hemos diseñado diferentes
        categorías, como diferentes son los usuarios que quieren comprar un spa y las necesidades de su uso.
        Nuestra clara vocación es la de acercarnos a cada perfil de cliente y superar sus expectativas.</p>
    </div>
  </section>

  <!-- *****Spas Grid******* -->
  <section class="spas-grid">
    <div class="dropdown-filters">
      <div class="dropdown">
        <a class="link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Capacidad
          <span><img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg" alt=""></span>
        </a>
        <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">2-3</a></li>
          <li><a class="dropdown-item" href="#">4-5</a></li>
          <!-- <li>
                      <hr class="dropdown-divider">
                    </li> -->
          <li><a class="dropdown-item" href="#">6-7*</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <a class="link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Uso
          <span><img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg" alt=""></span>
        </a>
        <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">2-3</a></li>
          <li><a class="dropdown-item" href="#">4-5</a></li>
          <!-- <li>
                      <hr class="dropdown-divider">
                    </li> -->
          <li><a class="dropdown-item" href="#">6-7*</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <a class="link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Instalación
          <span><img src="/dist/assets/icons/link-menu-arrow--lang-arrow.svg" alt=""></span>
        </a>
        <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">2-3</a></li>
          <li><a class="dropdown-item" href="#">4-5</a></li>
          <!-- <li>
                          <hr class="dropdown-divider">
                        </li> -->
          <li><a class="dropdown-item" href="#">6-7*</a></li>
        </ul>
      </div>
      <a class="link spas-grid__filter--link" href="#">Top Ventas</a>

    </div>

    <div class="spas-grid__cards">
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="card-spa">
        <div class="card-spa__container">
          <img class="card-spa__img" src="/dist/assets/img/spa-nice.webp" alt="spa-nice">
          <img class="card-spa__img--hover" src="/dist/assets/img/spa-nice-hover.webp" alt="">
        </div>
        <div class="card-spa__text">
          <h3>Spa Nice</h3>
          <div class="card-spa__details">
            <div>
              <p>216 x 216 - 5 plazas</p>
              <p>Colección Premium Spa</p>
            </div>
            <div class="card-spa__details--price">
              <p>$$</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="load-more">
      <svg id="loadMore" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
        <g id="Grupo_12510" data-name="Grupo 12510" transform="translate(-155.367 -4028.813)">
          <circle id="Elipse_23" data-name="Elipse 23" cx="22" cy="22" r="22" transform="translate(155.367 4028.813)"
            fill="#aaf0f4" />
          <g id="Grupo_12204" data-name="Grupo 12204" transform="translate(163.563 4037.984)">
            <line id="Línea_77" data-name="Línea 77" x2="26.256" transform="translate(0 13.128)" fill="none" stroke="#fff"
              stroke-width="2" />
            <line id="Línea_78" data-name="Línea 78" x2="26.256" transform="translate(13.128 0) rotate(90)" fill="none"
              stroke="#fff" stroke-width="2" />
          </g>
        </g>
      </svg>
    </div>
  </section>
  <div class="sticky-btn">
    <a href="#" class="btn-blue">DESCARGAR CATÁLOGO</a>
  </div>
  <script src="/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/dist/js/main.js"></script>
</body>

</html>
`