interface RobotInterface {
  name: string;
  durability: string;
  weight: number;
  robotData(): string;
}

abstract class Robot implements RobotInterface {
  public name: string;
  protected model: string;
  public durability: string;
  public weight: number;

  constructor(name: string, model: string, durability: string, weight: number) {
    this.name = name;
    this.model = model;
    this.durability = durability;
    this.weight = weight;
  }

  robotData() {
    return `${this.name} Robot of model ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}kg`;
  }
}

interface AvdonInterface {
  id: number;
  name: string;
  durability: string;
  weight: number;
  getModel(model: string): string;
}

class Avdon extends Robot implements AvdonInterface {
  public id: number;

  constructor(
    id: number,
    name: string,
    model: string,
    durability: string,
    weight: number,
  ) {
    super(name, model, durability, weight);
    this.id = id;
  }

  public getModel(model: string) {
    return (this.model = model);
  }
}

interface VeaxInterface {
  id: number;
  name: string;
  durability: string;
  weight: number;
}

class Veax extends Robot implements VeaxInterface {
  public id: number;

  constructor(
    id: number,
    name: string,
    model: string,
    durability: string,
    weight: number,
  ) {
    super(name, model, durability, weight);
    this.id = id;
  }
}

let avdonRobot = new Avdon(11243, "Avdon5000", "AN2333", "medium", 25);
console.log(avdonRobot);
console.log(avdonRobot.robotData());

let veaxRobot = new Veax(76811, "Veaxel9000", "VX7564", "high", 75);
console.log(veaxRobot);
console.log(veaxRobot.robotData());
