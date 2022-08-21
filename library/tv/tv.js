const tvService = require('../../services/tv/tv');
class Tv {
    constructor(auth, environment) {
            this.auth = auth;
            this.enviroment = environment;
        }
        //get variation codes for tv subscriptions
    async getVariationCodes(provider) {
        const tvClass = new tvService(this.auth, this.enviroment);
        return await tvClass.getVariationCodes(provider);
    }

    //verify smart card
    async verifySmartCard(provider, billersCode) {
        const tvClass = new tvService(this.auth, this.enviroment);
        return await tvClass.verifySmartCard(provider, billersCode);
    }

    //buy data
    async subscribeTv(smartCard, provider, phone, variation_code, amount = '', request_id = '') {
        const tvClass = new tvService(this.auth, this.enviroment);
        return await tvClass.subscribeTv(smartCard, provider, phone, variation_code, request_id);
    }
}
module.exports = Tv;