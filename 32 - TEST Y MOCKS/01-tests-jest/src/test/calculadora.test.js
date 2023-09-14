// npm i jest

import calculadora from "../calculadora.js";

describe('conjunto de pruebas suma', ()=>{
    it('deberia sumar dos numeros', () => {
        //etapa de preparacion
        const num1 = 4
        const num2 = 8
        const resultadoEsperado = 12

        //etapa de ejecucion
        const resultado = calculadora.suma(num1, num2);

        //etapa de verificacion
        expect(resultado).toBe(resultadoEsperado);
    });

    it('si se intenta sumar argumentos no numericos, deberia responder con un error', ()=>{
        const num1 = 4
        const num2 = ['pepe']
        const fnTest = () => calculadora.suma(num1, num2);
        expect(fnTest).toThrow('Argumentos invalidos')
    })
})

