export abstract class Entity<P> {

    public health: number;
    public mana: number;
    public name: string;
    public props: P;

    constructor(props: P, health: number, mana: number, name: string){
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.props = props;
    }

}