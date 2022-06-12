

// --- BOTONES PRINCIPALES ---

// --- Selección de elementos HTML

const botonImg = document.getElementById('boton-img');
const botonTexto = document.getElementById('boton-texto');
const aside = document.getElementById('aside');
const cierreAside = document.getElementById('cierre-aside');

// --- funciones y eventos

botonImg.addEventListener('click', () => {
    aside.classList.remove('aside-oculto');
    aside.style.display = 'block';
})

cierreAside.addEventListener('click',() => {
    aside.style.display = 'none';
})


// --- BOTONES MODO CLARO / OSCURO --- //

// --- selección de elementos HTML

const botonModoClaro = document.getElementById('boton-modo-claro');
const botonModoOscuro = document.getElementById('boton-modo-oscuro');

// --- funciones y eventos

botonModoClaro.addEventListener('click', () => {
    botonModoClaro.classList.add('ocultar');
    botonModoOscuro.classList.remove('ocultar');
    document.body.classList.remove('modo-oscuro');
    document.body.classList.add('modo-claro');
})

botonModoOscuro.addEventListener('click', () => {
    botonModoOscuro.classList.add('ocultar');
    botonModoClaro.classList.remove('ocultar');
    document.body.classList.remove('modo-claro');
    document.body.classList.add('modo-oscuro');
})
