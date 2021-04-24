const educationalService = require('../../services/educational/educational');
class Educational {
    constructor(auth, environment) {
        this.auth = auth;
        this.enviroment = environment;
        this.educationalService = new educationalService(this.auth, this.enviroment);
    }

    //get variation codes for educationals
    async getVariationCodes(serviceID) {
        return await this.educationalService.getVariationCodes(serviceID);
    }

    //register educational service
    async registerService(service, amount, phone, variation_code, request_id = ''){
        return await this.educationalService.registerService(service, amount, phone, variation_code, request_id);
    }

}
module.exports = Educational;