// Alloew us to add properties dynamically to our class
class Robot {
  [BodyParts: string]: boolean;
}
let robot1 = new Robot();
robot1.hasHands = true;

let robot2 = new Robot();
robot2.hasLegs = true;

console.log(robot1);
console.log(robot2);
