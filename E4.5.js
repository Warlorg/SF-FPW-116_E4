class Device {
    constructor(name, power_active){
        this.name = name;
        this.power_active = true;
    }
    getStatus(){
        if(this.power_active){
            return (`The ${this.name} is already turned on!`)
        } else {
            return (`The ${this.name} is turned off!`)
        }
    }
}

class PC extends Device {
    constructor(name, power, electric, power_active){
        super(name, power_active);
        this.power = power;
        this.electric = electric;
    }
    showPower(){
        console.log(`Power of ${this.name} is ${this.power}W per hour.`)
    }
}

class TV extends Device {
    constructor(name, power, electric, power_active){
        super(name, power_active);
        this.power = power;
        this.electric = electric;
    }
    showPower(){
        console.log(`Power of ${this.name} is ${this.power}W per hour.`)
    }
}

let allPowerConsump = function(){
    let sum = 0;
    for(let value of ElectricDevices){
        if(value.getStatus()){
            sum+=value.power;
        } else {
            sum;
        }
    }
    return sum;
}

const myPC = new PC ('PC', 850, true);
const myTV = new TV ('TV', 150, true);
let ElectricDevices = [myPC, myTV];
console.log(`Power consumption of all electric utensils is ${allPowerConsump(ElectricDevices)}W per hour!`);
myPC.showPower();
console.log(myTV.getStatus());