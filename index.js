// need notes

function writeCards(names, event) {
    const msgs = [];
    for (let i=0; i<names.length; i++) {
        msgs.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);    
    }
    return msgs;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


// While loop

function countDown(number) {
    while (number>=0) {
        console.log(number--);
    }
}