
// - إذا كان `connectionType` هو `"fiber"`:
//     - إذا كانت `speed` ≥ 500 → يطبع: `"Excellent fiber connection"`
//     - إذا كانت `speed` بين 200 و 499 → يطبع: `"Good fiber connection"`
//     - إذا كانت `speed` أقل من 200 → يطبع: `"Weak fiber connection"`
// - إذا كان `connectionType` هو `"dsl"`:
//     - إذا كانت `speed` ≥ 50 → يطبع: `"Acceptable DSL connection"`
//     - إذا كانت `speed` أقل من 50 → يطبع: `"Poor DSL connection"`
// - إذا كانت `connectionType` غير معروفة → يطبع: `"Unknown connection type"`
// - إذا كانت `speed` أقل من 0 → يطبع: `"Invalid speed value"`


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


// - اكتب كودًا يحول درجة رقمية إلى تقييم حرفي:
//     - إذا كانت الدرجة بين 90 و 100: يطبع "A"
//     - إذا كانت الدرجة بين 80 و 89: يطبع "B"
//     - إذا كانت الدرجة بين 70 و 79: يطبع "C"
//     - إذا كانت الدرجة بين 60 و 69: يطبع "D"
//     - إذا كانت أقل من 60: يطبع "F"
//     - المتطلبات:
// 1. الكود يجب أن يحتوي على متغير grade.
// 2. استخدم عبارات شرطية if...else if...else
// 3. تحدي الخيارات المتعددة مع التحقق
// 4. وصف التحدي:

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

console.log("==========================================================");

let eatsPlants = false;
let eatsAnimals = true;

let category = eatsPlants? "herbivore": eatsAnimals? "carnivore": eatsAnimals && eatsPlants? "omnivore" : undefined


console.log(category)