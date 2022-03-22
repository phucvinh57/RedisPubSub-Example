const Redis = require('ioredis')
const fs = require('fs')
const util = require('util')

const MINUTE_INTERVAL = 0.05;
const MSG = " can reload data."

const publisher = new Redis('172.17.0.2')
const write = util.promisify(fs.writeFile.bind(fs))

const id = setInterval(async () => {
    try {
        await write('../db.txt', new Date().toLocaleTimeString())
        await publisher.publish('article', MSG)
    } catch (err) {
        clearInterval(id)
    }
}, 1000 * 60 * MINUTE_INTERVAL)