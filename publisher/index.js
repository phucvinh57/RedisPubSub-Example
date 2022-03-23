const express = require('express')
const port = 4000
const app = express()

const Redis = require('ioredis')
const fs = require('fs')
const util = require('util')

const MINUTE_INTERVAL = 0.05;
const MSG = " can reload data."

const publisher = new Redis('cache')
const write = util.promisify(fs.writeFile.bind(fs))

const id = setInterval(async () => {
    try {
        await write('../db.txt', new Date().toLocaleTimeString())
        await publisher.publish('article', MSG)
    } catch (err) {
        clearInterval(id) 
    }
}, 1000 * 60 * MINUTE_INTERVAL)

app.listen(port, function () {
    console.log(`Server ModbusTCP listening on port ${port}!`)
})