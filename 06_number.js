const score=400
const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));//gives decimal after 2 digit only in decimal
console.log(balance.toFixed(5));

const other1=12.32777777
const other2=12.321111
console.log(other1.toPrecision(4))
console.log(other2.toPrecision(4))



const a=100000
console.log(a.toLocaleString());//
/**
 * const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"
 */

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.5));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.0));

console.log(Math.random());//return between 0 and 1

console.log((Math.random()*10)+1);

const k=10
const j=20

console.log((Math.random()*(j-k+1))+k);