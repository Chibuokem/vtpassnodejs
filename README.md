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
   //get variation codes for network provider
   const vtPassClass = require('vtpassnodejs');
   (async function(){
    const vtPassClass = new vtpass();
	const provider = 'mtn' //you can have mtn, airtel, etisalat, glo
    const variationCodes = await vtPassClass.airtime.getVariationCodes('mtn');
    console.log(variationCodes);
})();
```

```javascript
   //recharge airtime
   const vtPassClass = require('vtpassnodejs');
  (async function(){
    const vtPassClass = new vtpass();
	const phone = '08011111111' //this works for test mode 
	const amount = 200;
	const network = 'mtn'; //you can have mtn, airtel, etisalat, glo
	const variationCode = 'mtn-10mb-100'; //list of variation codes can be gotten from the getVariationCodes method above
    const buyAirtime = await vtPassClass.airtime.rechargeAirtime(network, amount, phone, variationCode);
    console.log(buyAirtime);
})();
```