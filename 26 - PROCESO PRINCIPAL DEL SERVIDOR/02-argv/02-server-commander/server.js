import express from 'express';
import { Command } from 'commander';

const app = express();

const commander = new Command();
commander
    .option('-port <port>', 'port server', 8080)
    .option('-m <mode>', 'mode server', 'dev')

commander.parse();
console.log(commander.opts());
console.log(commander.args)

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = commander.opts().Port
const mode = commander.opts().m

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`mode: ${mode}`);
});

