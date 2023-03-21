import { Archer } from "../../../entities/UserCharacters/Archer";
import { Werewolf } from "../../../entities/EnemyCharacters/Werewolf";

const archerProps = { 
  commonArrow: 20 , 
  fireArrow: 30 , 
  arrowDefender: 20
};

export const archer = new Archer(archerProps, 100, 100, "Legolas");

const werewolfProps = { 
  attackWithClaws: 20, 
  defense: 20, 
  howlOfDeath: 30 
};

export const werewolf = new Werewolf(werewolfProps, 100, 100);