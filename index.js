const name = "Susan";
const height = 39;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }
  sayHello();


  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  

  sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

say("Julio","Goodbye");

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }

  console.log(say("Hello", "Liz"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  

  function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9000));

