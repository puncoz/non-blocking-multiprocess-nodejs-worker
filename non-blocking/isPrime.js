process.on("message", ({ number }) => {
    const jsonResponse = isPrime(number)

    process.send(jsonResponse)

    // At last we need to kill the process, else it will remain orphaned.
    process.exit()
})

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
