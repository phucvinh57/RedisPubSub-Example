const redis = require('redis')
const fs = require('fs')
const util = require('util')

const MINUTE_INTERVAL = 1;

const write = util.promisify(fs.writeFile.bind(fs))
const publisher = redis.createClient()

const publish = async () => {
    let msg = " can reload data."
    await publisher.connect();

    setInterval(async () => {
        await write('../db.txt', new Date().toLocaleTimeString())
        await publisher.publish('article', JSON.stringify(msg));
    }, 1000 * 60 * MINUTE_INTERVAL)
}

publish()