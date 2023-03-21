import express from 'express';
import { archer } from './battleCases/Werewolf/ArcherVsWerewolf/summonerArea';
import { werewolf } from './battleCases/Werewolf/ArcherVsWerewolf/summonerArea';

const app = express();
const port = 3001;

app.listen(port,() => {
        console.log(`Server is running on Port:${port}! `)
    }
);
console.log(werewolf.health);
console.log(werewolf.health = archer.ironArrowAttack(werewolf))
console.log(werewolf.health = archer.fireArrowAttack(werewolf))
console.log(werewolf.health);
console.log(werewolf.wolfDefense(werewolf,archer.fireArrowAttack(werewolf)));