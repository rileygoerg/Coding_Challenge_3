// Riley Goerg U14123683
// Part 1: Car Class Constructor
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    // Part 2: Accelerate Function
    accelerate(){
        this.speed += 10;
        console.log("The ", this.make, "accelerated. Current speed: ", this.speed, "km/h");
    }
    // Part 3: Brake Function
    brake(){
        this.speed -= 5;
        console.log("The ", this.make, "braked. Current speed: ", this.speed, "km/h");
    }
}
// Creating 2 cars from dataset
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Initializing Car 1
console.log(car1.make, "starting at", car1.speed, "km/h.");
// Testing Accelerate and Brake Methods for Car 1
car1.accelerate()
car1.accelerate()
car1.brake()
car1.accelerate()
car1.brake()
// Logging Car 1's new speed
console.log(car1.make, "accelerated 3 times (+30km/h) and braked 2 times (-10km/h). New speed: ", car1.speed, "km/h.");
// Initializing Car 2
console.log(car2.make, "starting at", car2.speed, "km/h.");
// Testing Accelerate and Brake Methods for Car 2
car2.brake()
car2.brake()
car2.accelerate()
car2.brake()
car2.accelerate()
//Logging Car 2's New Speed
console.log(car2.make, "accelerated 2 times (+20km/h) and braked 3 times (-15km/h). New speed:", car2.speed, "km/h.");
