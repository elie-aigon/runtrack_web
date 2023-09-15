var tab = [1, 2, 3, 4, 5];
var tab2 = [...tab];

console.log(tab2);
tab2.unshift(0);
tab2.push(6);
console.log(tab2);
tab2.shift();
console.log(tab2);
console.log(tab2.length - 1);
console.log(tab2);