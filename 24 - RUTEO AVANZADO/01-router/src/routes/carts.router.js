import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{
    res.send('ruta carts')
});



router.get('/home', (req, res)=>{
    res.send('home carts')
});

export default router;