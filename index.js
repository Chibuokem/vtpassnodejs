const airtime = require('./library/airtime/airtime');
class Vtpass{
    constructor(environment = 'development', username, password) {
        if(environment == 'development'){
            this.auth = "Basic c2FuZGJveEB2dHBhc3MuY29tOnNhbmRib3g=";
        }else{
            this.auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
        }

        this.airtime = new airtime(this.auth);
    }
}
module.exports = Vtpass;