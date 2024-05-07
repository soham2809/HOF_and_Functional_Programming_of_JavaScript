//1) FOR EACH 
let arr =[2,3,4,5]
arr.forEach(function(element,index,array){
    console.log(element,index,array);
})
//Output:2 0 [ 2, 3, 4, 5 ]
//3 1 [ 2, 3, 4, 5 ]
//4 2 [ 2, 3, 4, 5 ]
//5 3 [ 2, 3, 4, 5 ]

arr.forEach((element,index,array)=>{
    console.log("arrow",element,index,array);
})
//Output :arrow 2 0 [ 2, 3, 4, 5 ]
//arrow 3 1 [ 2, 3, 4, 5 ]
//arrow 4 2 [ 2, 3, 4, 5 ]
//arrow 5 3 [ 2, 3, 4, 5 ]
const heroes = ["spiderman","thor","hulk","ironman","captain america"];
heroes.forEach((el)=>{console.log(el.toUpperCase())});

//Output:SPIDERMAN
//THOR 
//HULK
//IRONMAN
//CAPTAIN AMERICA


//2) MAP (Its somewhat same as ForEach)
arr.map(function(element,index,array){
    console.log("Through map",element,index,array);
})
//Output:Through map 2 0 [ 2, 3, 4, 5 ]
//Through map 3 1 [ 2, 3, 4, 5 ]
//Through map 4 2 [ 2, 3, 4, 5 ]
//Through map 5 3 [ 2, 3, 4, 5 ]

heroes.map((h)=>console.log(h.toUpperCase()));
//Output:SPIDERMAN  
//THOR
//HULK
//IRONMAN
//CAPTAIN AMERICA


//3) FILTER 
console.log(heroes);
const newheroes =heroes.filter((h)=>{
    return h.endsWith("man")
});
console.log(newheroes);
//Output:[ 'spiderman', 'ironman']


//4) REDUCE
const cartBill=[20,30,40,50,60]
const sumOfCartBill=cartBill.reduce((prev,cur)=> prev+cur,0)
console.log(sumOfCartBill);
//Output:200

//5)EVERY
const gameScore =[200,300,310,250,150]
//Checks if all values are numbers
console.log(typeof gameScore[1]);
const gameScorecheck = gameScore.every ((v)=> typeof v ==='number')
console.log("check:",gameScorecheck);
//Output:number
//check: true


//6) FIND
//find score above 200
const above200 = gameScore.find ((score)=> score>200)
console.log(above200);
// find selects the nearest value around 200 ,here nearest is 300 ,so 300 gets printed 
//Output:300


//7)Find Index
const array1=[5,12,8,13,44]
console.log(array1.findIndex((element)=>element>13));
//Output:4
//find index return the index of the first element which satisfies the condition

//8) SORT
const nums=[12,45,4,55,6,10,1000,434,900]
console.log(nums.sort());
//Output:[ 10, 1000, 12, 4, 434, 45, 55, 6, 900 ]
// The numbers are converted to their string equivalent and then sorted based on Unicode values.
const months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
console.log(months.sort());
//Output:[ 'apr', 'aug', 'dec', 'feb', 'jan', 'jul', 'jun', 'mar', 'may', 'nov', 'oct', 'sep' ]
//By default, it sorts the elements in the array in ascending order based on their string Unicode values. 
//The function takes the inputs, converts them to strings, and then sorts them using Unicode values.


//9) SOME
const arr5 =[1,2,3,4,5]
console.log(arr5.some((even)=>even%2===0));
//Output:true
const arr6 =[1,3,5]
console.log(arr6.some((even)=>even%2===0));
//Output:false
//The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. 
//It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
//It doesn't modify the array.