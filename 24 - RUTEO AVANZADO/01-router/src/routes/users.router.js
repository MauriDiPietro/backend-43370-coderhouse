import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{
    res.send('ruta users')
});



router.get('/home', (req, res)=>{
    res.send('home users')
});

export default router;