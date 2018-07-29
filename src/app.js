
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {       
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));        
            }
        } catch(e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));  // to return an object, wrap object like so ({ <object> })
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter a valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                    />
                <AddOption
                    handleAddOption={this.handleAddOption}
                    />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};


// class Header extends React.Component {

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );   
//     }
// }

const Action = (props) => {
    
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {

    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption} 
                    />
                )) 
            }
        </div>
    );
}

// class Options extends React.Component {

//     render() {

//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    
    return (
        <div>
            {props.optionText}
            <button style={{marginLeft: '15px'}}
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
            Remove
            </button>
        </div>
    );
}

// class Option extends React.Component {

//     render() {

//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
                {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
            </div>
        
        );
    }
}

// stateless functional component
const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

// ReactDOM.render(<User name="Michael" age={30} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const jsx = (

//     <div>
//       <Header />
//       <Action />
//       <Options />
//       <AddOption />
//     </div>

// );

// ReactDOM.render(jsx, document.getElementById('app'));