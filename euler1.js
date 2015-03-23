var sum = 0;

for (i = 1000; --i >= 0;) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);
