const numero1 = Number(process.argv[2])

const numero2 = Number(process.argv[3])

const resultado = Number(process.argv[4])

if (resultado && numero1 && numero2)
switch (resultado) {
    case "soma":
        return console.log(`O resultado é: ${numero1 + numero2}`)
    case "subtracao":
        return console.log(`O resultado é: ${numero1 - numero2}`)
    case "divisao":
        return console.log(`O resultado é: ${numero1 - numero2}`)
    case "multiplicacao":
        return console.log(`O resultado é: ${numero1 * numero2}`)
    
    default:
        break;
}



