// import { rejects } from "assert";

// var _ = require("lodash");

// const past = JSON.parse(sessionStorage.getItem("spacex-pastflights"));

let mass = 0;

function calcGetGasoline(data) {
  return new Promise((resolve, rejects) => {
    data.map((one, index) => {
      if (one.rocket.second_stage.payloads[0].payload_mass_kg > 0) {
        mass = mass + one.rocket.second_stage.payloads[0].payload_mass_kg;
      }
      // console.log(index, past.length);

      if (index >= data.length - 1) resolve(mass);
    });
  });
}

export { calcGetGasoline };
