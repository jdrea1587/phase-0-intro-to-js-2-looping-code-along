// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";

function writeCards(names, event) {
    let thankYouMessage = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return thankYouMessage;
    }

    writeCards("names", "event")

    function countDown(begin = 10){
        while (begin >=0) {
            console.log(begin--);
        }
    }