function reverseString (str) {
    return str.split("").reverse().join("");
}                                                                                                                                                             

function reverseAfterDelay (input){
    setTimeout(()=>{
        
        console.log ("Reversed string : "+reverseString(input))
    },2000);
}


console.log(reverseAfterDelay("hello"));
