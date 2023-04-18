import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { useState } from 'react'
import Container from 'react-bootstrap/Container';

const FixedCosts = () => {
    const { fixCost, yieldPrice,fixtCostb, yieldPriceb} = useContext(MapContext)
    const [formValuesfc, setFormValuesfc] = useState({ ...fixtCostb });
    const [formValuesyp, setFormValuesyp] = useState({ ...yieldPriceb });
    const handleInputChangeF = (event) => {
        const { name, value } = event.target;
        setFormValuesfc(prevState => ({ ...prevState, [name]: Number(value) }));
    };
    const handleInputChangeY = (event) => {
        const { name, value } = event.target;
        setFormValuesyp(prevState => ({ ...prevState, [name]: Number(value) }));
    }
    return (
        <>
            <Col sm={12} md={12} lg={12} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                <Container>
                    <Row>
                        {fixCost.map((entry, index) => (
                            <Col key={entry[0]} sm={4}>
                                <Form.Group controlId={`form${entry[0]}`} onChange={handleInputChangeF} className='mt-2'>
                                    <Form.Label style={{ color: "white" }}>{entry[0]}</Form.Label>
                                    <Form.Control type="number" placeholder={entry[1]} name={entry[0]} />
                                </Form.Group>
                                {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                            </Col>
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
                            {
                                yieldPrice.map(entry => (

                                    <div key={entry[0]}>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" name={entry[0]} onChange={handleInputChangeY}>
                                            <Row>
                                                <Col sm={12} md={6}>
                                                    <Form.Label style={{ color: "white" }} name={entry[0]} className='mt-2'>{entry[0]}</Form.Label>
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <Form.Control type="number" placeholder={entry[1]} name={entry[0]} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </div>
                                ))
                            }
                        </Form>
                    </Row>
                </Container>
            </Col>
        </>
    );
};
export default FixedCosts;