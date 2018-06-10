console.log('App.js is running!  Right?');

const appRoot = document.getElementById('app');

// only render the subtitle and p tag if subtitle exists

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['Item one', 'Item two']
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  optionCounter = 1;

  renderApp();
};

let optionCounter = 0;

const onRemoveAll = () => {
    app.options = [];
    optionCounter = 0;
    renderApp();
};

const numbers = [10, 22, 30];

const renderApp = () => {
    const template = ( 
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <p key={option}>Option {optionCounter++}: {option}</p>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);    
}

renderApp();