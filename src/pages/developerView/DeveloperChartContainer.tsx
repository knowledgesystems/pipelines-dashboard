import * as mockData from '../../mock-data';
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

export function formatDmpJobStatusDetails(jobName:any, jobStatus:any) : any {
    if (jobStatus) {
        return (
            <p><IoIosCheckmarkCircle color="#32CD32"/> {jobName}</p>
        )
    } else {
        return (
            <p><IoIosCloseCircle color="#DC143C"/> {jobName}</p>
        )
    }
}

export function generateStudiesImportStatusList(dmpStudyJobs:(string | boolean)[][]) {
    var formattedList = [];
    for (var index in dmpStudyJobs) {
        formattedList.push(formatDmpJobStatusDetails(dmpStudyJobs[index][0], dmpStudyJobs[index][1]));
    }
    return (
        <div>{formattedList}</div>
    );
}

export class DeveloperChartContainer extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Row>
                    <Col><b>MSKIMPACT</b></Col>
                    <Col><b>HEMEPACT</b></Col>
                    <Col><b>RAINDANCE</b></Col>
                    <Col><b>ARCHER</b></Col>
                </Row>
                <Row>
                    <Col>
                    <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>{generateStudiesImportStatusList(mockData.mockDmpStudiesJobStatusMskimpact)}</Col>
                    <Col>{generateStudiesImportStatusList(mockData.mockDmpStudiesJobStatusMskimpactHeme)}</Col>
                    <Col>{generateStudiesImportStatusList(mockData.mockDmpStudiesJobStatusMskraindance)}</Col>
                    <Col>{generateStudiesImportStatusList(mockData.mockDmpStudiesJobStatusMskarcher)}</Col>
                </Row>
            </Container>
        );
    }
}
export default DeveloperChartContainer;