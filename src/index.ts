//import "core-js";

import { Observable } from '../node_modules/rxjs/Observable';
import '../node_modules/rxjs/add/observable/from';

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