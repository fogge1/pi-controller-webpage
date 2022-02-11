// Import mqtt and store
const mqtt = require('mqtt');
import store from '../store/index.js'

let client = {};

 

// Connect to maqiatto
const connect = () => {
    let id = "DriverControll" +Math.random().toString(16).substr(2, 8);

    let user = {
        name: "isak.fogelberg@abbgymnasiet.se",
        password: "apaapa",
        port: 2983, // nisse:2983 maqiatto: 8883 
        adress: '81.229.145.235'// nisse: "81.229.145.235" maqiatto: 'maqiatto.com'
    }

    const options = {
        port: user.port,
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
    
    client = mqtt.connect('mqtt://' + user.adress, options);
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
        store.dispatch('addSpeed', Number(message))
        console.log("yValues"+ store.getters.getYValues)
        console.log("xValues"+ store.getters.getXValues)

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