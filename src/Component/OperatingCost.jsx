import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { useState } from 'react'
import Container from 'react-bootstrap/Container';

const OperatingCost = () => {
    const { opCost, fixtCostb } = useContext(MapContext)
    const [formValuesfc, setFormValuesfc] = useState({ ...fixtCostb });

    const handleInputChangeF = (event) => {
        const { name, value } = event.target;
        setFormValuesfc(prevState => ({ ...prevState, [name]: Number(value) }));
    };
    return (
        <div>
            <Col sm={12} md={12} lg={12} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                <Container>
                    <Row>
                        {opCost.map((entry, index) => (
                            <Col key={entry[0]} sm={4}>
                                <Form.Group controlId={`form${entry[0]}`} onChange={handleInputChangeF} className='mt-2'>
                                    <Form.Label style={{ color: "white" }}>{entry[0]}</Form.Label>
                                    <Form.Control type="number" placeholder={entry[1]} name={entry[0]} className='mb-2' />
                                </Form.Group>
                                {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
        </div>
    );
};
export default OperatingCost;