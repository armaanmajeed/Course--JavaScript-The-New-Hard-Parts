function* createFlow() {
    yield 4;
    yield 5;
    yield 6;
}
const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();


function* createFlow1() {
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}
const returnNextEl = createFlow1();
const el1 = returnNextEl.next();
const el2 = returnNextEl.next(2);


function doWhenDataReceived(value) {
    return returnNextEle.next(value);
}
function* createFlow2() {
    const data = yield fetch("https://twitter/amk/tweets/1");
    console.log(data);
}
const returnNextEle = createFlow2();
const futureData = returnNextEle.next();
futureData.then(doWhenDataReceived);