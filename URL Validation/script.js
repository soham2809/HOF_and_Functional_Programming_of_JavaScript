let Regex =/((https?|ftp):\/\/|www\.)[^\s/$.?#].[^\s]*/ig;

//let Regex =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
//let Regex =/^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;
// Got hint from https://regexr.com/ the official website of regex
function validateURL(str) {
    if (str.match(Regex)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}


validateURL("htp://example.com");
validateURL("https://example.com");
validateURL("example.com");
