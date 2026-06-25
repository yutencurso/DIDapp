function fraseBienvenida() {
    const usuario = localStorage.getItem('nombreDIDaccount') || 'invitado';
    const frases = [
        'A qué nos dedicaremos hoy?',
        `Hola, ${usuario}`,
        '¿Qué deseas hacer hoy?',
        `Son las productividad en punto, ${usuario}`,
        `Modo ${usuario} activado`,
        '¿Cuáles son tus objetivos este día?',
        `Te damos la bienvenida, ${usuario}`
    ];
    const seleccionado = frases[Math.floor(Math.random() * frases.length)];
    return seleccionado;
}