import { EventEmitter } from 'events';
const random = (max, min = 0) => Math.round(Math.random() * (max - min) + min);


// export class Flight {
export class Flight extends EventEmitter{

    #number = 0;
    #origin;
    #destination;
    #departed;
    #landed;

    static LAND = 'landed';

    constructor(num, origin, dest) {
        super();
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
        // console.log('depart flight');
        this.#departed = dayjs().format('HH:mm:ss');
        let dur = random(5)*1000;
        setTimeout(() => this.#land(), dur);
    }

    #land() {
        // console.log('land flight');
        this.#landed = dayjs().format('HH:mm:ss')
        this.emit(Flight.LAND);
    }
}