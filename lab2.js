let screen = document.getElementById("screen");
let channel = Array.from(document.getElementsByClassName("channel")); // changed to array because ByClassName returns a HTMLCollection, not an array I can use forEach on.
console.log(channel);


let img1 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
let img2 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
let img3 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
let img4 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
let img5 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
let img6 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
let img7 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
let img8 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
let img9 ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";

let imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9];



channel.forEach( (channel, index)=> {
    channel.addEventListener("click", ()=> {
    console.log("clicked", index);
    let img = document.getElementsByTagName("img")[1];
    img.src = imgArray[index];
  });
});