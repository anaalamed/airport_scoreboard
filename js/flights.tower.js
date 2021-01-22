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
        let tbody = document.querySelector('tbody');
        this.flights.forEach(flight => {
            flight.on(Flight.LAND, () => {
                tbody.innerHTML +=
                        `<tr>
                                <td>${flight.number}</td>
                                <td>${flight.origin}</td>
                                <td>${flight.destination}</td>
                                <td>${flight.departed}</td>
                                <td>${flight.landed}</td>
                        </tr>`
            })
        })
    }
}