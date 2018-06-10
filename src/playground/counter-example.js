
const app = {
    title: 'Indecision App',
    subtitle: 'Indecision Subtitle',
    options: ['Item one', 'Item two']
};

let count = 0;

const incrementByOne = () => {
    count++;
    renderCounterApp();
};

const decrementByOne = () => {
    if (count !== 0) {
        count--;
    }
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementByOne} style={{marginRight:'10px'}}>+1</button>
            <button onClick={decrementByOne} className="decrement-button">-1</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderCounterApp();