import { Tareas } from "../utils/tareas.js";
import { expect, assert, should } from 'chai';

describe('test unitarios de tareas', ()=>{

    before(()=>{
        console.log('*****se ejecuta antes de todos los tests******');
    });

    after(()=>{
        console.log('**se ejecuta despues de todos los test****');
    })

    it('Debería crear el array de tareas vacío', ()=>{
        const tareas = new Tareas();
        const listTareas = tareas.list();
        expect(listTareas).to.have.lengthOf(0);
        assert.lengthOf(listTareas, 0);
        assert.strictEqual(listTareas.length, 0);
        // listTareas.should.have.lengthOf(0);
    });

    it('Debería crear una tarea correctamente', ()=>{
        const tareas = new Tareas();
        tareas.add('Escribir un libro');
        const arrayTareas = tareas.list();
        const expectedArray = [
            {
                title: 'Escribir un libro',
                complete: false
            }
        ]
        assert.equal(arrayTareas.length, 1);
        assert.deepStrictEqual(arrayTareas, expectedArray);
    });

    it('Debería marcar una tarea como completa', ()=>{
        const tareas = new Tareas();
        const arrayTareas = tareas.list();
        tareas.add('Escribir un libro');
        tareas.add('Otra tarea');
        tareas.complete('Escribir un libro');
        const expectedArray = [
            {
                title: 'Escribir un libro',
                complete: true
            },
            {
                title: 'Otra tarea',
                complete: false
            }
        ]
        assert.deepStrictEqual(arrayTareas, expectedArray);
    });

    it('Debería lanzar un error cuando la tarea a completar no existe', ()=>{
        const tareas = new Tareas();
        const arrayTareas = tareas.list();
        tareas.add('Primer tarea');
        const expectedError = 'Tarea no encontrada';
        const fn1 = () => {
            tareas.complete('Tarea inexistente');
        }

        assert.throws(fn1, Error, expectedError);
        expect(fn1).to.throw(Error, expectedError);
    });
    // describe('', ()=>{});
})
