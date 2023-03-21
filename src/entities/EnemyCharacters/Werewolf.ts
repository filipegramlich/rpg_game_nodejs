import { MagicalCreature } from "../../coreEntities/MagicalCreature";

type WerewolfProps = {
    howl: number;
    claws: number;
    defense: number;
}

export class Werewolf extends MagicalCreature<WerewolfProps> {

    constructor(props: WerewolfProps, health: number, mana: number) {
        super(props, mana, health);
    }

    howlOfDeathAttack(enemy: any) {
        const { howl } = this.props;
        let remainingLife = enemy.health - howl;
        return remainingLife;
    }

    clawsAttack(enemy: any) {

        const { claws } = this.props;
        let remainingLife = enemy.health - claws;
        return remainingLife;

    }

    wolfDefense(characterUser: any, enemy: any) {

        const { defense } = this.props;
        const attackEnemyPower = enemy.attackEnemy(characterUser.health)
        let remainingLife = attackEnemyPower + defense;
        return remainingLife;
    }

}