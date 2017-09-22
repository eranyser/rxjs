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
  {
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