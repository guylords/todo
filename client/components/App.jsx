
import React from 'react';

export default class App extends React.Component {
render() {
        return (
            <div className="jumbotron jumbotron-fluid text-xs-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)',color:'white'}}>
                <div className="container">
                     <h1>Building A TODO with React Yeies</h1>
                     <p>with Bootstrap and SASS.</p>
                     <p><a className="btn btn-primary" href="https://github.com/guylords" target="_blank">Guylords organization.</a></p>
                </div>
            </div>);
    }
}
