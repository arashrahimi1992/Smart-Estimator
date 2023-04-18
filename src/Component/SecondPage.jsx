import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { useState } from 'react'
import axios from "axios";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OperatingCost from './OperatingCost'
import FixedCosts from './FixedCosts';
import EstimationsSecondPage from './EstimationsSecondPage'



const SecondPage = () => {
    const { revenue, selectSucat, opCostb, fixtCostb, yieldPriceb, revenueb, email, agriType, token, setRevenue } = useContext(MapContext)
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
    return (
        <>
            <Row>
                <Col sm={12} md={9} className='mt-2'>
                    <Tabs
                        defaultActiveKey="home"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        style={{ backgroundColor: 'gray', color: '#21c085' }}
                    >
                        <Tab eventKey="home" title="Operating Costs">
                            < OperatingCost />
                        </Tab>
                        <Tab eventKey="profile" title="Fixed Costs">
                            <FixedCosts />
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
                 <EstimationsSecondPage/>
                </Col>
            </Row>
        </>
    );
};
export default SecondPage;