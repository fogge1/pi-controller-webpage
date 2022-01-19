// Import mqtt
const mqtt = require('mqtt');

let client = {};

 

// Connect to maqiatto
const connect = () => {
    let id = "DriverControll" +Math.random().toString(16).substr(2, 8);

    let user = {
        name: "isak.fogelberg@abbgymnasiet.se",
        password: "apaapa",
        port: 8883,
        adress: "maqiatto.com"
    }

    const options = {
        port: "8883",
        clientId: id,
        username: user.name, 
        password: user.password,
        clean: false,
        will: {
            topic: 'offline',
            payload: id,
            qos: 2
        }
    }
    
    client = mqtt.connect('mqtt://maqiatto.com', options);
    // client = mqtt.connect('mqtt://192.168.1.116', options);    

    client.on("connect", () => {
        console.log("Ansluten till: " + options.username)
        
    })
    client.on("error", ()=> {
        console.log("error")
    })
    
}

// Subsribe to a topic
const subscribe = (topic) => {
    client.subscribe(topic)
    client.on("message", (topic, message) => {
        return message.toString()
    })
}
// publish to a topic
const publish = (topic, message) => {
   client.publish(topic, message, {qos: 1});
   console.log("Published to topic: " + topic + ' Message: ' + message)
}

// Export functions
export default {
    connect,
    publish,
    subscribe
}