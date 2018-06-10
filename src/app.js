console.log('App.js is running!  Right?');

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

  renderApp();
};

const onRemoveAll = () => {
    app.options = [];

    renderApp();
};

const renderApp = () => {
    const template = ( 
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);    
}



const appRoot = document.getElementById('app');
renderApp();