import { Entity } from "../../coreEntities/Entity";
type MageProps = {
    

    fireBall: string;
    lightRay:string;
    magicDefender: string;
    
}

export class Mage extends Entity<MageProps> {
    
    constructor(props: MageProps, health: number, mana: number, name:string ){
        super(props, mana, health, name);
    }
    
    
    

}