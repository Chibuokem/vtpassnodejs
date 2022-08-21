# vtpassnodejs
A Package to interact with vtpass api using nodejs

[Vtpass documentation](https://www.vtpass.com/documentation/)

[Response codes](https://www.vtpass.com/documentation/response-codes/)

[Webook](https://www.vtpass.com/documentation/callback-api-integration/)

[how to generate request id](https://www.vtpass.com/documentation/how-to-generate-request-id/)

#installation
You can install the package via npm :
```bash
npm install vtpassnodejs
```


#Usage
Please note that for the below examples the classes are initiated in sandbox mode, to intiate the vtpass class in production mode , you will do as shown below 
```javascript
//for production mode
 const vtPassClass = new vtpass('production', 'your username', 'your password');
 
 ```
 ```javascript
//for test mode
 const vtPassClass = new vtpass();
 
 ```




```javascript
   //recharge airtime
   const vtPassClass = require('vtpassnodejs');
  (async function(){
    const vtPassClass = new vtpass();
	const phone = 08011111111 //this works for test mode 
	const amount = 200;
	const network = 'mtn'; //you can have mtn, airtel, etisalat, glo, smile
	const request_id = 'your unique request id'; // if not passed , one is generated for you automatically by the package
    const buyAirtime = await vtPassClass.airtime.rechargeAirtime(network, amount, phone, variationCode, request_id);
    console.log(buyAirtime);
})();
```

```javascript
   //get variation codes for subscriptions for network provider
   const vtPassClass = require('vtpassnodejs');
   (async function(){
    const vtPassClass = new vtpass();
	const provider = 'mtn' //you can have mtn, airtel, etisalat, glo, smile
    const variationCodes = await vtPassClass.data.getVariationCodes('mtn');
    console.log(variationCodes);
})();
```

```javascript
   //subscribe data
     const vtPassClass = require('vtpassnodejs');
  (async function(){
    const vtPassClass = new vtpass();
    const variationCode = 'mtn-10mb-100';
    const phone = 08011111111;
    const network = 'mtn'; //you can have mtn, airtel, etisalat, glo, smile
	const request_id = 'your unique request id'; // if not passed , one is generated for you automatically by the package, [how to generate request id] (https://www.vtpass.com/documentation/how-to-generate-request-id/)
    const buyData = await vtPassClass.data.buyData(phone, network, variationCode, request_id);
    console.log(buyData);
})();
```

```javascript
   //verify smile phone number
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
	const phone = 2348011111111;
    const verifyPhone = await vtPassClass.data.verifySmilePhoneNumber(phone);
    console.log(verifyPhone);
})();
```

```javascript
   //verify smile email
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
	const email = 'tester@sandbox.com';
    const verifyEmail = await vtPassClass.data.verifySmileEmail(email);
    console.log(verifyEmail);
})();
```

```javascript
   //get variation codes for tvn subscriptions
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
	const provider = 'dstv'; //dstv, gotv, startimes
    const varationCodes = await vtPassClass.tv.getVariationCodes(provider);
    console.log(varationCodes);
})();
```

```javascript
   //verify smart card number
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
    const provider = 'dstv';
    const billersCode = 1212121212;
    const verifySmartCard = await vtPassClass.tv.verifySmartCard(provider, billersCode);
    console.log(verifySmartCard);
})();
```

```javascript
   //subscribe tv
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
    const smartCard = 1212121212;
    const provider = 'dstv';
    const phone = 08011111111;
    const variationCode = 'dstv-padi';
    const amount = ''; //amount can be empty, if amount is not empty, the account is topped up the amount
	const request_id = 'your unique request id'; // if not passed , one is generated for you automatically by the package
    const verifySmartCard = await vtPassClass.tv.subscribeTv(smartCard, provider, phone, variationCode, amount, request_id);
    console.log(verifySmartCard);
})();
```

```javascript
   //verify electricity meter number
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
    const provider = 'ikeja-electric';
    const meterNumber = 1111111111111;
    const type = 'prepaid'; //can be prepaid or postpaid
    const verifyMeter = await vtPassClass.electricity.verifyMeterNumber(meterNumber, provider, type)
    console.log(verifyMeter);
})();
```

```javascript
   //buy electricity token
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
    const provider = 'ikeja-electric'; // ikeja-electric, eko-electric, kano-electric, portharcourt-electric, jos-electric, ibadan-electric, kaduna-electric, abuja-electric
    const meterNumber = 1111111111111;
    const meterType = 'prepaid';
    const amount = 5000;
    const phone = '08011111111';
	const request_id = 'your unique request id'; // if not passed , one is generated for you automatically by the package
    const rechargeLight = await vtPassClass.electricity.rechargeLight(meterNumber, provider, amount, phone, meterType, request_id);
    console.log(rechargeLight);
})();
```

```javascript
//get variation codes for educational services 
(async function(){
    const vtPassClass = new vtpass();
	const service = 'waec-registration'; //waec-registration, waec waec-registration is for waec registration, waec option is for result checking service
    const varationCodes = await vtPassClass.educational.getVariationCodes(service);
    console.log(varationCodes);
})();
```

```javascript
//purchase token for an educational service
(async function(){
    const vtPassClass = new vtpass();
    const service = 'waec-registration';  //waec-registration, waec waec-registration is for waec registration, waec option is for result checking service
    const amount = 14450; //this is gotten from variation amount on the get variation codes point
    const phone = 08011111111;
    const variation_code = 'waec-registraion'; //this is the variation code gotten from the method above for the service that it belongs 
	const request_id = 'your unique request id'; // if not passed , one is generated for you automatically by the packag
    const registerService = await vtPassClass.educational.registerService(service, amount, phone, variation_code, request_id);
    console.log(registerService);
})();
```

```javascript
//requery transaction status
(async function(){
    const vtPassClass = new vtpass();
    const request_id = 'llmOt7lzlOVKQCavfD3U6887';
    const requeryService = await vtPassClass.requeryTransaction(request_id)
    console.log(requeryService);
})();
```

```javascript
//get list of banks
(async function(){
    const vtPassClass = new vtpass();
    const banks = await vtPassClass.bank.getVariationCodes();
    console.log(banks);
})();
```

```javascript
//verify account number
(async function(){
    const vtPassClass = new vtpass();
    const bank = 'zenith-mobile'; //gotten from bank varation codes
    const accountNumber = 1234567890;
    const bankDetail = await vtPassClass.bank.verifyAccountNumber(bank, accountNumber);
    console.log(bankDetail);
})();
```

```javascript
//send money across to banks, please also setup webhooks for this service 
(async function(){
    const vtPassClass = new vtpass();
    const bank = 'zenith-mobile'; //gotten from bank variation codes
    const accountNumber = 1234567890;
    const amount = 100000;
    const phone = '08011111111';
	const request_id = 'your unique request id';
    const deposit = await vtPassClass.bank.deposit(accountNumber, bank, amount, phone, request_id);
    console.log(deposit);
})();
```

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)