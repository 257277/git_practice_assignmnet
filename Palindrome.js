let str = "acde";
let rev = true;
let n = str.length;
for (let i = 0; i <= n / 2; i++) {
    if (str[i] != str[n - i - 1]) {
        rev = false;
    }
}

if (rev == true) {
    console.log("yes");
}
else {
    console.log("no");
}