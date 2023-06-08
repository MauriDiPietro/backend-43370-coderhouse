const fs = require('fs');
const crypto = require('crypto');

class UserManager {
    constructor(path){
        this.path = path
    }

    async getUsers(){
        try {
            if(fs.existsSync(this.path)){
                const usersFile = await fs.promises.readFile(this.path, 'utf8');
                const usersJS = JSON.parse(usersFile);
                return usersJS
            } else {
                return []
            }
        } catch (error) {
            console.log(error);
        }
    };

    async createUser(obj){
        try {
            const user = { ...obj };
            const usersFile = await this.getUsers();
            user.salt = crypto.randomBytes(128).toString(); 
            user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex');
            usersFile.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(usersFile));
        } catch (error) {
            console.log(error);
        }
    }

    async validateUser(username, password){
        try {
            const usersFile = await this.getUsers();
            const user = usersFile.find((u) => u.username === username);
            if(!user){
                console.log('Usuario no encontrado');
                return
            }
            const newCrypto = crypto.createHmac('sha256', user.salt).update(password).digest('hex');
            if(user.password === newCrypto){
                console.log('¡LOGUEADO CON ÉXITO!');
            } else {
                console.log('User/password no válidas');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const manager = new UserManager('./users.json');

const user1 = {
    firstname: 'John',
    lastname: 'Perez',
    username: 'John',
    password: '1234'
}

const user2 = {
    firstname: 'Matias',
    lastname: 'Merlo',
    username: 'Mati',
    password: '12345'
}

const test = async()=>{
    // await manager.createUser(user1)
    // await manager.createUser(user2)
    // const users = await manager.getUsers()
    // console.log(users);
    await manager.validateUser('Mati', '12345')
}

test()