const sampleSize = require('lodash.samplesize');

const things = [
    {
        the: 'a',
        name: 'geladeira',
        in: 'na'
    },
    {
        the: 'o',
        name: 'saco de pão',
        in: 'no'
    },
    {
        the: 'a',
        name: 'mesa',
        in: 'na'
    },
    {
        the: 'o',
        name: 'fone',
        in: 'no'
    }
];

exports = module.exports = (n = 1) => {

    return sampleSize(things, n);
}
