import * as mockData from '../../mock-data';
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoIosOpen, IoMdWarning } from 'react-icons/io';

export function formatStudyIdImportStatusDetails(studyId:any, importStatus:any) : any {
    if (importStatus) {
        return (
            <p><IoIosCheckmarkCircle color="#32CD32"/> {studyId} <IoIosOpen color="#1E90FF"/></p>
        )
    } else {
        return (
            <p><IoIosCloseCircle color="#DC143C"/> {studyId} <IoMdWarning color="#FFD700"/></p>
        )
    }
}

export function generateStudiesImportStatusList(studies:(string | boolean)[][]) {
    var formattedList = [];
    for (var index in studies) {
        formattedList.push(formatStudyIdImportStatusDetails(studies[index][0], studies[index][1]));
    }
    return (
        <div>{formattedList}</div>
    );
}

export class ImportsChartContainer extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Row>
                    <Col><b>CMO/BIC Studies</b></Col>
                    <Col><b>DMP Studies</b></Col>
                    <Col><b>Public Studies</b></Col>
                </Row>
                <Row>
                    <Col>
                    <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>{generateStudiesImportStatusList(mockData.mockStudiesImportedStatus)}</Col>
                    <Col>{generateStudiesImportStatusList(mockData.mockStudiesImportedStatus)}</Col>
                    <Col>{generateStudiesImportStatusList(mockData.mockStudiesImportedStatus)}</Col>
                </Row>
            </Container>
        );
    }
}
export default ImportsChartContainer;