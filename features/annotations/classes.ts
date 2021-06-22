class Vehicle {
    drive(): void {
        console.log('vroom vroom');
    }

    honk(): void {
        console.log('beep boop')
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();