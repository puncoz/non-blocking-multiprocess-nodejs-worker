const express = require("express")

const app = express()

const isPrime = (number) => {
    let startTime = new Date()
    let endTime = new Date()
    let isPrime = true

    for (let i = 3; i < number; i++) {
        if (number % i === 0) {
            endTime = new Date()
            isPrime = false
            break
        }
    }

    if (isPrime) {
        endTime = new Date()
    }

    return {
        number,
        isPrime,
        time: endTime.getTime() - startTime.getTime(),
    }
}

app.get("/is-prime", (req, res) => {
    const jsonResponse = isPrime(parseInt(req.query.number))

    res.send(jsonResponse)
})

const port = 8081
app.listen(port, () => console.log(`Blocking server started at port ${port}`))

