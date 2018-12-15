import axios from "axios";

/* TODO - code only one getdata -function */

/* Main init app by getting data and stroring it to session storage */
function getAppData() {
  return new Promise((resolve, reject) => {
    // Promise chain to get all needed data
    getSpaceXInfo()
      .then(() => getNextLaunch())
      .then(() => getPastLaunches())
      .then(() => getRockets())
      .then(() => getUpcomingLaunches())
      .then(() => {
        resolve("Space X data ready and stored to session storage!");
      });
  });
}

/* Util util functions to serve promise chain as wanted... */
function getSpaceXInfo() {
  return new Promise((resolve, reject) => {
    const data = sessionStorage.getItem("spacex-infomation");

    if (!data) {
      axios
        .get("https://api.spacexdata.com/v3/info")
        .then(response => {
          sessionStorage.setItem(
            "spacex-infomation",
            JSON.stringify(response.data)
          );
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    } else {
      resolve();
    }
  });
}

function getNextLaunch() {
  return new Promise((resolve, reject) => {
    const data = sessionStorage.getItem("spacex-nextflight-data");
    if (!data) {
      axios
        .get("https://api.spacexdata.com/v3/launches/next")
        .then(response => {
          sessionStorage.setItem(
            "spacex-nextflight-data",
            JSON.stringify(response.data)
          );
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    } else {
      resolve();
    }
  });
}

function getPastLaunches() {
  const data = sessionStorage.getItem("spacex-pastflights");

  return new Promise((resolve, reject) => {
    if (!data) {
      axios
        .get("https://api.spacexdata.com/v3/launches/past")
        .then(response => {
          sessionStorage.setItem(
            "spacex-pastflights",
            JSON.stringify(response.data)
          );
          resolve();
        })
        .catch(err => {
          reject();
        });
    } else {
      resolve();
    }
  });
}

function getRockets() {
  const data = sessionStorage.getItem("spacex-rockets");

  return new Promise((resolve, reject) => {
    if (!data) {
      axios
        .get("https://api.spacexdata.com/v3/rockets")
        .then(response => {
          sessionStorage.setItem(
            "spacex-rockets",
            JSON.stringify(response.data)
          );
          resolve();
        })
        .catch(err => {
          reject();
        });
    } else {
      resolve();
    }
  });
}

function getUpcomingLaunches() {
  const data = sessionStorage.getItem("spacex-upcoming-launches");

  return new Promise((resolve, reject) => {
    if (!data) {
      axios
        .get("https://api.spacexdata.com/v3/launches/upcoming")
        .then(response => {
          sessionStorage.setItem(
            "spacex-upcoming-launches",
            JSON.stringify(response.data)
          );
          resolve();
        })
        .catch(err => {
          reject();
        });
    } else {
      resolve();
    }
  });
}

export { getAppData };
