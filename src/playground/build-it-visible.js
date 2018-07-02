class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');
// let isVisible = false;

// const toggleVisibility = () => {

//     isVisible = !isVisible

//     render();
// };

// const render = () => {
//     const template = ( 
//         <div>
//             <h1> {app.title} </h1>
//             <button onClick={toggleVisibility}>
//                 {isVisible ? 'Hide Details' : 'Show Details'}
//             </button>
//             {isVisible && (
//                 <div>
//                     <p>These are some sweet details!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);    
// }

// render();