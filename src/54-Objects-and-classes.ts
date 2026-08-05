class Robot {
  id: number;
  model: string;
  name: string;

  constructor(id: number, model: string, name: string) {
    this.id = id;
    this.model = model;
    this.name = name;
  }

  walk(): void {
    console.log(`${this.name} can walk`);
  }
}

let robot = new Robot(9099, "KE099", "AXELL");
console.log(robot);
console.log(robot.model); //KE099
robot.walk();
console.log(robot instanceof Robot);
