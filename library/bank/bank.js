const bankService = require('../../services/bank/bank');
class Bank {
    constructor(auth, environment) {
        this.bankClass = new bankService(auth, environment);
    }

    //get variation codes for banks
    async getVariationCodes() {
        return await this.bankClass.getVariationCodes();
    }

    //verify bank account bymber
    async verifyAccountNumber(bank, accountNumber) {
        return await this.bankClass.verifyAccountNumber(bank, accountNumber);
    }

    //transfer to bank
    async deposit(account_number, bank, amount, phone, request_id = ''){
        return await this.bankClass.deposit(account_number, bank, amount, phone, request_id);
    }
}
module.exports = Bank;