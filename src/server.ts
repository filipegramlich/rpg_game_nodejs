import express from 'express';
import { Battle } from './battleCases/battle';
import { werewolf } from './battleCases/Werewolf/ArcherVsWerewolf/summonerArea';
import { archer } from './battleCases/Werewolf/ArcherVsWerewolf/summonerArea';

const app = express();
const port = 3001;

app.listen(port,() => {
        console.log(`Server is running on Port:${port}! `)
    }
);

const battle = new Battle(archer,werewolf);

battle.startBattle()