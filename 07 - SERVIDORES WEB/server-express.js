import express from 'express';
import arrayProducts from './products.js'

const app = express();

app.get('/', (req, res)=>{
    // res.send('Mi primer servidor con express')
    // res.send({message: 'Hola'})
    // res.send("<h1> Servidor express </h1>")
    // res.send(`
    // primer linea
    // segunda linea
    // `)
    // res.status(200).send(arrayProducts)
    // res.json(arrayProducts)
    // res.render('home')
    let error = true
    if(error){
        res.status(404).json({message: 'Error'})
    } else {
        res.status(200).json({message: 'OK'})
    }
});

app.get('/products', (req, res)=>{
    // console.log(req.query);
    const { value } = req.query
    // console.log(value);
    const arrayFilter = arrayProducts.filter(prod => prod.price > value)
    res.status(200).json(arrayFilter)
});

app.get('/products/:pid', (req, res)=>{
    // console.log(req.params);
    const { pid } = req.params;
    // const idProd = req.params.idProd;
    // console.log(idProd);
    const prod = arrayProducts.find(prod => prod.id === Number(pid))
    if(prod){
        // res.json({msg: 'producto encontrado', prod})
        res.json(prod)
    } else {
        res.json({msg: 'Producto no encontrado'})
    }
})


//! PRECIO MAYOR A: --- |BUSCAR| ---> GET a /products?value=`${value}`

app.listen(8080, ()=>{
    console.log('server express listening on port 8080');
});

// app.listen(0, function(){
//     console.log(`server express listening on port ${this.address().port}`);
// });