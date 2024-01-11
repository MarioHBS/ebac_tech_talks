AOS.init();

const dataEvento = new Date("January 21, 2024 19:00:00")
const eventMilliseconds = dataEvento.getTime();

function currentTimestamp() {
    return new Date().getTime();
}

const minutoEmMs = 1000 * 60;
const horaEmMs = minutoEmMs * 60;
const diaEmMs = horaEmMs * 24;

const contadorParaEvento = setInterval(() => {
    const current = currentTimestamp();

    const diff = eventMilliseconds - current;

    const diasParaEvento = Math.floor(diff / diaEmMs);
    const horasParaEvento = Math.floor(diff % diaEmMs / horaEmMs);
    const minutoParaEvento = Math.floor(diff % horaEmMs / minutoEmMs);
    const segundoParaEvento = Math.floor(diff % minutoEmMs / 1000);

    console.log(diasParaEvento);
    console.log(horasParaEvento);
    console.log(minutoParaEvento)
    console.log(segundoParaEvento)

    if (diff < 0) {
        clearInterval(contadorParaEvento);
        document.getElementById('contador').innerHTML = "EVENTO EXPIRADO"
    }

    document.getElementById('contador').innerHTML = `${diasParaEvento}d ${horasParaEvento}h ${minutoParaEvento}m ${segundoParaEvento}s`
}, 1000)
// clearInterval(timeStamp)