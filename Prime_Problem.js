let x = 10;
let count = 0;
for (let i = 2; i <= x; i++) {
    if (x % 2 != 0) {
        count++;
    }
}
if (count >= 1) {
    console.log("Yes");
}
else {
    console.log("No");
}