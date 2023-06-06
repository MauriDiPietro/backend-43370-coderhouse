const fs = require('fs');

class UsersManager {
    constructor(path){
        this.path = path
    }

    async getUsers(){
        try {
            if(fs.existsSync(this.path)){
                const users = await fs.promises.readFile(this.path, 'utf-8');
                const usersjs = JSON.parse(users);
                return usersjs;
            } else {
                return []
            }
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user){
        try {
            const usersFile = await this.getUsers();
            usersFile.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(usersFile));
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

const manager = new UsersManager('./users.json');

const user1 = {
    firstname: 'Gastón',
    lastname: 'Merlo',
    age: 45
}

const user2 = {
    firstname: 'Matías',
    lastname: 'Firpo',
    age: 38
}

const test = async ()=>{
    const getUsers = await manager.getUsers()
    console.log('primer consulta: ', getUsers);
    await manager.createUser(user1);
    const getUsers2 = await manager.getUsers()
    console.log('2da consulta: ', getUsers2);
    await manager.createUser(user2);
    const getUsers3 = await manager.getUsers()
    console.log('3er consulta: ', getUsers3);
}

test()