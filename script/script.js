
const mailUtente = prompt("Qual'è la tua mail");

const listMail = ["adrianboh@gmail.com", "giovanni90@gmail.com", "mirco83@gmail.com", "marco67@gmail.com", "michele89@gmail.com", "giovanni55@gmail.com", "matteo99@gmail.com", "paolo55@gmail.com"];

for (let i = 0; i < listMail.length; i++) {
    if ((mailUtente.indexOf("@") === -1) || (mailUtente.indexOf(".") === -1 )) {
        console.log ('devi inserire una mail valida');
    }
    else {
        if (mailUtente === listMail[i]) {
            console.log('la mail è corretta');
        }
        else {
            console.log('devi ricaricare la pagina per accedere');
        }
    }
}