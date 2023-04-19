import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { useState } from 'react'
import Container from 'react-bootstrap/Container';

const FixedCosts = () => {
    const { fixtCostb, yieldPriceb,setFixtCostb,setyieldPriceb} = useContext(MapContext)
  
    const handleInputChangeF = (event) => {
        const { name, value } = event.target;
        setFixtCostb(prevState => ({ ...prevState, [name]: Number(value) }));
    };
    const handleInputChangeY = (event) => {
        const { name, value } = event.target;
        setyieldPriceb(prevState => ({ ...prevState, [name]: Number(value) }));
    }
    return (
        <>
            <Col sm={12} md={12} lg={12} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                <Container>
                    <Row>
                    {Object.keys(fixtCostb).map((key, index) => (
                            <React.Fragment key={key}>
                                <Col sm={4} className="mb-3">
                                    <Form.Group onChange={handleInputChangeF}>
                                        <Form.Label style={{ color: "white" }}>{key}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={fixtCostb[key]}
                                            name={key}
                                        />
                                    </Form.Group>
                                </Col>
                                {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                            </React.Fragment>
                        ))}
                    </Row>
                </Container>
                <Container>
                    <Row className="mt-3 mb-1" ><h5 style={{ color: "white" }}>Expected Production & Price</h5></Row>
                    <Row>
                        <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                    </Row>
                    <Row>
                        <Form>
                        {Object.keys(yieldPriceb).map((key, index) => (
                            <React.Fragment key={key}>
                                <Col sm={4} className="mb-3">
                                    <Form.Group onChange={handleInputChangeY}>
                                        <Form.Label style={{ color: "white" }}>{key}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={yieldPriceb[key]}
                                            name={key}
                                        />
                                    </Form.Group>
                                </Col>
                                {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                            </React.Fragment>
                        ))}
                        </Form>
                    </Row>
                </Container>
            </Col>
        </>
    );
};
export default FixedCosts;