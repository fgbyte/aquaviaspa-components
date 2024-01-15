const mueble1Inputs = document.querySelectorAll<HTMLInputElement>('#mueble-1 input');
const mueble2Inputs = document.querySelectorAll<HTMLInputElement>('#mueble-2 input');
const mueble3Inputs = document.querySelectorAll<HTMLInputElement>('#mueble-3 input');
const cascoInputs = document.querySelectorAll<HTMLInputElement>('#casco-1, #casco-2, #casco-3');
const imgs = document.querySelectorAll<HTMLImageElement>('.acabados__content__imgs img');

/* aqui dependiendo del mueble lo pongo en block o en none */
function actualizarImagenesMueble(): void {
  imgs.forEach((img) => {
    img.style.display = 'none';
  });

  if (mueble1Inputs[0].checked) {
    imgs[0].style.display = 'block';
  } else if (mueble1Inputs[1].checked) {
    imgs[1].style.display = 'block';
  } else if (mueble1Inputs[2].checked) {
    imgs[2].style.display = 'block';
  } else if (mueble1Inputs[3].checked) {
    imgs[3].style.display = 'block';
  } else if (mueble2Inputs[0].checked) {
    imgs[4].style.display = 'block';
  } else if (mueble2Inputs[1].checked) {
    imgs[5].style.display = 'block';
  } else if (mueble2Inputs[2].checked) {
    imgs[6].style.display = 'block';
  } else if (mueble3Inputs[0].checked) {
    imgs[7].style.display = 'block';
  } else if (mueble3Inputs[1].checked) {
    imgs[8].style.display = 'block';
  }
}

/* si tocas en un casco se renderizo solo el primeo*/

function mostrarPrimeraImagen(): void {
  const casco1Img = imgs[0];
  const casco2Img = imgs[4];
  const casco3Img = imgs[7];

  casco1Img.style.display = 'none';
  casco2Img.style.display = 'none';
  casco3Img.style.display = 'none';

  if (cascoInputs[0].checked) {
    casco1Img.style.display = 'block';
  }

  if (cascoInputs[1].checked) {
    casco2Img.style.display = 'block';
  }

  if (cascoInputs[2].checked) {
    casco3Img.style.display = 'block';
  }

  actualizarImagenesMueble();
}

mueble1Inputs.forEach((input) => {
  input.addEventListener('change', mostrarPrimeraImagen);
});

mueble2Inputs.forEach((input) => {
  input.addEventListener('change', mostrarPrimeraImagen);
});

mueble3Inputs.forEach((input) => {
  input.addEventListener('change', mostrarPrimeraImagen);
});

cascoInputs.forEach((input) => {
  input.addEventListener('change', mostrarPrimeraImagen);
});

mostrarPrimeraImagen();