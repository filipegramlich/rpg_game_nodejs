import { Entity } from "../../coreEntities/Entity";

type ArcherProps = {
  commonArrow: number;
  fireArrow: number;
  bow: number;
}

export class Archer extends Entity<ArcherProps> {

  constructor(props: ArcherProps, health: number, mana: number, name: string) {
    super(props, mana, health, name);
  }

  ironArrowAttack(enemy: any) {
    const { commonArrow } = this.props;
    let remainingLife = enemy.health - commonArrow;
    return remainingLife;
  }

  fireArrowAttack(enemy: any) {

    const { fireArrow } = this.props;
    let remainingLife = enemy.health - fireArrow;
    enemy.health
    return remainingLife;

  }

  bowDefense(characterUser:any,enemy: any) {

  }
}