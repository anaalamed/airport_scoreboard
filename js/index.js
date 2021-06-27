// import { Flight } from "./flight.js";
import { FlightsTower } from "./flights.tower.js";

class App {
  constructor() {}

  start() {
    console.log("start app");
    this.flightsTower = new FlightsTower();
    let body = document.querySelector("body");

    // need to change setTimeout
    setTimeout(() => {
      body.innerHTML += `<div class="date">Today ${dayjs().format(
        "DD/MM/YYYY HH:mm:ss"
      )}</div>
            <h2>There are ${this.flightsTower.flightCount} flights</h2> 
            <h3>There are ${
              this.flightsTower.flightDest.length
            } destinations: ${this.flightsTower.flightDest}</h3>
            <h2>The flights:</h2>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Depart</th>
                    <th>Land</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </section>`;
    }, 1000);
  }
}

let myApp = new App();
myApp.start();

// need to change!
setTimeout(() => {
  myApp.flightsTower.departAll();
  myApp.flightsTower.displayFlights();
}, 1000);
