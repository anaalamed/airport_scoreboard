import { Flight } from "./flight.js"
import { FlightsTower } from './flights.tower.js'



class App {
    constructor() {


    }

    start() {
        console.log('start app');
        let flightsTower = new FlightsTower();
        setTimeout(() => {
            console.log(`There are ${flightsTower.flightCount} flights`);
            console.log(`There are ${flightsTower.flightDest.length} destinations: ${flightsTower.flightDest}`);
            console.log('The flights: ', flightsTower.flights);


            let body = document.querySelector('body');
            body.innerHTML += `<h2>There are ${flightsTower.flightCount} flights</h2> 
                               <h2>There are ${flightsTower.flightDest.length} destinations: ${flightsTower.flightDest}</h2>
                               <h2>The flights:</h2>
                               <section>
                                    <h3 class="num">Number</h3>
                                    <h3 class="origin">Origin</h3>
                                    <h3 class="dest">Destination</h3>
                                    <h3 class="depart">Depart</h3>
                                    <h3 class="land">Landed</h3>
                               </section>`


            // console.log('The flights: ', flightsTower.flights[0].number);

            let section = document.querySelector('section');

            flightsTower.flights.forEach( flight => {
                section.innerHTML += `
                                        <div class="num"> ${flight.number}</div>
                                        <div class="origin"> ${flight.origin} </div>
                                        <div class="dest"> ${flight.destination}</div>
                                        <div></div>
                                        <div></div>
                                   `
            })

                            


        }, 1000)
    }



}

let myApp = new App();
myApp.start(); 




