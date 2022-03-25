const express = require('express')
const port = 4002
const app = express()

const Redis = require('ioredis')
const fs = require('fs')

const subscriber = new Redis('cache')

subscriber.subscribe('article', (err, count) => {
    if (err) {
        // Terminate node process
        process.exit(1)
    }
    console.log(`Subcribed successfully to ${count} ${count > 1 ? 'channels' : 'channel'}`)
})

subscriber.on("message", (channel, message) => {
    console.log("Subcriber 2" + message);
    let data = fs.readFileSync('../app/db.txt', 'utf-8')
    console.log(data)
});

app.listen(port, function () {
    console.log(`Server ModbusTCP listening on port ${port}!`)
})