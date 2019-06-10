import * as React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

interface IImportsViewPage {
    className?:string;
}

export class ImportsViewPage extends React.Component<IImportsViewPage, {}> {
    render() {
        return (
            <div className="imports-view">
                <h1>This is the ImportsViewPage Page</h1>
            </div>
        );
    }
}

export default ImportsViewPage;