const mqtt = require('mqtt');
import store from '../store/index.js'

let client = {};

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
    // console.log(user.name)
    client = mqtt.connect('mqtt://maqiatto.com', options);

    client.on("connect", () => {
        console.log("Ansluten till: " + options.username)
        store.dispatch("setConnected", true)
    })
    client.on("error", ()=> {
        store.dispatch("setConnected", false)
    })
}


const end = () => {
    client.end();
}
const subscribe = (topic) => {
    client.subscribe(topic);
    console.log('subscribe:', topic);
}
const publish = (topic, message) => {
   client.publish(topic, message, {qos: 1});
}

export default {
    connect,
    publish,
    subscribe,
    end
}