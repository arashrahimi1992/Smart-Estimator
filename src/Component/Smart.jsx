import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from './Info';
import CropSelection from './CropSelection';
import Estimations from './Estimations';

//The Smart component is a container for the Info, CropSelection, and Estimations components.
 
const Smart = () => {
  
    return (
        <>
            <Row>
                <Col sm={12} md={4} lg={4} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded ">
                    <Info />
                </Col>
                <Col sm={12} md={4} lg={4} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded" >
                    <CropSelection />
                </Col>
                <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#21c085", margin: "1%" }} className="rounded">
                    <Estimations />
                </Col>
            </Row>
        </>
    );
};
export default Smart;