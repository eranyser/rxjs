//import "core-js";
import './scss/main.scss';
//import { Observable } from '../node_modules/rxjs/Observable';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Observable } from "rxjs/Observable";

let numbers = [5, 10, 15];

let source = Observable.from(numbers);


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

source.subscribe(new MyObserver())