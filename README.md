
# Sample messaging system using Redis Pub/Sub and Node.js

In this sample, I have 3 folders, each folder contains code of a program.
This mini project demonstrates how to interact between multiple services in a system.
Additionaly, it also guide to deploy the entire system by docker

## Prerequisite

Basic acknowledgement of:

- Redis Pub/Sub mechanism
- Nodejs
- Using docker

## Development testing

We must go to each directory and run the `index.js` file by command:

```console
node index.js
```

As you can see, we have three processes running now:

- The publisher process write the current time to the file **db.txt** then publishes to channel `article` a message every `MINUTE_INTERVAL`.
- Two another processes, which are subcribers,  subscribe to the channel `article`. When they receive a message from the publisher process, they read the data from the file **db.txt** and log their name, received message and read data to console.

## Deploy

This project must be deployed on Linux operating system.
Please install **docker**, **docker-compose** before deploying.

In the project directory, run the command below to build and run all images in background mode:

```console
docker-compose up -d --build
```

If you want to stop the entire system (include volume), run this command:

```command
docker-compose down --volume
```
