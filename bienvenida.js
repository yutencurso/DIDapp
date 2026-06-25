const usuario = localStorage.getItem('nombreDIDaccount');
const frases = [
    `A qué nos dedicaremos hoy?`,
    `Hola, ${usuario}`,
    `Que deseas hacer hoy?`,
    `Son las productividad en punto, ${usuario}`,
    `Modo ${usuario} activado`,
    `Cuales son tus objetivos este día?`,
    `Te damos la bienvenida, ${usuario}`
]
function fraseBienvenida() {
    const seleccionado = frases[Math.floor(Math.random() * frases.length)];
    return seleccionado;
}