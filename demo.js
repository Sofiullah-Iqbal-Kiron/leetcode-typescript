const promiseEx = (x) => new Promise((resolve, reject) => {
    if (x < 0) reject("Done")
    if (x % 2 === 0) resolve(x)
})

promiseEx.then(data => console.log(data)).catch(err => console.log(err))
