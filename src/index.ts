//import "core-js";
import './scss/main.scss';
import 'rxjs/add/observable/from';
import { Observable } from "rxjs/Observable";
let numbers = [5, 10, 15, 20, 25];

//
let index = 0;
let counter = 0;
let dateTimer = null;
let observableFrom$ = Observable.from(numbers);
let observableCreate$ = Observable.create(ovserver => {
    function produceValue() {

        if (index < numbers.length) {
            setTimeout(() => {
                ovserver.next(numbers[index]);
                index++;
                produceValue();
            }, 2000)
        }
        else {
            ovserver.complete();
        }
    }
    produceValue();

});

let observableIncrement$ = Observable.create(ovserver => {
    function produceCounterValue() {
        setTimeout(() => {
            if (counter < 10 ) {
                ovserver.next(counter);
                counter++;
                produceCounterValue();
            }
            else {
                ovserver.complete();
            }
        }, 1000)
    }
    produceCounterValue();

});

let observableUpdateTime$ = Observable.create(observer => {

    function startTimer() {
        dateTimer = setInterval(() => {
            let d = new Date();
            let t = d.toLocaleTimeString();
            observer.next(t);
        }, 1000);
    }
    startTimer();
})
/**
 * This is a recursive method that prints the numbers in the above array.
 */
function printWithSimpleRecursiveMethod() {
    if ( index < numbers.length)
    {
        let oldContent = document.getElementById("recursive").innerHTML;
        document.getElementById("recursive").innerHTML = oldContent + " " + numbers[index].toString();
        index++;
        printWithSimpleRecursiveMethod();
    }
 }

/**
 * now we are doing the same thing with observables.
 */
function observableFrom() {
    observableFrom$.subscribe(value => {
            console.log(value);
            let oldContent = document.getElementById("observ").innerHTML;
            document.getElementById("observ").innerHTML = oldContent + " " + value;
        },
        e => console.log(e),
        () => console.log("complete"));
}


/**
 * now we are doing the same thing with observables create.
 */
function observableCreate() {
    observableCreate$.subscribe(
        value => {
            let oldContent = document.getElementById("create").innerHTML;
            document.getElementById("create").innerHTML = oldContent + " " + value.toString();
        },
        e => console.log(e),
        () => {
            let oldContent = document.getElementById("create").innerHTML;
            document.getElementById("create").innerHTML = (oldContent + " Complete");
        })
}

/**
 * now we are doing the same thing with observables create.
 */
function observableIncrement() {
    observableIncrement$.subscribe(
        value => {
            document.getElementById("Increment").innerHTML = value.toString();
        },
        e => console.log(e),
        () => {
            document.getElementById("Increment").innerHTML = "Complete";
        })
}

function showTime()
{
    observableUpdateTime$.subscribe(value => {
        document.getElementById("time").innerHTML = value;
    },
    e => console.log(e),
    () => {
        document.getElementById("time").innerHTML = "Complete";
    })
}
/**
 * Now we are doning the same by creating Observable with create method and print numbers with delay.
 */
(<any>window).selectionChanged = function () {
    index = 0;
    let slectedValue = (<HTMLInputElement>document.getElementById("method_select")).value;
    document.getElementById("recursive").innerHTML = "";
    document.getElementById("create").innerHTML = "";
    document.getElementById("observ").innerHTML = "";
    document.getElementById("Increment").innerHTML = "";
    clearInterval(dateTimer);
    document.getElementById("time").innerHTML = "";

    //document.getElementById("view_selection").innerHTML = "You selected: " + slectedValue;
    switch (slectedValue) {
        case "simple.method":
            printWithSimpleRecursiveMethod();
            break;
        case "observable.from":
            observableFrom();
            break;
        case "observable.create":
            observableCreate();
            break;
        case "observable.inc":
            observableIncrement();
            break;
        case "clock":
            showTime();
            break;
    }
}


/*
class MyObserver {
    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`Error: ${e}`);
    }

    complete() {
        console.log("complete");
    }

}

source.subscribe(new MyObserver());


*/




