// export default function hello() {
//   console.log('Hello from JS Module');
// }

export class Person {
  name = "Eran";

  constructor()
  {
    this.name = "Eran Weiser";
  }
  sayHello()
  {/*
      var promise = new Promise(function(resolve, reject) {
          // do a thing, possibly async, then…
          /*
          if (true) {
              resolve("Stuff worked!");
          }
          else {
              reject(Error("It broke"));
          }
          * /
      });
*/
    console.log("Hello " + this.name);
  }
}
/*
function hello() {
  console.log('Hello from JS Module');
}

function sup() {
  console.log('What up from sup()');
}

export {hello, sup};
//
*/