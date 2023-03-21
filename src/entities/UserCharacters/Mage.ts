import { Entity } from "../../coreEntities/Entity";

type MageProps = {

    fireBall: number;
    lightRay: number;
    magicDefender: number;

}

export class Mage extends Entity<MageProps> {

    constructor(props: MageProps, health: number, mana: number, name: string) {
        super(props, mana, health, name);
    }

    fireBallAttack() {

    }

    lightRayAttack() {

    }

    magicBarrier() {

    }

}