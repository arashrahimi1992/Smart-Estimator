import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";



const SecondPage = () => {
    const navigate = useNavigate();
    const dsmartpage=()=>{
        navigate("/");
    }
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
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Seed</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Inoculants</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Fertilizer Nitrogen</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Phosphorous P2O5</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Sulphur And Other</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Herbicides</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Insecticides</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Insecticides</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Machinery Operating Fuel</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Machinery Operating Repair</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Custom Work And Hired Labour</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Crop Insurance Premium</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Hail Insurance Premium</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Utilities And Miscellaneous</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Interest On Variable Expenses</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                        <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Fixed Costs</h3></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Form>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Building Repair</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Property Taxes</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Business Overhead </Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}> Machinery Depreciation</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Building Depreciation  </Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Machinery Investment</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Building Investment</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Land Investment</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Label style={{ color: "white" }}>Labour And Management</Form.Label>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
                        <Row className="mt-3 mb-1" ><h5 style={{ color: "white" }}>Expected Production & Price</h5></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                    <Row>
                                        <Col sm={12} md={6}>
                                            <Form.Label style={{ color: "white" }}>Market Price ($/bu)</Form.Label>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Control type="number" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Row>
                                        <Col sm={12} md={6}>
                                            <Form.Label style={{ color: "white" }}>Yield (bu)</Form.Label>
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Form.Control type="number" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                            <Col>
                            </Col>
                        </Row>
                        <Button variant="success" type="button" style={{ width: "100%" }}>
                            CALCULATE
                        </Button>
                    </Col>
                    <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#21c085", margin: "1%" }} className="rounded">
                        <Row className="mt-3 mb-1 d-flex justify-content-center" ><span style={{ color: "BLACK",fontSize:"20px" }} className=" d-flex justify-content-center mt-2">Hybrid fall rye</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 d-flex justify-content-center" ><span style={{ color: "BLACK",fontSize:"20px" }} className=" d-flex justify-content-center">Agribusiness Estimations</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">Total Operating Costs </span></Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">$2.77</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">Total Costs </span></Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">$3.83</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">Gross Revenue </span></Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">$3.28</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">Net Profit</span></Row>
                        <Row className="mt-3 mb-1 " ><span style={{ color: "white",fontSize:"20px" }} className=" d-flex justify-content-center">$-0.55</span></Row>
                       
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