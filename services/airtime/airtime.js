const axiosClass = require('../../config/axios');
const axios = new axiosClass().getAxios();
const Str = require('@supercharge/strings');
class Airtime{
    constructor(auth) {
        this.auth = auth;
    }
    async rechargeAirtime(network, amount, phone, variation_code, request_id = ''){
        if(request_id == ''){
            request_id = Str.random();
        }
        try{
            const serviceID = network + "-data";
            const buyAirtime = await axios.post(`/pay`, {network, amount, phone, request_id, serviceID, variation_code},{headers: {'Authorization' : this.auth} });
            return buyAirtime.data;
        }catch(error){
            return error.response.data;
        }

    }
    //get variation codes
    async getVariationCodes(provider) {
        try {
            const variationCodes = await axios.get(`/service-variations?serviceID=${provider}-data`);
            return variationCodes.data;
        }catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Airtime;