import { MagicalCreature } from "../../coreEntities/MagicalCreature";

type WerewolfProps = {
    howlOfDeath: number;
    attackWithClaws:number;
    defense:number;
}

export class Werewolf extends MagicalCreature<WerewolfProps> {
    constructor(props: WerewolfProps, health: number, mana: number){
        super(props, mana, health);
    }
}