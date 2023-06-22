import { Router } from 'express';
const router = Router();

const pets = [];

router.get('/', (req, res)=>{
    res.json(pets)
});

router.post('/', (req, res)=>{
    const pet = req.body;
    pets.push(pet);
    res.json(pet);
});

export default router;