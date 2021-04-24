const airtimeService = require('../../services/airtime/airtime');

class Airtime{
    constructor(auth, environment) {
        this.auth = auth;
        this.enviroment = environment;
    }

    //recharge airtime library
    async rechargeAirtime(network, amount, phone, requestId = ''){
        const airtimeClass = new airtimeService(this.auth, this.enviroment);
        return  await airtimeClass.rechargeAirtime(network, amount, phone,requestId);

    }

}
module.exports = Airtime;