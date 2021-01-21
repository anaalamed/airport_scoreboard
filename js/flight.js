export class Flight {
    #number = 0;
    #origin;
    #destination;
    #departed;
    #landed;

    constructor(num, origin, dest) {
        this.number = num;
        this.origin = origin;
        this.destination = dest;
    }

    set number(num) { this.#number = num; }
    set origin(or) { this.#origin = or; }
    set destination(dest) { this.#destination = dest; }

    get number() { return this.#number };
    get origin() { return this.#origin };
    get destination() { return this.#destination };
    get departed() { return this.#departed };
    get landed() { return this.#landed };



    depart() {

    }

    #land() {

    }
}