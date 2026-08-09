let primeCheck: number = 7;
let isPrime: boolean = true;

if (primeCheck <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primeCheck; i++) {
        if (primeCheck % i === 0) {
            isPrime = false;
        }
    }
}

if (isPrime) {
    console.log(`The Given Number ${primeCheck} is prime number`);
} else {
    console.log(`The Given Number ${primeCheck} is not prime number`);
}