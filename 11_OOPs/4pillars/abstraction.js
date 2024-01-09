// Explaination of the Abstraction
// Explanation: Abstraction is like using a TV remote without knowing how it works inside. You just need to know the buttons to change channels or adjust the volume. In programming, abstraction hides the complex inner workings of a class and only shows the necessary parts to the outside world.

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  turnOn() {
    this.device.turnOn();
  }

  turnOff() {
    this.device.turnOff();
  }
}

let tv = {
  turnOn: function () {
    console.log("TV is ON");
  },
  turnOff: function () {
    console.log("TV is OFF");
  },
};

let remote = new RemoteControl(tv);
remote.turnOn(); // Output: TV is ON
