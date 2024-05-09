function generateRandomNumberWithDelay (delay) {

    function displayProgress (secondsLeft){
        console.log("Time left: " + secondsLeft + " seconds");
    }


    displayProgress(delay/1000);

    var intervalId = setInterval(function(){
        delay -=1000
        if (delay <= 0) {
            clearInterval(intervalId);
            console.log("Generating random number...");
            var randomNumber = Math.random();
            console.log("Random number generated: " + randomNumber);
        } else {
            displayProgress(delay/1000);
        }   
    },1000);

}

generateRandomNumberWithDelay(3000);