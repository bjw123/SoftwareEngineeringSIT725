console.log("hello world");
console.log("goodbye cruel world");

class biosensor { //heartbeat simulation class
    constructor(name) {
        this.person = name;
        this.heartRate = 0;
        var min = 60;
        var max = 80
    }
    heartBeat() { //generate heartbeat
        setInterval(this.heartBeat(), 1000);
    }
    generateHeartBeat() {
        console.log(parseInt(Math.random() * (max - min) + min));
    }
}