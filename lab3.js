let button = document.getElementsByClassName("button");
let buttonsArray = Array.from(button);
console.log(buttonsArray);

let trafficLight = document.getElementById("traffic-light");
let trafficLightBulbs = trafficLight.children;

let trafficLightBulbsArray = Array.from(trafficLightBulbs);
console.log(trafficLightBulbsArray);

buttonsArray.forEach((button) => { button.addEventListener("click", () => {
    console.log("clicked", button.id);
    
    trafficLightBulbsArray.forEach((bulb) => {
      bulb.style.backgroundColor = "";
    });

    if (button.id === "stopButton") {
      trafficLightBulbsArray[0].style.backgroundColor = "red";
    } else if (button.id === "slowButton") {
      trafficLightBulbsArray[1].style.backgroundColor = "yellow";
    } else if (button.id === "goButton") {
      trafficLightBulbsArray[2].style.backgroundColor = "green";
    }
  });
});
