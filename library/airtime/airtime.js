const airtimeService = require('../../services/airtime/airtime');

class Airtime{
    constructor(auth) {
        this.auth = auth
    }

    //recharge airtime library
    async rechargeAirtime(network, amount, phone, variation_code, requestId = ''){
        const airtimeClass = new airtimeService(this.auth);
        const buyAirtime = await airtimeClass.rechargeAirtime(network, amount, phone, variation_code, requestId);
        return buyAirtime;
    }

    //get variation codes for provider
    async getVariationCodes(provider) {
        const airtimeClass = new airtimeService(this.auth);
        const variationCodes = airtimeClass.getVariationCodes(provider);
        return variationCodes;
    }
}
module.exports = Airtime;