// The first function takes two parameters. One is an array and the other is a string. 
// Know the outcome is a new array. Need to create an empty array to hold the new information. 
// The empty array is called msgs and is defined before the for...loop.
// Inside the for...loop, additional information is added to the new array by pushing new information
// to combine with the info from the original array.  
// The names array and event string are interpolated in the push function (e.g., array method). 
// The new array is returned outside of the for...loop. 
// The first function is invoked. Note: the names do not matter because the test includes them. Is not
// the case if I was writing my own code. 

function writeCards(names, event) {
    const msgs = [];
    for (let i=0; i<names.length; i++) {
        msgs.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);    
    }
    return msgs;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


// While loop - keep looping until the condition is becomes false. 
// The function loops and counts down in increments of 1. 
// Note: if wanted a different decrement, then used -=2 ...etc. 
// Summary: The countDown function requries a parameter, the while loop function 
// requires a condition that the parameter is tested against in each loop. The function
// will keep looping as long as the condition is true and stop when it becomes false. 

function countDown(number) {
    while (number>=0) {
        console.log(number--);
    }
}