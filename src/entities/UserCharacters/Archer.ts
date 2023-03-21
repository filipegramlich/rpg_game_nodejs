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

  ironArrowAttack() {

  }

  fireArrowAttack() {

  }

  bowDefense() {

  }
}