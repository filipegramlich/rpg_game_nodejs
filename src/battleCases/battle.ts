import { Werewolf } from "../entities/EnemyCharacters/Werewolf";
import { Archer } from "../entities/UserCharacters/Archer";
import { Wizard } from "../entities/UserCharacters/Wizard";
import { Warrior } from "../entities/UserCharacters/Warrior";
const readline = require('readline')

export class Battle {

    private player: Warrior | Wizard | Archer;
    private enemie: Werewolf
    private roundCounter: number;
    

    constructor(player: Warrior | Wizard | Archer, enemie: Werewolf) {
        this.player = player;
        this.enemie = enemie;
        this.roundCounter = 0;
    }

    startBattle(){

        
        let playerAction = readline("Escolha uma ação:");
        console.log(playerAction)
          
        
        
    }
}