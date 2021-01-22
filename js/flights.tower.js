import { Flight } from './flight.js'

export class FlightsTower {
    constructor() {
        this.flightCount = 0;
        this.flightDest = [];

        this.createFlights();
    }

    createFlights() {
        // console.log('create flights()');
        this.flights = [];
        fetch('https://api.npoint.io/a4429717c3b5df271ab1')
            .then(response => response.json())
            .then(data => {
                data.flights.forEach(data => {
                    let flight = new Flight(data.number, data.origin, data.destination);
                    this.flights.push(flight);
                    this.flightCount++;
                    if (!this.flightDest.includes(data.destination)) {
                        this.flightDest.push(data.destination);
                    }
                })
            });
    }

    departAll() {
        console.log('depart all');
        this.flights.forEach(flight => {
            flight.depart();
        })
    }

    displayFlights() {
        let section = document.querySelector('section');
        this.flights.forEach(flight => {
            flight.on(Flight.LAND, () => {
                section.innerHTML += `<div class="flight">
                                                <div class="num"> ${flight.number}</div>
                                                <div class="origin"> ${flight.origin} </div>
                                                <div class="dest"> ${flight.destination}</div>
                                                <div class="depart">${flight.departed}</div>
                                                <div class="land">${flight.landed}</div>
                                            </div>`
            })
        })
    }
}