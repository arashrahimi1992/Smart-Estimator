import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';



const SecondPage = () => {
    const { opCost, fixCost, yieldPrice, revenue,selectSucat } = useContext(MapContext)
    const navigate = useNavigate();
    const dsmartpage = () => {
        navigate("/");
    }
    console.log(revenue)
    return (
        <>
            <Container>
                <Row>
                    <Col sm={2} md={2} lg={2}>
                        <img
                            src={require("../assets/touba.png")}
                            className="d-block  mt-2 mb-2"
                        />
                    </Col>
                </Row>
                <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div>
                <Row>
                    <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded ">
                        <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Operating Costs</h3></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Form>
                            {
                                opCost.map(entry => (

                                    <div key={entry[0]}>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                            <Row>
                                                <Col sm={12} md={6}>
                                                    <Form.Label style={{ color: "white" }}>{entry[0]}</Form.Label>
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <Form.Control type="number" placeholder={entry[1]} />
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                    </div>

                                ))
                            }


                        </Form>
                    </Col>
                    <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                        <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Fixed Costs</h3></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Form>
                            {
                                fixCost.map(entry => (

                                    <div key={entry[0]}>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                            <Row>
                                                <Col sm={12} md={6}>
                                                    <Form.Label style={{ color: "white" }}>{entry[0]}</Form.Label>
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <Form.Control type="number" placeholder={entry[1]} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </div>
                                ))
                            }
                        </Form>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
                        <Row className="mt-3 mb-1" ><h5 style={{ color: "white" }}>Expected Production & Price</h5></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row>
                            <Form>
                                {
                                    yieldPrice.map(entry => (

                                        <div key={entry[0]}>
                                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                                <Row>
                                                    <Col sm={12} md={6}>
                                                        <Form.Label style={{ color: "white" }}>{entry[0]}</Form.Label>
                                                    </Col>
                                                    <Col sm={12} md={6}>
                                                        <Form.Control type="number" placeholder={entry[1]} />
                                                    </Col>
                                                </Row>
                                            </Form.Group>

                                        </div>

                                    ))
                                }
                            </Form>
                        </Row>
                        <Button variant="success" type="button" style={{ width: "100%" }}>
                            CALCULATE
                        </Button>
                    </Col>
                    <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#21c085", margin: "1%" }} className="rounded">
                        <Row className="mt-3 mb-1 d-flex justify-content-center" ><span style={{ color: "BLACK", fontSize: "20px" }} className=" d-flex justify-content-center mt-2">{selectSucat}</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 d-flex justify-content-center" ><span style={{ color: "BLACK", fontSize: "20px" }} className=" d-flex justify-content-center">Agribusiness Estimations</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        {
                            revenue.map(entry => (
                                <div key={entry[0]}>
                                 <Row className="mt-3 mb-1 " ><span style={{ color: "white", fontSize: "20px" }} className=" d-flex justify-content-center">{entry[0]}</span></Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white", fontSize: "20px" }} className=" d-flex justify-content-center">{entry[1]}</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                                </div>
                            ))
                        }
                        <Button variant="success" type="button" style={{ width: "100%" }} className="mt-3" onClick={dsmartpage}>
                            BACK
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default SecondPage;