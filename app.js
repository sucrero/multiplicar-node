const argv = require('./tablas/config/yargs').argv
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = '5';

// console.log(process.argv);

// let argv2 = process.argv

// console.log('Limite: ' + argv.limite);
// console.log(argv2);
// let parametro = argv[2]
// let base = parametro.split('=')[1]