const airtime = require('./library/airtime/airtime');
const data = require('./library/data/data');
const tv = require('./library/tv/tv');
class Vtpass{
    constructor(environment = 'development', username = '', password = '') {
        if(environment == 'production'){
            this.auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
        }else{
            this.auth = "Basic c2FuZGJveEB2dHBhc3MuY29tOnNhbmRib3g=";
        }

        this.airtime = new airtime(this.auth, environment);
        this.data = new data(this.auth, environment);
        this.tv = new tv(this.auth, environment);
    }
}
module.exports = Vtpass;