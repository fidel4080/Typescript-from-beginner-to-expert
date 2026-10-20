abstract class Robot {
  public name: string;
  public model: string;
  public durability: string;
  public weight: number;

  constructor(name: string, model: string, durability: string, weight: number) {
    this.name = name;
    this.model = model;
    this.durability = durability;
    this.weight = weight;
  }

  get robotData() {
    return `${this.name} Robot model ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
  }
}

class Avdon extends Robot {
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

class Veax extends Robot {
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

let veaxRobot = new Veax(76811, "Veaxel9000", "VX7564", "high", 75);
console.log(veaxRobot);
