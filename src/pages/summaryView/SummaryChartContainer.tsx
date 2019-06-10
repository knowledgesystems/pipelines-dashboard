import * as mockData from '../../mock-data';
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CanvasJSReact from '../../shared/lib/canvasjs-2.3.1/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function generateDataPoints(data:(string | number)[][]) {
    var dataPoints = [];
    for (var index in data) {
        dataPoints.push({ label: data[index][0], y: data[index][1]})
    }
    return dataPoints;
}

export function generateChart(chartTitle:string, chartData:any) {
    const chartOptions = {
        title: { text: chartTitle}, 
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true, 
        },
        data: chartData
    }
    return (
        <CanvasJSChart options = {chartOptions} />
    );
}

export function studiesImportedFailedStackedChart() {
    const chartData = [
        {
            type: "stackedColumn",
            name: "Successful imports",
            showInLegend: true,
            dataPoints: generateDataPoints(mockData.successfulImports)
        },
        {
            type: "stackedColumn",
            name: "Failed imports",
            showInLegend: true,
            dataPoints: generateDataPoints(mockData.failedImports)
        }, 
        {
            type: "line",
            name: "Total Studies in Portal",
            showInLegend: true,
            dataPoints: generateDataPoints(mockData.totalStudiesInPortal)
        }
    ]
    return generateChart("Import Overview", chartData);
}

export function patientsImportedChart() {
    const chartData = [ 
        {
            type: "column",
            dataPoints: generateDataPoints(mockData.patientsImorted),
            showInLegend: false
        }
    ];
    return generateChart("Patients Imported", chartData);
}

export function samplesImportedChart() {
    const chartData = [ 
        {
            type: "column",
            dataPoints: generateDataPoints(mockData.samplesImorted),
            showInLegend: false
        }
    ];
    return generateChart("Samples Imported", chartData);
}

export class SummaryChartContainer extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Row>
                    <Col>{studiesImportedFailedStackedChart()}</Col>
                </Row>
                <Row>
                    <Col>
                    <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>{patientsImportedChart()}</Col>
                    <Col>{samplesImportedChart()}</Col>
                </Row>
            </Container>
        );
    }
}
export default SummaryChartContainer;