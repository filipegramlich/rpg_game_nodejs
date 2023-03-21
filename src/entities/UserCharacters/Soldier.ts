import { Entity } from "../../coreEntities/Entity";
type SoldierProps = {
    

    swordAttack:string;
    shieldDefense:string;
    knifeAttack:string;

}

export class Soldier extends Entity<SoldierProps> {
    
    constructor(props: SoldierProps, health: number, mana: number, name:string){
        super(props, mana, health, name);
    }

}