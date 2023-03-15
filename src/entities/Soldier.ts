import { Entity } from "../coreEntities/Entity";

type SoldierProps = {
    rangeAttack: number;
}

export class Soldier extends Entity<SoldierProps> {
    
    private constructor(props: SoldierProps, specie: string, health: number, mana: number, xp: number, name:string){
        super(props, specie, xp, mana, health, name);
    }

    static create(props: SoldierProps, specie: string, health: number, mana: number, xp: number, name:string){
        const soldier = new Soldier(props, specie, xp, mana, health, name);
        return soldier;
    }
}