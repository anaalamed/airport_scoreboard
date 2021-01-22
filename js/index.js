import { Flight } from "./flight.js"
import { FlightsTower } from './flights.tower.js'



class App {
    constructor() {
    }

    start() {
        console.log('start app');
        this.flightsTower = new FlightsTower();
        setTimeout(() => {
            let body = document.querySelector('body');
            body.innerHTML += `<h2>Today is ${dayjs().format('DD/MM/YYYY HH:mm:ss')}</h2>
                               <h2>There are ${this.flightsTower.flightCount} flights</h2> 
                               <h2>There are ${this.flightsTower.flightDest.length} destinations: ${this.flightsTower.flightDest}</h2>
                               <h2>The flights:</h2>
                               <section>
                                    <div class="flight">
                                        <h3 class="num">Number</h3>
                                        <h3 class="origin">Origin</h3>
                                        <h3 class="dest">Destination</h3>
                                        <h3 class="depart">Depart</h3>
                                        <h3 class="land">Landed</h3>
                                    </div>
                               </section>`
        }, 1000)
    }
}

let myApp = new App();
myApp.start();
// myApp.flightsTower.departAll();

setTimeout(() => {
    myApp.flightsTower.departAll();
    myApp.flightsTower.displayFlights();
}, 2000);





