export abstract class Entity<P> {

    protected health: number;
    protected mana: number;
    protected name: string;
    public props: P;

    constructor(props: P, health: number, mana: number, name: string){
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.props = props;
    }

}