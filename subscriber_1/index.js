const Redis = require('ioredis')
const fs = require('fs')

const subscriber = new new Redis('cache')

subscriber.subscribe('article', (err, count) => {
    if (err) {
        // Terminate node process
        process.exit(1)
    }
    console.log(`Subcribed successfully to ${count} ${count > 1 ? 'channels' : 'channel'}`)
})

subscriber.on("message", (channel, message) => {
    console.log("Subcriber 1" + message);
    let data = fs.readFileSync('../db.txt', 'utf-8')
    console.log(data)
});