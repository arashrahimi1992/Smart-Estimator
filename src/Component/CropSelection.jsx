import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CropSelection = () => {
    const {
      mainCategory, subcatCrops,
        setMainCatt, setPercentage, percentage, dataKinds, selectedSubcrop, setselectedSubcrop, getProfit, mainCatt } = useContext(MapContext)

    return (
        <>
            <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>crop selection</h3></Row>
            <Row className="mt-3 mb-1" ><h6 style={{ color: "white" }}>province: {mainCategory.province}</h6></Row>
            <Row className="border border-white mb-3">
                <Col sm={12}><h6 style={{ color: "white" }}>2. Select one of the crops which are recommended based on the soil of the field:</h6></Col>
                <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                <Row className='mt-2'>
                    <Col className='mt-2'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="justify-tab-example"
                            justify
                            style={{ backgroundColor: 'gray', color: '' }}
                        >
                            <Tab eventKey="home" title="best_options" disabled={mainCategory === ''} style={{ color: "#21c085" }}>
                                <Form.Select aria-label="location" size="lg" onChange={(e) => { setMainCatt(e.currentTarget.value) }} disabled={mainCategory === ''} value={mainCatt} >
                                    <option >-</option>
                                    {mainCategory ? mainCategory.best_options.map((list, index) => (
                                        <option value={list} name="list" >{list}</option>
                                    )) : ""}
                                </Form.Select>
                            </Tab>
                            <Tab eventKey="profile" title="Possible_Options" style={{ color: "#21c085 !important" }} className='arash'>
                                <Form.Select aria-label="location" size="lg" onChange={(e) => { setMainCatt(e.currentTarget.value) }} disabled={mainCategory === ''} value={mainCatt}>
                                    <option >-</option>
                                    {mainCategory ? mainCategory.possible_options.map((list, index) => (
                                        <option value={list} name="list" >{list}</option>
                                    )) : ""}
                                </Form.Select>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                <Col sm={12} md={6} className='mt-2'>
                    <Button variant="success" type="button" style={{ width: "100%" }} className="mb-1" onClick={() => { subcatCrops() }} disabled={mainCategory === ''} >
                        Apply
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col sm={12}><h6 style={{ color: "white" }}>3. Enter the percentage of field for the considered crop from the following list:</h6></Col>
                <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                <Col sm={6}>
                    <Form.Control type="number" placeholder="%" className="mt-2 mb-2" value={percentage} onChange={e => setPercentage(e.target.value)} disabled={dataKinds === ''} />
                </Col>
                <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
                <Col sm={12}><h6 style={{ color: "white" }}>4. Select an item from the different crop Spieces and Techniques of growing:</h6></Col>
                <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                <Col sm={12}>
                    <Form.Select aria-label="location" size="lg" onChange={(e) => { setselectedSubcrop(e.currentTarget.value) }} disabled={dataKinds === ''} value={selectedSubcrop} >
                        <option >-</option>
                        {dataKinds ? dataKinds.kinds.map((list, index) => (
                            <option value={list} name="list" >{list}</option>
                        )) : ""}
                    </Form.Select>
                </Col>
                <Col sm={12}>
                    <Col sm={12} md={6}>
                        <Button variant="success" type="button" style={{ width: "100%" }} className="mb-2 mt-2" onClick={() => { getProfit() }} disabled={dataKinds === ''} >
                            get profit
                        </Button>
                    </Col>
                </Col>
            </Row>
        </>
    );
};
export default CropSelection;