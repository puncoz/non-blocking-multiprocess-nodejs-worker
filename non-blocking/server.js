const express = require("express")
const { fork } = require("child_process")
const { resolve } = require("path")

const app = express()

app.get("/is-prime", (req, res) => {
    // Forking (i.e. cloning another js files as a separate process, called child-process
    const childProcess = fork(resolve(__dirname, "./isPrime.js"))

    // Sending arguments required for child process and then listen it
    childProcess.send({ number: parseInt(req.query.number) })

    childProcess.on("message", message => res.send(message))
})

const port = 8082
app.listen(port, () => console.log(`Non-blocking server started at port ${port}`))

