// external packages: install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {

    return (
        <div>
            <p>Header</p>
            {/* { props.content } */}
            { props.children }
            <p>Footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page content</p>
    </div>
);

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<Layout content={template} />, document.getElementById('app'));
ReactDOM.render((
    <Layout>
         <div>
        <h1>Page Title</h1>
        <p>This is my page content</p>
        </div>
    </Layout>
), document.getElementById('app'));



