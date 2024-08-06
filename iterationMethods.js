const numbers = [10, 13, 20, 25, 38, 35, 40];

//task1//
const q1=numbers.filter((x)=>{return x>25});
console.log(q1);

const q2=numbers.filter((x)=>{return (x%5 == 0) });
console.log(q2);

//task2//
const q3=numbers.map((x)=>{return x*x});
console.log(q3);

const q4=numbers.map((x)=>{return x*2});
console.log(q4);

//task3//
const q5 =numbers.filter((x)=>{return x>=20});
const q51 = q5.map((x)=>{return x*x});
console.log(q51);

const q6 =q2.map((x)=>{return x*3});
console.log(q6);
