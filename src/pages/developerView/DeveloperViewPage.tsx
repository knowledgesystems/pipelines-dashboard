import * as React from 'react';
import DeveloperChartContainer from './DeveloperChartContainer';

interface IDeveloperViewPage {
    className?:string;
}

export class DeveloperViewPage extends React.Component<IDeveloperViewPage, {}> {
    render() {
        return (
            <div className="developer-view">
                <DeveloperChartContainer/>
            </div>
        );
    }
}

export default DeveloperViewPage;
