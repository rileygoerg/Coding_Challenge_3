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