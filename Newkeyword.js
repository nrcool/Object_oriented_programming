function vehicle(type,speed){
    this.type=type;
    this.speed=speed;

    this.move=function(){
        console.log(`I am a ${this.type} ,moving at a speed of ${this.speed}`);
    };

    this.stop=function(){
        console.log(`I am a ${type} ,Stopped moving`);
    };
}

let car=new vehicle("Car",80);
console.log(car);
car.move();
car.stop();

let truck=new vehicle("Truck",80);
console.log(truck);
truck.move();
truck.stop();

car.viper=function(){console.log("method added from outside")}

console.log(car);