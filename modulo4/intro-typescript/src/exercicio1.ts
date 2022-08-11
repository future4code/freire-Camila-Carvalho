function triangulo(a: number, b: number, c: number):string {
    if(a !== b && b !== c){
        return "Escaleno";
    } else if (a === b && b === c){
        return "Equilátero";
    }
    return "Isósceles";
    }

        console.log(triangulo(1, 2, 3))
