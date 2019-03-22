
// switch babel, componentdidmount, componentdidupdate, use local storage

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const stringCount  = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch(e) {
            // do nothing at the moment
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count <= 0 ? 0 : prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


// Create 3 methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick and bind in the constructor


ReactDOM.render(<Counter />, document.getElementById('app'));
// const app = {
//     title: 'Indecision App',
//     subtitle: 'Indecision Subtitle',
//     options: ['Item one', 'Item two']
// };

// let count = 0;

// const incrementByOne = () => {
//     count++;
//     renderCounterApp();
// };

// const decrementByOne = () => {
//     if (count !== 0) {
//         count--;
//     }
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={incrementByOne} style={{marginRight:'8px'}}>+1</button>
//             <button onClick={decrementByOne} style={{marginRight:'8px'}}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// renderCounterApp();