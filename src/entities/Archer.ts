import { Entity } from "../coreEntities/Entity";

type ArcherProps = {
    rangeAttack: number;

}

export class Archer extends Entity<ArcherProps> {
    
    private constructor(props: ArcherProps, specie: string, health: number, mana: number, xp: number, name:string){
        super(props, specie, xp, mana, health, name);
    }

    static create(props: ArcherProps, specie: string, health: number, mana: number, xp: number, name:string ){
        const archer = new Archer(props, specie, xp, mana, health, name);
        return archer;
    }

    public closeArrow(){
        if (this.mana < 5) {
            console.log(`${this.name} não tem mana suficiente para atirar uma flecha.`);
            return;
        }

        console.log(`${this.name} atira uma flecha de perto!`);
        this.mana -= 5;
    }

    public distantArrow(){
        if (this.mana < 5) {
            console.log(`${this.name} não tem mana suficiente para atirar uma flecha.`);
            return;
        } 

        console.log(`${this.name} atira uma flecha de longe!`);
        this.mana -= 3;
    }

    public magicArrow(){
        if (this.mana < 5) {
            console.log(`${this.name} não tem mana suficiente para atirar uma flecha.`);
            return;
        }

        console.log(`${this.name} atirou uma flexa mágica!`);
        this.mana -= 7;
    }
}