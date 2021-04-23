# vtpassnodejs
A Package to interact with vtpass api using nodejs

#installation
You can install the package via npm :
```bash
npm install vtpassnodejs
```
#Usage
The below examples the classes are initiated in sandbox mode, to intiate the vtpass class in production mode , you will do as shown below 
```javascript
 const vtPassClass = new vtpass('production', 'your username', 'your password');
 
 ```

```javascript
   //recharge airtime
   const vtPassClass = require('vtpassnodejs');
  (async function(){
    const vtPassClass = new vtpass();
	const phone = '08011111111' //this works for test mode 
	const amount = 200;
	const network = 'mtn'; //you can have mtn, airtel, etisalat, glo, smile
	const variationCode = 'mtn-10mb-100'; //list of variation codes can be gotten from the getVariationCodes method above
    const buyAirtime = await vtPassClass.airtime.rechargeAirtime(network, amount, phone, variationCode);
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
    const phone = '08011111111';
    const network = 'mtn'; //you can have mtn, airtel, etisalat, glo, smile
    const buyData = await vtPassClass.data.buyData(phone, network, variationCode);
    console.log(buyData);
})();
```

```javascript
   //verify smile phone number
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
	const phone = ''2348011111111';
    const verifyPhone = await vtPassClass.data.verifySmilePhoneNumber(phone);
    console.log(verifyPhone);
})();
```

```javascript
   //verify smile email
     const vtPassClass = require('vtpassnodejs');
(async function(){
    const vtPassClass = new vtpass();
	const email = ''tester@sandbox.com';
    const verifyEmail = await vtPassClass.data.verifySmileEmail(email);
    console.log(verifyEmail);
})();
```
