function display(data) {
    console.log(data);
}
const futureData = fetch("https://twitter.com/amk/tweets/1");
futureData.then(display);
console.log("Me First");



function display1(data) {
    console.log(data);
}
function printHello() {
    console.log("Hello");
}
function blockFor300ms() {
    // Blocks JS Thread for 300ms with long for loop
}
setTimeout(printHello, 0);
const futureData1 = fetch("https://twitter.com/amk/tweets/1");
futureData1.then(display1);
blockFor300ms();
console.log("Me First");