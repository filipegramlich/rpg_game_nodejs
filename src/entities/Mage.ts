import { Entity } from "../coreEntities/Entity";

type MageProps = {
    rangeAttack: number;
}

export class Mage extends Entity<MageProps> {
    
    private constructor(props: MageProps, specie: string, health: number, mana: number, xp: number, name:string ){
        super(props, specie, xp, mana, health, name);
    }

    static create(props: MageProps, specie: string, health: number, mana: number, xp: number, name:string){
        const mage = new Mage(props, specie, xp, mana, health, name);
        return mage;
    }
}