var _ = require("lodash");

const past = JSON.parse(sessionStorage.getItem("spacex-pastflights"));

const calcGetGasoline = () => {
  return past[0];
};

export { calcGetGasoline };
