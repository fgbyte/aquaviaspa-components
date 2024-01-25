export const descargar = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/css/main.css">
  <title>Descargar catálogo</title>
</head>

<body>
  
  <!-- *****HERO******* -->
  <section class="banner-descargar-catalogo">
    <div id="hero" class="banner-text">
      <div>
        <img class="banner-descargar-catalogo__img" src="/dist/assets/img/Catálogo-Aquavia-Spa.webp" alt="imagen">

      </div>
      <h1>Descargar catálogo</h1>
    </div>
  </section>



  <!-- *****Form***** -->
  <form class="form-full bg-light mx-auto form-full-page-descargar-catalogo">
    <div class="descargar-catalogo-header">
      <h2>Rellene el siguiente formulario para descargar el catálogo:</h2>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span>Nombre*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span> Apellidos*</span>
        <input type="text">
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> Teléfono*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span> Correo elecrónico*</span>
        <input type="text">
      </label>
    </div>
    <div class="form-full__container  ">
      <label class="d-flex flex-column w-100" for="">
        <span> Código postal*</span>
        <input type="text">
      </label>
      <label class="d-flex flex-column w-100" for="">
        <span> Polación*</span>
        <input type="text">
      </label>
    </div>

    <label class="d-flex flex-column w-100 pb-4">
      <span>País*</span>
      <select class="form-full__select" id="opciones" name="opciones">
        <option value="opcion1">– Por favor, elija una opción –</option>
        <option value="opcion2">– Por favor, elija una opción –</option>
        <option value="opcion3">– Por favor, elija una opción –</option>
      </select>
    </label>

    <label class="form-full__checkbox">

      <p><input type="checkbox" id="miCheckbox" name="miCheckbox">Al enviar el formulario, acepto que estoy
        de acuerdo con los <a href="#"><b>términos y condiciones.</b></a></p>
    </label>

    <div class="mx-auto text-center form-full__terms">Este sitio está protegido por reCAPTCHA y se aplican la <a
        href="#"><b>política
          de privacidad</b></a> y los <a href="#"><b>términos de servicio</b></a> de Google.
    </div>


    <button type="button" class="btn-ficha">Enviar</button>

  </form>



  <script src="/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/dist/js/main.js"></script>
</body>

</html>
`