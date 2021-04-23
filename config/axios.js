const  axios = require('axios');

class Axiosetup {
    constructor(enviroment = 'development') {
        //enviroment is development or production
        if(enviroment == 'production'){
            axios.defaults.baseURL = 'https://vtpass.com/api';
        }else {
            axios.defaults.baseURL = 'https://sandbox.vtpass.com/api';
        }
        axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
        axios.defaults.headers.post['Accept'] = 'application/json';
    }

    getAxios(){
        return axios;
    }
}
module.exports = Axiosetup;