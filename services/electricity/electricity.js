const axiosClass = require('../../config/axios');
const Str = require('@supercharge/strings');
const reqId = require('../../helpers/requestid')
class Electricity {
    constructor(auth, enviroment) {
        this.auth = auth;
        this.enviroment = enviroment;
        this.axios = new axiosClass(enviroment).getAxios();
    }

    //verify electricity meter number
    async verifyMeterNumber(meterNumber, provider, type = 'prepaid') {
        try{
            const verify = await this.axios.post(
                `/merchant-verify`,
                { serviceID: provider, billersCode: meterNumber, type},
                {headers: {'Authorization' : this.auth} }
            );
            return verify.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //recharge light
    async rechargeLight(meterNumber, provider, amount, phone, meterType = 'prepaid', request_id = '') {
        if(request_id == ''){
            request_id = reqId();
        }

        try{
            const buyLight = await this.axios.post(
                `/pay`,
                { request_id, serviceID: provider, billersCode: meterNumber, variation_code: meterType, phone, amount },
                {headers: {'Authorization' : this.auth} }
            );
            return buyLight.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Electricity;