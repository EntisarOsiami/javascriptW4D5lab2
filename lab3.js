let button=document.getElementsByClassName("button");
let buttonsArray=Array.from(button);
console.log(buttonsArray);

let trafficLight = document.getElementById("traffic-light");
let trafficLightBulbs = trafficLight.children;

let trafficLightBulbsArray = Array.from(trafficLightBulbs);
console.log(trafficLightBulbsArray);


buttonsArray.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "stopButton") {
            color = "red";
        }
        else if (button.id === "slowButton") {
            color = "yellow";
        } else if (button.id === "goButton") {
            color = "green";
        }

        trafficLightBulbsArray.forEach((bulb) => {
            bulb.style.backgroundColor = ""; 
        });

        switch (color) {
            case "red":
                trafficLightBulbsArray[0].style.backgroundColor = "red";
                break;
            case "yellow":
                trafficLightBulbsArray[1].style.backgroundColor = "yellow";
                break;
            case "green":
                trafficLightBulbsArray[2].style.backgroundColor = "green";
                break;
        }
    });
});