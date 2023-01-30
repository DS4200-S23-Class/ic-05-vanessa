
// initialize counter
count = 0;

// buttonFunc: allows for the text counter to update
function buttonFunc() {

    // starts the text without the counter
    const textBeginning = "Number of times button clicked: ";

    // adds to the counter
    count++;
    
    // combines both parts of the statement (text + count)
    let finalStatement = textBeginning.concat(count);

    // returns the final statement and updates html
    document.getElementById("buttonText").innerHTML = finalStatement;
}