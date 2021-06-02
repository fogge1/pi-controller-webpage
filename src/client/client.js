const mqtt = require('mqtt');
 
let client = {};

const connect = () => {
    let id = "DriverControll" +Math.random().toString(16).substr(2, 8);

    const options = {
        port: "8883",
        clientId: id,
        username: "isak.fogelber@abbindustrigymnasium.se", // "isak.fogelberg@abbindustrigymnasium.se"
        password: "apaapa",
        clean: false,
        will: {
        topic: 'offline',
        payload: id,
        qos: 2
        }
    }
    client = mqtt.connect('mqtt://maqiatto.com', options);

    client.on('connect', (message) => {
        console.log(message)
    })
    client.on('error', ()=> {
        console.log('error')
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

exports.connect = connect;
exports.publish = publish;
exports.subscribe = subscribe;
exports.end = end;