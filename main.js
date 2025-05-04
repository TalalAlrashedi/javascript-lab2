let speed = 500;
let connectionType = "fiber";

if (speed < 0) {
  console.log("Invalid speed value");
} else if (speed >= 200 && speed <= 499) {
  console.log("Good fiber connection");
} else if (speed >= 500) {
  console.log("Excellent fiber connection");
} else {
  console.log("Weak fiber connection");
}

if (connectionType == "dls") {
  if (speed >= 50) {
    console.log("Acceptable DSL connection");
  } else if (speed < 50) {
    console.log("Poor DSL connection");
  } else {
    console.log("Unknown connection type");
  }
}

console.log("==========================================================");

let grade = 10;

if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

console.log("==========================================================");

//- dish = "pizza"، size = "large"، extraCheese = true

// - ذا كانت القيم كما هي، أطبع: "Large pizza with extra cheese is ready!"
// - إذا كان الحجم مختلفًا، أطبع: "Custom pizza size selected"
// - إذا لم يكن هناك جبنة إضافية، أطبع: "Pizza without extra cheese"
// - إذا كان الطبق مختلفًا، أطبع: "Not a pizza”

let dish = "pizza";
let size = "large";
let extraCheese = true;


if (dish !== "pizza"){
    console.log("Not a pizaa")
}else if(size !== "large"){
    console.log("Custom pizza size selected")
}else if(!extraCheese){
    console.log("Pizza without extra cheese")
}else{
    console.log("Large pizza with extra cheese is ready!");
    
}