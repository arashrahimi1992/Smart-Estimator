import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { useState } from 'react'
import axios from "axios";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';



const SecondPage = () => {
    const { opCost, fixCost, yieldPrice, revenue, selectSucat, setFixCost, opCostb, setOpCostb, fixtCostb, yieldPriceb, revenueb, setAdvansData, advansData, email, agriType, token, setRevenue } = useContext(MapContext)
    const navigate = useNavigate();
    const [formValuesoc, setFormValuesoc] = useState({ ...opCostb });
    const [formValuesfc, setFormValuesfc] = useState({ ...fixtCostb });
    const [formValuesyp, setFormValuesyp] = useState({ ...yieldPriceb });
    const dsmartpage = () => {
        navigate("/");
    }
    const calculate = async () => {
        const dataa = {
            "op_costs": formValuesoc,
            "fixed_costs": formValuesfc,
            "yield_price": formValuesyp,
            "revenue": revenueb,
            "email": email,
            "selected_subcrop": selectSucat,
            "agri_type": agriType,
        }
        console.log(dataa)
        const { data } = await axios.post("http://82.115.18.58:3000/advance", dataa, {
            headers: {
                'Authorization': `Bearer ${token.token}`
            }
        });
        console.log(revenue)
        console.log("arash", data)
        setRevenue(Object.entries(data.revenue))
    }
    const handleInputChangeO = (event) => {
        const { name, value } = event.target;
        setFormValuesoc(prevState => ({ ...prevState, [name]: Number(value) }));

    };
    const handleInputChangeF = (event) => {
        const { name, value } = event.target;
        setFormValuesfc(prevState => ({ ...prevState, [name]: Number(value) }));

    };
    const handleInputChangeY = (event) => {
        const { name, value } = event.target;
        setFormValuesyp(prevState => ({ ...prevState, [name]: Number(value) }));
    };
    //تب بشود
    return (
        <>
            <Row>
                <Col sm={12} md={9} className='mt-2'>
                    <Tabs
                        defaultActiveKey="home"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        style={{ backgroundColor: 'gray',color:'#21c085' }} 
                    >
                        <Tab eventKey="home" title="Operating Costs">
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
                        </Tab>

                        <Tab eventKey="profile" title="Fixed Costs">
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
                        </Tab>
                    </Tabs>
                </Col>



                <Col sm={12} md={2} lg={2} className="rounded mt-2 ms-2 rounded" >
                    <Row>
                        <Col>
                            <Button variant="success" type="button" style={{ width: "100%", height: "45px" }} onClick={calculate}>
                                CALCULATE
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ color: "BLACK", fontSize: "20px", backgroundColor: "#21c085", }} className='mt-2 rounded'>
                        <Row >
                            <Col className="mt-3 mb-1 d-flex justify-content-center rounded" sm={12} >
                                <h3 style={{ color: "BLACK", fontSize: "16px", backgroundColor: "#21c085" }}>Agribusiness Estimations in </h3>
                            </Col>
                            <Col className="mb-1 d-flex justify-content-center rounded" sm={12}>
                                <h3 style={{ color: "white", fontSize: "20px", backgroundColor: "#21c085" }}>{selectSucat}</h3>
                            </Col>

                        </Row>

                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>

                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        {
                            revenue.map(entry => (
                                <div key={entry[0]}>
                                    <Row className="mt-2 mb-1 " >
                                        <Col className="mb-1 d-flex justify-content-center" sm={12}>
                                            <h3 style={{ color: "black", fontSize: "17px" }} className=" d-flex justify-content-center">{entry[0]}</h3>
                                        </Col>
                                        <Col className="mb-1 d-flex justify-content-center" sm={12}>
                                            <h3 style={{ color: "white", fontSize: "20px", backgroundColor: "#21c085" }}>{entry[1]}</h3>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                                    </Row>
                                </div>
                            ))
                        }

                        <Col>
                            <Button variant="success" type="button" style={{ width: "100%", height: "45px" }} className="mb-2" onClick={dsmartpage}>
                                BACK
                            </Button>
                        </Col>


                    </Row>


                </Col>
            </Row>

        </>
    );
};
export default SecondPage;