let x = 10;
let count = 0;
for (let i = 1; i <= x; i++) {
    if (x % i== 0) {
        count++;
    }
}
if (count == 2) {
    console.log("Yes");
}
else {
    console.log("No");
}