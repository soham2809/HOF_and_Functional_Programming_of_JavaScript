// By Soham Mukherjee

// What is Higher Order Function?
//Ans: A function that returns a function or takes other function as a argument is called Higher Order Function.


//1
const powertwo=(n)=>{
    return n**2
}
function powerCube (powerTwo,n){
    return powerTwo(n)**3
}
console.log(powerCube(powertwo,5));
// Output:15625

//2
function sayHello(){
    return() => { console.log("Hello Soham");
}
}
let guessValue = sayHello();
console.log(guessValue);
guessValue();
// Output:[Function (anonymous)]
//Hello Soham

//3
const higherOrder =n=> {
    const oneFun = m =>{
        const twoFun = p =>{
            return n+m+p
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(5)(6)(7));

// Output: 18

// 4
const myNums =[2,3,4,5,6,7]
const sumArray = (myNums) => {
    let total =0;
    myNums.forEach((elements)=>{
        total += elements
    });
    return total;
}
console.log(sumArray(myNums));
//output:27


// 5
function oneMoreHello (){
    console.log("Hello Soham",Math.random());
}
setInterval(oneMoreHello,1000);//1000=1sec
// It will print Hello Soham everytime after 1sec
setInterval(oneMoreHello,2000);//2000=2sec
// It will print Hello Soham everytime after 2sec
setTimeout(oneMoreHello,3000);//3000=3sec
// It will print Hello Soham after 3sec and then it will stop