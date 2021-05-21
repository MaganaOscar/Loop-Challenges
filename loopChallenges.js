//Print odds 1-20
console.log("Print odds 1-20");
for (var i = 0; i<20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

//Decreasing Multiples of 3
console.log("\nDecreasing multiples of 3");
for (var i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Print the sequence
console.log("\nPrint the sequence");
for(var i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

//Sigma
console.log("\nSigma");
let sum = 0;
for(let i = 1; i<=100; i++) {
    sum += i;
}
console.log(sum);

//Factorial
console.log("\nFactorial");
let factorial = 1;
for(let i = 1; i <= 12; i++) {
    factorial *= i;
}
console.log(factorial);