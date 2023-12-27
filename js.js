//obj1

// let me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// const arrayToString = (arr) => arr.join('+');

// const output = Object.entries(me)
//   .map(([key, value]) => `${key}: ${Array.isArray(value) ? arrayToString(value, ",") : value}`)
//   .join("\n");

// console.log(output);

//obj2

// let n = 6;

// for (let i = 1;i <= n; i++){
//     let keys = i;
//     let obj = {
//         i : i,
//         result: i * i,
//     }
//     console.log(obj);
// }

//obj3

// let mahsulot =  {
//     name: "telefon",
//     cost: 300,
//     location: "Tashkent",
// }

// let keys = Object.keys(mahsulot);
// let value = Object.values(mahsulot);

// console.log("Keys:", ...keys)
// console.log("Value:", ...value);

//obj4

// let strings = ["salom", "hayr", "qanday", "bugun", "yaxshi"];

// let resultObject = {};

// for (var i = 0; i < strings.length; i++) {
//   let key = strings[i];
//   let value = strings[i].length;
//   resultObject[key] = value;
// }

// console.log(resultObject);


//obj6

// function defineObject(obj) {
//   if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
//     return false;
//   }

//   for (const key in obj) {
//     if (typeof obj[key] !== 'string') {
//       return false;
//     }
//   }

//   return true;
// }

// const obj1 = { name: 'John', age: '25' };
// const obj2 = { name: 'Alice', age: 30 };
// const obj3 = { city: 'City', population: 45000 };
// const obj4 = 'This is a string';
// const obj5 = [1, 2, 3];

// console.log(defineObject(obj1)); 
// console.log(defineObject(obj2)); 
// console.log(defineObject(obj3)); 
// console.log(defineObject(obj4)); 
// console.log(defineObject(obj5)); 

