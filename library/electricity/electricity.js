const electricityService = require('../../services/electricity/electricity');
class Electricity {
    constructor(auth, environment) {
        this.auth = auth;
        this.enviroment = environment;
        this.electricityClass = new electricityService(this.auth, this.enviroment);
    }

    //verify electricity meter number
    async verifyMeterNumber(meterNumber, provider, type = 'prepaid') {
       return await this.electricityClass.verifyMeterNumber(meterNumber, provider, type)
    }

    //recharge light
    async rechargeLight(meterNumber, provider, amount, phone, meterType = 'prepaid', request_id = '') {
        return await this.electricityClass.rechargeLight(meterNumber, provider, amount, phone, meterType, meterType, request_id);
    }
}
module.exports = Electricity;