class Robot {
  readonly id: number;
  readonly model: string;
  name: string;
  durability?: string;

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
robot.durability = "HIGH";
console.log(robot);

// the "?" is for optional
