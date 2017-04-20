const Things = require('./things');
const Places = require('./places');

const opessoals = [
    () => {
        const things = Things(2);
        const places = Places(2);

        return `Ô pessoal, vamos para de colocar ${things[0].the} ${things[0].name} ${places[0].in} ${places[0].name}, por que se não ${places[1].the} ${places[1].name} vai ficar cheio de ${things[1].name}.`
    }
];


console.log(opessoals[0]());