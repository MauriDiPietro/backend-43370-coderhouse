// import express from 'express';
// const router = express.Router();

import { Router } from 'express';
const router = Router();
import UserManager from '../managers/user.manager.js';
import { userValidator } from '../middlewares/userValidator.js';
import { logUrl } from '../middlewares/logUrl.js';
const userManager = new UserManager('./users.json');
import { uploader } from '../middlewares/multer.js';

router.get('/', async(req, res)=>{
    try {
       const users = await userManager.getUsers();
       res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:idUser', async(req, res)=>{
    try {
        const { idUser } = req.params;
        const user = await userManager.getUserById(Number(idUser));
        if(user){
            res.json(user)
        } else {
            res.status(400).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/search', async(req, res)=>{
    try {
        const { idUser } = req.query;
        const user = await userManager.getUserById(Number(idUser));
        if(user){
            res.json(user)
        } else {
            res.status(400).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/', [logUrl, userValidator], async(req, res)=>{
    try {
        // console.log(req.body);
        // const user = req.body
        const { firstname, lastname, email, role } = req.body;
        const user = {
            firstname,
            lastname, 
            email,
            role
        }
        const newUser = await userManager.createUser(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/profile', uploader.single('profile-photo'), async(req, res)=>{
    try {
        console.log(req.file);
        const user = req.body;
        user.profile = req.file.path
        const newUser = await userManager.createUser(user);
        res.json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put("/:idUser", async (req, res) => {
  try {
    const user = req.body;
    const { idUser } = req.params;
    const idNumber = parseInt(idUser);
    const userExist = await userManager.getUserById(idNumber);
    if (userExist) {
      await userManager.updateUser(user, idNumber);
      res.json({ message: `User id: ${idNumber} updated` });
    } else {
      res.status(400).json({ message: `User id: ${idNumber} Not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:idUser', async(req, res)=>{
    try {
        const { idUser } = req.params;
        const idNumber = parseInt(idUser);
        const userExist = await userManager.getUserById(idNumber);
        if(userExist){
            await userManager.deleteUser(idNumber);
            res.status(200).json({message: `User ${idNumber} deleted ok`});
        } else {
            res.json({message: `User ${idNumber} not found`})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;