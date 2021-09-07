const airtime = require('./library/airtime/airtime');
const data = require('./library/data/data');
const tv = require('./library/tv/tv');
const electricity = require('./library/electricity/electricity');
const educational = require('./library/educational/educational');
const bank = require('./library/bank/bank');
const axiosClass = require('./config/axios');
class Vtpass{
    constructor(environment = 'development', username = '', password = '') {
        if(environment == 'production'){
            let token =  new Buffer.from(username + ":" + password).toString("base64");
            this.auth = `Basic ${token}`;
        }else{
            let token =  new Buffer.from(username + ":" + password).toString("base64");
            this.auth = `Basic ${token}`;
        }
        this.enviroment = environment;
        this.airtime = new airtime(this.auth, environment);
        this.data = new data(this.auth, environment);
        this.tv = new tv(this.auth, environment);
        this.electricity = new electricity(this.auth, environment);
        this.educational = new educational(this.auth, environment);
        this.bank = new bank(this.auth, environment);
    }

    //requery transaction status
    async requeryTransaction(request_id){
        const axios = new axiosClass(this.enviroment).getAxios();
          try{
            const queryTransaction = await axios.post(
                `/requery`,
                { request_id},
                {headers: {'Authorization' : this.auth} }
            );
            return queryTransaction.data;
        }catch(error){
            console.error(error.response.data);
            return error.response.data;
        }
    }
}
module.exports = Vtpass;
