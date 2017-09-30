import "core-js";

//import './css/main.css';
import './scss/main.scss';
//import {hello, sup} from './js/module';
import {Person} from './js/module';
import {About} from './js/about';
let test = "this is a test!";
console.log(test);

let p = new Person();
p.sayHello();
About();
/*
hello();
sup();
*/