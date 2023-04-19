import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { useState } from 'react'
import Container from 'react-bootstrap/Container';

const OperatingCost = () => {
    const { opCost, fixtCostb, opCostb, setOpCostb } = useContext(MapContext)
    
    const handleInputChangeo = (event) => {
        const { name, value } = event.target;
        setOpCostb(prevState => ({ ...prevState, [name]: Number(value) }));
    };
   

    return (
        <div>
            <Col sm={12} md={12} lg={12} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                <Container>
                    <Row>
                        {/* {opCostb.map((list, index) => (
                            <Col sm={4}>
                                <Form>
                                    <Form.Row>

                                    </Form.Row>
                                </Form>
                            </Col>
                        ))} */}
                        {Object.keys(opCostb).map((key, index) => (
                            <React.Fragment key={key}>
                                <Col sm={4} className="mb-3">
                                    <Form.Group onChange={handleInputChangeo}>
                                        <Form.Label style={{ color: "white" }}>{key}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={opCostb[key]}
                                            name={key}
                                        />
                                    </Form.Group>
                                </Col>
                                {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                            </React.Fragment>
                        ))}
                    </Row>
                </Container>
            </Col>
        </div>
    );
};
export default OperatingCost;