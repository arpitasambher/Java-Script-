
    console.log(2>1);
    console.log(2>=1);
    console.log(2<=1);
    console.log(2!=1);

    // 1st type is converted from string to int
    console.log("2">1);
    console.log(1<"2");
    console.log("tati">1);
    console.log("02ab">1);
    console.log("52t">1);

    /*in these they convert to -ve or
    +ve  or=0 acc to operator.unpredictable output 
    will be there*/
    console.log(null>1);

    console.log(null==0);
    console.log(null>=0);

console.log("next")
console.log(undefined>0);

console.log(undefined==0);
console.log(undefined>=0);

//strict equal check:it check types dont convert
console.log("2"===2)
console.log("2"===2)
console.log(2===2)