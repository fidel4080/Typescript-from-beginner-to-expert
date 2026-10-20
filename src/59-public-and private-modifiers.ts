class Robot {
  public readonly id: number;
  public readonly model: string;
  public name: string;
  public durability?: string;
  private sentient: boolean;

  constructor(id: number, model: string, name: string, sentient: boolean) {
    this.id = id;
    this.model = model;
    this.name = name;
    this.sentient = sentient;
  }

  walk(): void {
    console.log(`${this.name} can walk`);
  }

  abilityToThink(): boolean {
    return this.sentient;
  }
}

let robot = new Robot(9099, "KE099", "AXELL", true);
console.log(robot.abilityToThink());

// Property 'sentient' is private and only accessible within class 'Robot'.
// console.log(robot.sentient);
