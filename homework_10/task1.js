// Fixed mistakes:
// 1) Task 1. Debounce function works only with functions without arguments
// 2) If you are using ES6 in these tasks, try to use arrow function
//    (for example, `getStats: () => player`)

function debounce(func, delay) {
    let t = null;
    return (...arguments) => {
        let fullFunc = () => {
            func.apply(this, arguments);
        }
        if (t) {
            clearTimeout(t);
            t = null;
        }
        t = setTimeout(fullFunc, delay);
    };
}

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'