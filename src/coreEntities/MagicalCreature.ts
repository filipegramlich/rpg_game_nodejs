export abstract class MagicalCreature<T> {

    public health: number;
    public mana: number;
    public props: T;

    constructor(props: T, health = 100, mana =  100){
        this.health = health;
        this.mana = mana;
        this.props = props;
    }

}