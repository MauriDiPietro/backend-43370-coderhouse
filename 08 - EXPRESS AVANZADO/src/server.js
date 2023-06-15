import express from 'express';
import UserManager from './managers/user.manager.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userManager = new UserManager('./users.json');

/* ------------------------------------ - ----------------------------------- */

app.get('/users', async(req, res)=>{
    try {
       const users = await userManager.getUsers();
       res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/users/:idUser', async(req, res)=>{
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

app.post

app.listen(8080, ()=>{
    console.log('Server ok on port 8080');
})