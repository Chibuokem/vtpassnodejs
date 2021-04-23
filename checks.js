const vtpass = require('./index');

// (async function(){
//     const vtPassClass = new vtpass();
//     const buyAirtime = await vtPassClass.airtime.rechargeAirtime('mtn', 200, '08011111111', 'mtn-10mb-100');
//     console.log(buyAirtime);
// })();
//
// (async function(){
//     const vtPassClass = new vtpass();
//     const variationCodes = await vtPassClass.data.getVariationCodes('smile');
//     console.log(variationCodes);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const variationCode = 'mtn-10mb-100';
//     const phone = '08011111111';
//     const network = 'mtn';
//     const buyData = await vtPassClass.data.buyData(phone, network, variationCode);
//     console.log(buyData);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const verifyPhone = await vtPassClass.data.verifySmilePhoneNumber('2348011111111');
//     console.log(verifyPhone);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const verifyEmail = await vtPassClass.data.verifySmileEmail('tester@sandbox.com');
//     console.log(verifyEmail);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const varationCodes = await vtPassClass.tv.getVariationCodes('dstv');
//     console.log(varationCodes);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const provider = 'dstv';
//     const billersCode = 1212121212;
//     const verifySmartCard = await vtPassClass.tv.verifySmartCard(provider, billersCode);
//     console.log(verifySmartCard);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const smartCard = 1212121212;
//     const provider = 'dstv';
//     const phone = '08011111111';
//     const variationCode = 'dstv-padi';
//     const verifySmartCard = await vtPassClass.tv.subscribeTv(smartCard, provider, phone, variationCode);
//     console.log(verifySmartCard);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const provider = 'ikeja-electric';
//     const meterNumber = 1111111111111;
//     const type = 'prepaid';
//     const verifyMeter = await vtPassClass.electricity.verifyMeterNumber(meterNumber, provider, type)
//     console.log(verifyMeter);
// })();

// (async function(){
//     const vtPassClass = new vtpass();
//     const provider = 'ikeja-electric';
//     const meterNumber = 1111111111111;
//     const meterType = 'prepaid';
//     const amount = 5000;
//     const phone = '08011111111';
//     const rechargeLight = await vtPassClass.electricity.rechargeLight(meterNumber, provider, amount, phone, meterType);
//     console.log(rechargeLight);
// })();