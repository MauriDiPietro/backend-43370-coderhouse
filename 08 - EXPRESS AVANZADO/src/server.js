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

app.get('/search', async(req, res)=>{
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

app.post('/users', async(req, res)=>{
    try {
        // console.log(req.body);
        // const user = req.body
        const { firstname, lastname, email } = req.body;
        const user = {
            firstname,
            lastname, 
            email,
        }
        const newUser = await userManager.createUser(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put("/users/:idUser", async (req, res) => {
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

app.delete('/users/:idUser', async(req, res)=>{
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

app.listen(8080, ()=>{
    console.log('Server ok on port 8080');
})