
class IndecisionApp extends React.Component {

    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert('handle the pick');
    }

    render() {

        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
                <p></p>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    }

    handleRemoveAllOptions() {
        alert('all options have been removed');
    }

    render() {

        return (
            <div>
                <button onClick={this.handleRemoveAllOptions}>Remove All Options</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {

    render() {

        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
      
        if (option) {
            alert(option);
        }
      };

    render() {

        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

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