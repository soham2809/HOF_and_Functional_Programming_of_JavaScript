let regex =/[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g;
function validateURL(str) {
    if (str.match(regex)) {
        console.log("Valid Linkedin Profile");
    } else {
        console.log("Not Valid Linkedin Profile");
    }
}
validateURL("https://www.linkedin.com/in/soham-mukherjee-634881217/")
validateURL("https://www.facebook.com/profile.php?id=100075366399166&mibextid=LQQJ4d")
