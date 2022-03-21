const redis = require('redis')
const fs = require('fs')

const client = redis.createClient()

const subscribe = async () => {
    const subscriber = client.duplicate()
    await subscriber.connect()
    await subscriber.subscribe('article', message => {
        console.log("Subscriber 1" + message)
        let str = fs.readFileSync('../db.txt', 'utf-8')
        console.log(str)
    });
};

subscribe()