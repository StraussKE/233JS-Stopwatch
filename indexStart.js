// Create a class called StopWatch.
class StopWatch
{
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */

    // constructs the StopWatch object
    constructor() {
        this.isRunning = false;
        this.timer = null;
        this.timerTime = 0;

        let startBtn = document.getElementById("start");
        let stopBtn = document.getElementById("stop");
        let resetBtn = document.getElementById("reset");

        startBtn.onclick = this.startTimer.bind(this);
        stopBtn.onclick = this.stopTimer.bind(this);
        resetBtn.onclick = this.resetTimer.bind(this);
    }

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */

    startTimer() {

        if (!this.isRunning) {
            this.isRunning = true;
            this.timer = setInterval(this.incrementTimer.bind(this), 1000);
        }
    }

    // moves the timer forward
    incrementTimer() {

        this.timerTime++;

        // write the minutes and seconds to the elements on the page
        // use the function pad to make sure there's a leading 0 if necessary

        const min = Math.floor(this.timerTime / 60);
        const sec = this.timerTime % 60;

        document.getElementById('minutes').innerHTML = this.pad(min);
        document.getElementById('seconds').innerHTML = this.pad(sec);
    }

    // adds leading 0 if number is less than 10
    pad(number) {
        // add a leading 0 if the number is < 10
        if (number < 10) {
            number = "0" + number;
        }
        return number;
    }

    // stops the timer if it is running
    stopTimer() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.timer);
        }
    }

    // resets the timer
    resetTimer() {
        this.stopTimer();

        this.timerTime = 0;

        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
}

// create a variable called stopWatch
let stopWatch;
// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch
window.onload = () => { stopWatch = new StopWatch(); };