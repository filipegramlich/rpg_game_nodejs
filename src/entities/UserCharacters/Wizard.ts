import { Entity } from "../../coreEntities/Entity";

type WizardProps = {

    fireBall: number;
    lightRay: number;
    magicDefender: number;

}

export class Wizard extends Entity<WizardProps> {

    constructor(props: WizardProps, health: number, mana: number, name: string) {
        super(props, mana, health, name);
    }

    fireBallAttack() {

    }

    lightRayAttack() {

    }

    magicBarrier() {

    }

}