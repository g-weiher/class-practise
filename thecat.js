class Cat {
  constructor(name, tiredness = 0, hunger = 0, loneliness = 0, happiness = 80) {
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
  feed() {
    let returnmessage = "";
    if (this.hunger < 10) {
      returnmessage = this.name + " isn't hungry.";
    } else if (this.hunger < 80 && Math.random() > 0.6) {
      returnmessage =
        this.name + " sits in front of the food and just stares at you.";
    } else {
      this.hunger -= 40;
      this.tiredness += 20;
      if (this.hunger < 0) {
        this.hunger = 0;
      }
      returnmessage = this.name + " had a meal.";
    }
    return "You try to feed " + this.name + ". " + returnmessage;
  }
  sleep() {
    this.tiredness -= 40;
    this.hunger += 50;
    this.loneliness += 60;
    if (this.tiredness < 0) {
      this.tiredness = 0;
    }
  }
  play() {
    this.happyness += 80;
    this.tiredness += 40;
    this.hunger += 30;
    this.loneliness -= 50;
    if (this.loneliness < 0) {
      this.loneliness = 0;
    }
  }
  pet() {
    this.happyness += 50;
    this.tiredness += 10;
    this.loneliness -= 30;
    if (this.loneliness < 0) {
      this.loneliness = 0;
    }
  }
  printStatus() {
    const hungerSev = this.severity(this.hunger);
    const tirednessSev = this.severity(this.tiredness);
    const happynessSev = this.severity(this.happyness);
    const lonelinessSev = this.severity(this.loneliness);
    if (hungerSev) {
      console.log(this.name + " is" + hungerSev + " hungry.");
    }
    if (tirednessSev) {
      console.log(this.name + " is" + tirednessSev + " tired.");
    }
    if (happynessSev) {
      console.log(this.name + " is" + happynessSev + " happy.");
    }
    if (lonelinessSev) {
      console.log(this.name + " is" + lonelinessSev + " lonely.");
    }
  }
  severity(number) {
    if (number < 20) {
      return false;
    } else if (number < 50) {
      return " a little";
    } else if (number < 80) {
      return "";
    } else {
      return " very";
    }
  }
}

const cat = new Cat("paws");
console.log(cat.feed());
cat.play();
cat.sleep();
cat.printStatus();

const cat2 = new Cat("Tom", 40, 200, 80, 10);
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
console.log(cat2.feed());
cat2.printStatus();
