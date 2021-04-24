const axiosClass = require('../../config/axios');
const Str = require('@supercharge/strings');
class Bank{
    constructor(auth, enviroment) {
        this.auth = auth;
        this.enviroment = enviroment;
        this.axios  = new axiosClass(enviroment).getAxios();
    }

    //get variation codes for data subscriptions
    async getVariationCodes() {
        let serviceID = 'bank-deposit';
        try {
            const variationCodes = await this.axios.get(`/service-variations?serviceID=${serviceID}`);
            return variationCodes.data;
        }catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify bank account bymber
    async verifyAccountNumber(bank, accountNumber) {
        try{
            const serviceID = 'bank-deposit';
            const verify = await this.axios.post(
                `/merchant-verify`,
                { serviceID, billersCode: accountNumber, type: bank},
                {headers: {'Authorization' : this.auth} }
            );
            return verify.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //transfer to bank
    async deposit(account_number, bank, amount, phone, request_id = ''){
        if(request_id == ''){
            request_id = Str.random();
        }
        try{
            const serviceID = 'bank-deposit';
            const buyAirtime = await this.axios.post(`/pay`, {billersCode: account_number, variation_code: bank, amount, phone, request_id, serviceID},{headers: {'Authorization' : this.auth} });
            return buyAirtime.data;
        }catch(error){
            return error.response.data;
        }

    }


}
module.exports = Bank;