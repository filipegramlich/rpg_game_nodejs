import { Archer } from "../../../entities/UserCharacters/Archer";
import { Werewolf } from "../../../entities/EnemyCharacters/Werewolf";

const archerProps = {
  commonArrow: 20,
  fireArrow: 30,
  bow: 5
};

export const archer = new Archer(archerProps, 100, 100, "Legolas");

const werewolfProps = {
  claws: 20,
  howl: 30,
  defense: 20
};

export const werewolf = new Werewolf(werewolfProps, 100, 100);