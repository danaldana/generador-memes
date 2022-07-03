

// --- BOTONES MENU PRINCIPAL --- //

// --- selección de elementos HTML ---

const botonImg = document.getElementById('boton-img');
const botonTxt = document.getElementById('boton-texto');
const aside = document.getElementById('aside');
const cierreAside = document.getElementById('cierre-aside');
const formularioTexto = document.getElementById('formulario-texto');
const formularioImagen = document.getElementById('formulario-imagen');

// --- funciones y eventos ---

// abrir panel imagen
botonImg.addEventListener('click', () => {
    aside.classList.remove('aside-oculto');
    aside.style.display = 'block';
    formularioTexto.style.display = 'none';
    formularioImagen.style.display = 'block';
})

// abril panel texto
botonTxt.addEventListener('click', () => {
    aside.classList.remove('aside-oculto');
    aside.style.display = 'block';
    formularioImagen.style.display = 'none';
    formularioTexto.style.display = 'block';
})

// cierre panel
cierreAside.addEventListener('click',() => {
    aside.style.display = 'none';
})


// --- BOTONES MODO CLARO / OSCURO --- //

// --- selección de elementos HTML ---

const botonModoClaro = document.getElementById('boton-modo-claro');
const botonModoOscuro = document.getElementById('boton-modo-oscuro');

// --- funciones y eventos ---

// volver a modo claro
botonModoClaro.addEventListener('click', () => {
    botonModoClaro.classList.add('ocultar');
    botonModoOscuro.classList.remove('ocultar');
    document.body.classList.remove('modo-oscuro');
    document.body.classList.add('modo-claro');
})

// volver a modo oscuro
botonModoOscuro.addEventListener('click', () => {
    botonModoOscuro.classList.add('ocultar');
    botonModoClaro.classList.remove('ocultar');
    document.body.classList.remove('modo-claro');
    document.body.classList.add('modo-oscuro');
})


// --- FUNCIONALIDADES IMAGEN --- //

// --- selección de elementos HTML ---

const espacioSuperior = document.getElementById('espacio-superior');
const imagenMeme = document.getElementById('imagen-meme');
const espacioInferior = document.getElementById('espacio-inferior');
const propiedadFondo = document.getElementById('propiedad-fondo');
const rangosFiltros = document.getElementsByClassName('input-rango');
const url = document.getElementById('url');
const fondoColor = document.getElementById('fondo-color');
const codigoColorImagen = document.getElementById('código-color-imagen');
const restrablecerFiltros = document.getElementById('restablecer-filtros');

// --- funciones y eventos ---

// url
url.addEventListener('keyup', () => {
    const urlImg = url.value;
    imagenMeme.style.backgroundImage = `url("${urlImg}")`;
    imagenMeme.classList.add('imagen-fondo');
})

// color de fondo
fondoColor.addEventListener('input', () => {
    imagenMeme.style.backgroundColor = fondoColor.value;
    codigoColorimagen.innerHTML = `${fondoColor.value}`;
})

// mix blend
propiedadFondo.addEventListener('change', () => imagenMeme.style.mixBlendMode = propiedadFondo.value)

// rangos de los filtros
const filtrosMeme = () => {
    imagenMeme.style.filter = `brightness(${rangosFiltros[0].value}) opacity(${rangosFiltros[1].value}) contrast(${rangosFiltros[2].value}%) blur(${rangosFiltros[3].value}px) grayscale(${rangosFiltros[4].value}%) sepia(${rangosFiltros[5].value}%) hue-rotate(${rangosFiltros[6].value}deg) saturate(${rangosFiltros[7].value}%) invert(${rangosFiltros[8].value})`;
}

rangosFiltros[0].addEventListener('change', filtrosMeme);
rangosFiltros[1].addEventListener('change', filtrosMeme);
rangosFiltros[2].addEventListener('change', filtrosMeme);
rangosFiltros[3].addEventListener('change', filtrosMeme);
rangosFiltros[4].addEventListener('change', filtrosMeme);
rangosFiltros[5].addEventListener('change', filtrosMeme);
rangosFiltros[6].addEventListener('change', filtrosMeme);
rangosFiltros[7].addEventListener('change', filtrosMeme);
rangosFiltros[8].addEventListener('change', filtrosMeme);

// reestablecer filtros
restrablecerFiltros.addEventListener('click', (e) => {
    e.preventDefault();
    rangosFiltros[0].value = '1';
    rangosFiltros[1].value = '1';
    rangosFiltros[2].value = '100';
    rangosFiltros[3].value = '0';
    rangosFiltros[4].value = '0';
    rangosFiltros[5].value = '0';
    rangosFiltros[6].value = '0';
    rangosFiltros[7].value = '100';
    rangosFiltros[8].value = '0';
    filtrosMeme();
})


// --- FUNCIONALIDADES TEXTO --- //

// --- elementos del html ---

const textoSuperiorInput = document.getElementById('texto-superior-input');
const textoInferiorInput = document.getElementById('texto-inferior-input');
const textoSuperior = document.getElementById('texto-superior');
const checkSuperior = document.getElementById('check-superior');
const textoInferior = document.getElementById('texto-inferior');
const checkInferior = document.getElementById('check-inferior');
const opcionFuente = document.getElementById('opcion-fuente');
const inputTamano = document.getElementById('input-tamano');
const izquierda = document.getElementById('izquierda');
const centro = document.getElementById('centro');
const derecha = document.getElementById('derecha');
const colorLetra = document.getElementById('color-letra');
const colorFondo = document.getElementById('color-fondo');
const codigoColorTexto = document.getElementsByClassName('código-color-texto');
const checkSinFondo = document.getElementById('check-sin-fondo');
const sinContorno = document.getElementById('sin-contorno');
const contornoClaro = document.getElementById('contorno-claro');
const contornoOscuro = document.getElementById('contorno-oscuro');
const espaciado = document.getElementById('espaciado');
const interlineado = document.getElementById('interlineado');


// --- funciones y eventos ---

// ingreso de texto superior e inferior
textoSuperiorInput.addEventListener('keyup', () => textoSuperior.innerHTML = textoSuperiorInput.value);
textoInferiorInput.addEventListener('keyup', () => textoInferior.innerHTML = textoInferiorInput.value);

// sin texto superior
checkSuperior.addEventListener('click', () => {
    if (checkSuperior.checked){
        espacioSuperior.style.display = 'none';
    } else {
        espacioSuperior.style.display = '';
        }
})

// sin texto inferior
checkInferior.addEventListener('click', () => {
    if (checkInferior.checked){
        espacioInferior.style.display = 'none';
    } else {
        espacioInferior.style.display = '';
        }
})

// eleccion de fuente
opcionFuente.addEventListener('change', () => {
    textoSuperior.style.fontFamily = `${opcionFuente.value}`;
    textoInferior.style.fontFamily = `${opcionFuente.value}`;
})

// tamaño texto
inputTamano.addEventListener('input', () => {
    textoSuperior.style.fontSize = `${inputTamano.value}px`;
    textoInferior.style.fontSize = `${inputTamano.value}px`;
})

inputTamano.addEventListener('keyup', () => {
    textoSuperior.style.fontSize = `${inputTamano.value}px`;
    textoInferior.style.fontSize = `${inputTamano.value}px`;
})

// alineación texto
izquierda.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'left';
    textoInferior.style.textAlign = 'left';
})

centro.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'center';
    textoInferior.style.textAlign = 'center';
})

derecha.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'right';
    textoInferior.style.textAlign = 'right';
})

// color texto
const cambioColorDeLetra = () => {
    textoSuperior.style.color = colorLetra.value;
    textoInferior.style.color = colorLetra.value;
    codigoColorTexto[0].innerHTML = `${colorLetra.value}`;
}

colorLetra.addEventListener('input', () => cambioColorDeLetra());

// color fondo texto
const cambioColorFondoLetra = () => {
    espacioSuperior.style.backgroundColor = colorFondo.value;
    espacioInferior.style.backgroundColor = colorFondo.value;
    codigoColorTexto[1].innerHTML = `${colorFondo.value}`;
}

// color fondo texto
colorFondo.addEventListener('input', () => cambioColorFondoLetra());

// fondo transparente
checkSinFondo.addEventListener('click', () => {
    if(checkSinFondo.checked){
    imagenMeme.style.backgroundSize = 'cover';
    espacioInferior.style.position = 'absolute';
    espacioInferior.style.backgroundColor = 'transparent';
    espacioInferior.style.marginTop = '33rem';
    espacioSuperior.style.position = 'absolute';
    espacioSuperior.style.backgroundColor = 'transparent';
    } else {
        espacioInferior.style.position = 'static';
        espacioSuperior.style.position = 'static';
        espacioInferior.style.marginTop = '0';
        cambioColorDeLetra();
        cambioColorFondoLetra();
    }      
})

// contorno texto
contornoOscuro.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.classList.add('contorno-negro'); 
    textoInferior.classList.add('contorno-negro'); 
})

contornoClaro.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.classList.remove('contorno-negro');
    textoSuperior.classList.add('contorno-blanco'); 
    textoInferior.classList.remove('contorno-negro');
    textoInferior.classList.add('contorno-blanco'); 
})

// sin contorno
sinContorno.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.classList.remove('contorno-negro'); 
    textoSuperior.classList.remove('contorno-blanco'); 
    textoInferior.classList.remove('contorno-negro'); 
    textoInferior.classList.remove('contorno-blanco'); 
})

// espaciado texto
espaciado.addEventListener('input', () => {
    textoSuperior.style.paddingTop = `${espaciado.value}px`;
    textoSuperior.style.paddingBottom = `${espaciado.value}px`;
    textoInferior.style.paddingTop = `${espaciado.value}px`;
    textoInferior.style.paddingBottom = `${espaciado.value}px`;
})

espaciado.addEventListener('keyup', () => {
    textoSuperior.style.paddingTop = `${espaciado.value}px`;
    textoSuperior.style.paddingBottom = `${espaciado.value}px`;
    textoInferior.style.paddingTop = `${espaciado.value}px`;
    textoInferior.style.paddingBottom = `${espaciado.value}px`;
})

// interlineado texto
interlineado.addEventListener('change', () => {
    textoSuperior.style.lineHeight = interlineado.value;
    textoInferior.style.lineHeight = interlineado.value;
})


/// --- DESCARGA MEME --- //

// --- elementos del html ---

const btnDescarga = document.getElementById('btn-descarga');
const memeCanvas = document.getElementById('meme-canvas');

// ---funciones y eventos---

const descargarImagen = () => {
    domtoimage.toBlob(memeCanvas)
        .then(function (blob) {
            saveAs(blob,'mi-meme.png');
        });
}

btnDescarga.addEventListener('click', () => descargarImagen())




// ^-^  FIN  ^-^