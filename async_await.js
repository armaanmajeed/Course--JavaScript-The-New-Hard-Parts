async function createFlow() {
    console.log("Me First");
    const data = await fetch("https://twitter/amk/tweets/1");
    console.log(data);
}
createFlow();
console.log("Me Second");