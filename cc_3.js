// Riley Goerg U14123683
// Part 1: Car Class Constructor
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log("The ", this.make, "accelerated.");
    }
}
