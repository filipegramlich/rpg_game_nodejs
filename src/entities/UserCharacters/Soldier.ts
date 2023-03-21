import { Entity } from "../../coreEntities/Entity";

type SoldierProps = {
    sword:number;
    knife:number;
    shield:number;
}

export class Soldier extends Entity<SoldierProps> {
    
    constructor(props: SoldierProps, health: number, mana: number, name:string){
        super(props, mana, health, name);
    }

    swordAttack(){
        const { sword } = this.props;
        return sword;
    }
    
    knifeAttack(){
        const { knife } = this.props;
        
    }
    
    shieldBarrier(){
        
        const { shield } = this.props;
    }

}