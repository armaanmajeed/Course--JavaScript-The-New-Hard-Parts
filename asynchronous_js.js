function printHello() {
    console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me First!");



function printHello1() {
    console.log("Hello");
}
function blockFor1Sec() {
    // Blocks JS Thread for 1 second
}
setTimeout(printHello1, 0);
blockFor1Sec();
console.log("Me First");