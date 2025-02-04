//STACK(PRIMITIVES),HEAP(NON-PRIMITIVES)


let a="arpita"
let m=a;
m="sambher";
console.log(m);
console.log(a);

let user={
    email:"arpita@gmail.com",
    upi:"xyz"
}

let ob=user
ob.email="sambher22";

console.log(user.email);
console.log(user.upi);
console.log(ob.email);
console.log(ob.upi);


/*primitive types:null,string,boolean
bigint mai stacks used in ehich only copy is shared 

non primitive:heap is used i.e refrence is 
passed like in arrays*/