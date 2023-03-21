import { Entity } from "../../coreEntities/Entity";

type WarriorProps = {
    sword:number;
    knife:number;
    shield:number;
}

export class Warrior extends Entity<WarriorProps> {
    
    constructor(props: WarriorProps, health: number, mana: number, name:string){
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