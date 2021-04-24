const axiosClass = require('../../config/axios');
const Str = require('@supercharge/strings');

class Educational {
    constructor(auth, enviroment) {
        this.auth = auth;
        this.enviroment = enviroment;
        this.axios = new axiosClass(enviroment).getAxios();
    }

    //get variation codes for educationals
    async getVariationCodes(serviceID) {
        try {
            const variationCodes = await this.axios.get(`/service-variations?serviceID=${serviceID}`);
            return variationCodes.data;
        }catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //register educational service
    async registerService(service, amount, phone, variation_code, request_id = ''){
        if(request_id == ''){
            request_id = Str.random();
        }

        try{
            const registerService = await this.axios.post(
                `/pay`,
                { request_id, serviceID:service, variation_code, phone, amount, },
                {headers: {'Authorization' : this.auth} }
            );
            return registerService.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Educational