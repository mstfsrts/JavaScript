"use strict";


const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  // Handling the traffic light state transitions
  switch (currentState) {
    case "green":
      trafficLight.state = "orange";
      break;
    case "orange":
      trafficLight.state = "red";
      break;
    case "red":
      rotations++;
      trafficLight.state = "green";
      break;
  }
}
