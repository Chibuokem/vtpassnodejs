const vtpass = require('./index');

(async function(){
    const vtPassClass = new vtpass();
    const buyAirtime = await vtPassClass.airtime.rechargeAirtime('mtn', 200, '08011111111', 'mtn-10mb-100');
    console.log(buyAirtime);
})();

(async function(){
    const vtPassClass = new vtpass();
    const variationCodes = await vtPassClass.airtime.getVariationCodes('mtn');
    console.log(variationCodes);
})();