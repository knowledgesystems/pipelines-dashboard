import * as React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

interface IDeveloperViewPage {
    className?:string;
}

export class DeveloperViewPage extends React.Component<IDeveloperViewPage, {}> {
    render() {
        return (
            <div className="developer-view">
                <h1>This is the DeveloperViewPage Details Page</h1>
            </div>
        );
    }
}

export default DeveloperViewPage;
