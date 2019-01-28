var person = {
    firstName: "Larry",
    lastName: "Adigun",
    employeeId: "0607",
    hourlyRate: 55.00,
    hoursWorked: 80,

    weeklyPay: function() {
        return this.hourlyRate * this.hoursWorked;
    },
    
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullname());

//---------------------------------------

var car = {
    make: "Chevy",
    model: "Camaro",
    bodyType: "Coupe",
    startSpeed: 0,
    topSpeed: 200,
    horsePower: 455,
    lbFtTorque: 455,
    mphAccPerSecond: 20,
    secondsGasPedalPressed: 3,
    windowUp: true,
    engineOn: false,
    hornBeep: false,
    
    beepHorn: function() {
        this.hornBeep = true;
    },
    currentSpeed: function() {
        return this.mphAccPerSecond * this.secondsGasPedalPressed;
    }
    
};
console.log(car.currentSpeed());