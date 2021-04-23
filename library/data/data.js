const dataService = require('../../services/data/data');
class Data{
    constructor(auth, environment) {
        this.auth = auth;
        this.enviroment = environment;
    }
    //get variation codes for provider
    async getVariationCodes(provider) {
        const dataClass = new dataService(this.auth, this.enviroment);
        return await dataClass.getVariationCodes(provider);

    }

    //buy data function
     async buyData(phone, network, variation_code, request_id = '') {
        const dataClass = new dataService(this.auth, this.enviroment);
        return await dataClass.buyData(phone, network, variation_code,request_id);
     }

    //verify smile phone number
    async verifySmilePhoneNumber(billersCode) {
        const dataClass = new dataService(this.auth, this.enviroment);
        return await dataClass.verifySmilePhoneNumber(billersCode);
    }

    //verify smile phone number
    async verifySmileEmail(billersCode) {
        const dataClass = new dataService(this.auth, this.enviroment);
        return await dataClass.verifySmileEmail(billersCode);
    }
}
module.exports = Data;