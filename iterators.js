function createFunc() {
    function add2(num) {
        return num * 2;
    }
    return add2;
}
const newFunc = createFunc();
const result = newFunc(5);


function createFunct(arr) {
    let i = 0;
    function inner() {
        const el = arr[i];
        i++;
        return el;
    }
    return inner;
}
const returnNextEl = createFunct([4, 5, 6]);
const el1 = returnNextEl();
const el2 = returnNextEl();


function createFlow(arr) {
    let i = 0;
    const inner = {
        next: function () {
            const el = arr[i];
            i++;
            return el;
        }
    }
    return inner;
}
const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();