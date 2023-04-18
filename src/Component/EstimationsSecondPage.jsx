import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';


const EstimationsSecondPage = () => {
    const { revenue, selectSucat} = useContext(MapContext)
    const navigate = useNavigate();
    const dsmartpage = () => {
        navigate("/");
    }
    return (
        <div>
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
        </div>
    );
};

export default EstimationsSecondPage;