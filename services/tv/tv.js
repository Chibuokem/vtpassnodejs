const axiosClass = require('../../config/axios');
const Str = require('@supercharge/strings');

class Tv{
    constructor(auth, enviroment) {
        this.auth = auth;
        this.enviroment = enviroment;
        this.axios  = new axiosClass(enviroment).getAxios();
    }
    //get variation codes for tv subscriptions
    async getVariationCodes(provider) {
        try {
            const variationCodes = await this.axios.get(`/service-variations?serviceID=${provider}`);
            return variationCodes.data;
        }catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify smart card
    async verifySmartCard(provider, billersCode){
        try{
            const serviceID = provider;
            const verify = await this.axios.post(
                `/merchant-verify`,
                { serviceID, billersCode},
                {headers: {'Authorization' : this.auth} }
            );
            return verify.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //buy data
    async subscribeTv(smartCard, provider, phone, variation_code, request_id = ''){
        if(request_id == ''){
            request_id = Str.random();
        }
        //billers code is just put, doesnt have any effect for this service, but seems to be required on the doc

        try{
            const subscribe = await this.axios.post(
                `/pay`,
                { request_id, serviceID: provider, billersCode: smartCard, variation_code, phone },
                {headers: {'Authorization' : this.auth} }
            );
            return subscribe.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Tv;