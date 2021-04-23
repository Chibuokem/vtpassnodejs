const dataService = require('../../services/data/data');
class Data{
    constructor(auth, environment) {
        this.dataClass = new dataService(auth, environment);
    }
    //get variation codes for provider
    async getVariationCodes(provider) {
        return await this.dataClass.getVariationCodes(provider);

    }

    //buy data function
     async buyData(phone, network, variation_code, request_id = '') {
        return await this.dataClass.buyData(phone, network, variation_code,request_id);
     }

    //verify smile phone number
    async verifySmilePhoneNumber(billersCode) {
        return await this.dataClass.verifySmilePhoneNumber(billersCode);
    }

    //verify smile phone number
    async verifySmileEmail(billersCode) {
        return await this.dataClass.verifySmileEmail(billersCode);
    }
}
module.exports = Data;