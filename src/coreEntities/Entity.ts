export abstract class Entity<P> {

    protected specie: string;
    protected health: number;
    protected mana: number;
    protected xp:number;
    protected name:string;
    public props: P;
    
    constructor( props: P, specie: string, health: number, mana: number, xp: number, name:string,){
        this.health = health;
        this.specie = specie;
        this.mana = mana;
        this.xp = xp;
        this.props = props;
        this.name = name;
    }

}