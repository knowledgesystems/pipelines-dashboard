import * as React from 'react';
import SummaryChartContainer from './SummaryChartContainer';

interface ISummaryViewPage {
    className?:string;
}

export class SummaryViewPage extends React.Component<ISummaryViewPage, {}> {
    render() {
        return (
            <div className="summary-view">
                <SummaryChartContainer/>
            </div>
        );
    }
}

export default SummaryViewPage;