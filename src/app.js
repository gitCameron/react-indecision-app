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
let whatShouldIDoButton = true;

const onRemoveAll = () => {
    app.options = [];
    optionCounter = 0;
    renderApp();
};

const onMakeDecision = () => {

    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];

    alert(option);
};

const renderApp = () => {
    const template = ( 
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
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