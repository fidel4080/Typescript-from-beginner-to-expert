class Robot {
  public readonly id: number;
  public readonly model: string;
  public name: string;
  public durability?: string;
  private _sentient: boolean;

  constructor(id: number, model: string, name: string, sentient: boolean) {
    this.id = id;
    this.model = model;
    this.name = name;
    this._sentient = sentient;
  }

  walk(): void {
    console.log(`${this.name} can walk`);
  }

  get sentient(): boolean {
    return this._sentient;
  }

  set sentient(sentient: boolean) {
    this._sentient = sentient;
  }
}

let robot = new Robot(9099, "KE099", "AXELL", true);
console.log(robot.sentient);
robot.sentient = false;
console.log(robot.sentient);

// Getters allow us to access values of a private member outside the class
// Setters allow us to modify values of a private member outside the class
