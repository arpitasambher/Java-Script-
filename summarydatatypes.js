//primitive: 
// string,boolean,number,null,undefined,symbol,bigint


//refrence type:(non primitive):
//array,functions,objects

//javascript is dynamic type:no need to declare variable with datatype

const score=100.2;
let a;
const id=Symbol('123')//symbol makes string unique
const id2=Symbol('123')//unique index hoga:output:false aata

console.log(id==id2)
let k=Symbol('12');
let s=Symbol('13');

console.log(k==s)

let r=1234567n//done for bigint
//non primitive:

const heros=["shakti","arpit"]; //array
//object 
let obh={
    name:"aru",
    s:[1,2,3]
}

//function
let my=function(){
    console.log("namatse");
}

console.log(typeof score) ;
console.log(typeof r) ;
console.log(typeof heros);
console.log(typeof obh) ;
console.log(typeof my) ;
console.log(obh) ;
