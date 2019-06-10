import * as React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import ImportsChartContainer from './ImportsChartContainer';

interface IImportsViewPage {
    className?:string;
}

export class ImportsViewPage extends React.Component<IImportsViewPage, {}> {
    render() {
        return (
            <div className="imports-view">
                <ImportsChartContainer/>
            </div>
        );
    }
}

export default ImportsViewPage;