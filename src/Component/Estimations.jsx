import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';


const Estimations = () => {
    const { profit, dataExtracFrom } = useContext(MapContext)
    const navigate = useNavigate();
    const dsecondpage = () => {
        navigate("/secondpage");
    }
    return (
        <>
            <Row>
                <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Agribusiness Estimations</h3></Row>
                <Col sm={12}><h3 className="d-flex justify-content-center" style={{ color: "white", fontSize: "20px" }}>{dataExtracFrom}</h3></Col>
            </Row>
            <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
            {
                profit ? profit.map(entry => (
                    <div key={entry[0]}>
                        <Row> <Col sm={12}><h3 className="d-flex justify-content-center" style={{ color: "black", fontSize: "17px" }} value={entry[0]}>{entry[0]}</h3></Col></Row>
                        <Row> <Col sm={12}><h3 className="d-flex justify-content-center" style={{ color: "white", fontSize: "20px" }}>{entry[1]}</h3></Col></Row>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    </div>
                )) : ""
            }
            <Button variant="success" type="button" style={{ width: "100%" }} onClick={dsecondpage} disabled={profit === ''}>
                customize
            </Button>
        </>
    );
};
export default Estimations;