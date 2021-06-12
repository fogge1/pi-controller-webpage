// Import mqtt and store
const mqtt = require('mqtt');
import store from '../store/index.js'

let client = {};

// Connect to maqiatto
const connect = () => {
    let id = "DriverControll" +Math.random().toString(16).substr(2, 8);

    let user = store.getters.GetUser

    const options = {
        port: "8883",
        clientId: id,
        username: user.name, // "isak.fogelberg@abbindustrigymnasium.se"
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
        store.dispatch("setConnected", true)
    })
    client.on("error", ()=> {
        store.dispatch("setConnected", false)
    })
}

// Subsribe to a topic
const subscribe = (topic) => {
    client.subscribe(topic);
    console.log('subscribe:', topic);
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