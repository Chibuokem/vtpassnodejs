const axiosClass = require('../../config/axios');
const Str = require('@supercharge/strings');
const reqId = require('../../helpers/requestid')

class Data {
    constructor(auth, enviroment) {
            this.auth = auth;
            this.enviroment = enviroment;
            this.axios = new axiosClass(enviroment).getAxios();
        }
        //get variation codes for data subscriptions
    async getVariationCodes(provider) {
        let serviceID;
        if (provider == 'smile') {
            serviceID = provider + "-direct";
        } else {
            serviceID = provider + "-data";
        }
        try {
            const variationCodes = await this.axios.get(`/service-variations?serviceID=${serviceID}`);
            return variationCodes.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //buy data
    async buyData(phone, network, variation_code, request_id = '') {
        if (request_id == '') {
            request_id = reqId();
        }
        let serviceID;
        //billers code is just put, doesnt have any effect for this service, but seems to be required on the doc
        const billersCode = "08011111111";
        if (network == 'smile') {
            serviceID = network + "-direct";
        } else {
            serviceID = network + "-data";
        }

        try {
            const buyData = await this.axios.post(
                `/pay`, { request_id, serviceID, billersCode, variation_code, phone }, { headers: { 'Authorization': this.auth } }
            );
            return buyData.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify smile phone number
    async verifySmilePhoneNumber(billersCode) {
        try {
            const serviceID = 'smile-direct';
            const verify = await this.axios.post(
                `/merchant-verify`, { serviceID, billersCode }, { headers: { 'Authorization': this.auth } }
            );
            return verify.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }

    //verify smile phone number
    async verifySmileEmail(billersCode) {
        try {
            const serviceID = 'smile-direct';
            const verify = await this.axios.post(
                `/merchant-verify/smile/email`, { serviceID, billersCode }, { headers: { 'Authorization': this.auth } }
            );
            return verify.data;
        } catch (error) {
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Data;