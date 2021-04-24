const axiosClass = require('../../config/axios');
const Str = require('@supercharge/strings');
class Airtime{
    constructor(auth, enviroment) {
        this.auth = auth;
        this.enviroment = enviroment;
        this.axios  = new axiosClass(enviroment).getAxios();
    }
    async rechargeAirtime(network, amount, phone, request_id = ''){
        if(request_id == ''){
            request_id = Str.random();
        }
        try{
            const serviceID = network;
            const buyAirtime = await this.axios.post(`/pay`, {network, amount, phone, request_id, serviceID},{headers: {'Authorization' : this.auth} });
            return buyAirtime.data;
        }catch(error){
            return error.response.data;
        }

    }

}
module.exports = Airtime;