function Device(name, power_active){
    this.name = name;
    this.power_active = power_active;
}

Device.prototype.getStatus = function(){
    let turnedOn = false
    turnedOn = this.power_active ? true : false;
    return (turnedOn);
}

function ElectricDevice(name, power, electric, power_active){
    this.name = name;
    this.power = power;
    this.electric = electric;
    this.power_active = power_active;
    this.showPower = function(){
        console.log(`Power of ${name} is ${power}W per hour.`)
        }
}

ElectricDevice.prototype = new Device();

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

const pc = new ElectricDevice('personal computer', 850, true, true);
const tv = new ElectricDevice('TV', 150, true, true);
let ElectricDevices = [pc, tv];
console.log(`Power consumption of all electric utensils is ${allPowerConsump(ElectricDevices)}W per hour!`);
pc.showPower();
tv.showPower();