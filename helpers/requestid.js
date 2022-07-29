function mod(n) { // always returns a string
    return (n < 10 ? '0' : '') + n;
}

function generateDateReference() {
    //The Request ID should be a string in the unix format YYYYMMDDHHII consisting of today’s date + current hour and minute
    let today = new Date()
    let randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let result = today.getFullYear() +
        mod(today.getMonth() + 1) +
        mod(today.getDate()) +
        mod(today.getHours()) +
        mod(today.getMinutes()) +
        mod(today.getSeconds()) + randomString;
    return result;
}
module.exports = generateDateReference