const arr=[2,3,4,5,6,7];
// const output=[];
// for(let i=0;i<arr.length;i++){
//     const num=arr[i];
//     const element=num*num;
//     output.push(element);

// }
// console.log(output);
// map
const v=arr.map(x=>x*x);
console.log(v);
// filter
const c=arr.filter(x=>x>5);
console.log(c);
// find
const d=arr.find(x=>x<5);
console.log(d);