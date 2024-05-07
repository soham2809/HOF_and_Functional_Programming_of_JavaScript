//Regular expressions are a concise and flexible tool for describing patterns in strings. 
// here are two flags g and i
// Where g is for global and i is for case insensitive.

let pattern ='pw';
let RegexOne =new RegExp(pattern)
let flag = 'gi';
let RegexTwo =new RegExp(pattern,flag)
let RegexThree =/pw/gi;

const strToCheck="pw is growing at a rapid speed and recently they are working on pwskills to create skill based pw content";

console.log(RegexOne.test(strToCheck));
//Output : true

const strToCheck2="Pw is growing at a rapid speed and recently they are working on Pwskills to create skill based Pw content";

console.log(RegexOne.test(strToCheck2));
// Output : false

const strToCheck3="Pw is growing at a rapid speed and recently they are working on pwskills to create skill based Pw content";
console.log(RegexTwo.test(strToCheck3));
// Output : true

const anotherResult = strToCheck.match(RegexThree);
console.log(anotherResult);
//Output: [ 'pw', 'pw', 'pw' ]

const anotherResult2=strToCheck3.match (RegexTwo);
console.log(anotherResult2);
//Output :[ 'Pw', 'pw', 'Pw' ]

const oneMoreResult = strToCheck.replace(RegexThree,'p-w')
console.log(oneMoreResult);
//Output: p-w is growing at a rapid speed and recently they are working on p-wskills to create skill based p-w content

const usableUrl ="http://pwSkills.com/Soham%20Mukherjee"
console.log(usableUrl.replace(/%20/,'_'));
//Output: http://pwSkills.com/Soham_Mukherjee
const usableUrl2 ="http://pwSkills.com/Soham%30Mukherjee"
console.log(usableUrl2.replace(/%20/,'_'));
//Output:http://pwSkills.com/Soham%20Mukherjee

const usableUrl4 ="http://pwSkills.com/Soham%40Mukherjee"
const usableUrl5 ="http://pwSkills.com/Soham%50Mukherjee"
const usableUrl6 ="http://pwSkills.com/Soham%60Mukherjee"
console.log(usableUrl4.replace(/\d\d/,'_'));
console.log(usableUrl5.replace(/\d\d/,'_'));
console.log(usableUrl6.replace(/\d\d/,'_'));
//Output: http://pwSkills.com/Soham_Mukherjee
//http://pwSkills.com/Soham_Mukherjee
//http://pwSkills.com/Soham_Mukherjee



