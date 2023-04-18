import React, { useEffect} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import { Button} from 'react-bootstrap';




const Maps = ({ fetch }) => {
  const {setCrops,setLang, setLat, lat, lang, sendData } = useContext(MapContext)
  useEffect(() => {
   
    var map = L.map("map", { zoomControl: false,worldCopyJump: false }).setView([56.342330657261556, -99.30158029022198], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    let points = fetch
      ? fetch.map((p) => {
        return [p[0], p[1], p[2]];
      })
      : [];
    const options = {
      radius: 10,
      maxZoom: 1, 
      max: 2,
      minOpacity: 5,
      blur: 10,
      zoomControl: false,
      maxBounds: [[-45, -90], [45, 90]],
      dragRotate: false
    };
    let heatLayer = L.heatLayer(points, options).addTo(map);
    points = ""
    map.on('click', (e) => {
      const clickedPoint = heatLayer._latlngs.find(point => point === e.latlng.lat && point === e.latlng.lng);
      if (clickedPoint) {
        const popupContent = `<div><strong>latitude:   ${e.latlng.lat}</strong><br>Longitude:  ${e.latlng.lng}<br/><strong> ${' ${e.latlng.lng}'}x</strong></div>`;
        L.popup()
          .setLatLng(e.latlng)
          .setContent(popupContent)
          .openOn(map);
      } else {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        setLat(lat);
        setLang(lng);
        const popupContent = `<div><strong>latitude:   ${e.latlng.lat}</strong><br><strong>Longitude:  ${e.latlng.lng}</strong></div>`
        L.popup()
          .setLatLng(e.latlng)
          .setContent(popupContent)
          .openOn(map);
      }
    });
    return () => {
      map.remove();
    };
  }, [fetch]);
  return (
    <>
      <Row style={{backgroundColor:"#3c557a"}} >
        <Col sm={3} className='pt-2 pe-2 pb-2'>
          <Form.Select aria-label="location" onChange={(e) => { setCrops(e.currentTarget.value) }} size="lg"  >
            <option >Choose crops</option>
            <option value="alfalfa" name="alfalfa">alfalfa</option>
            <option value="barley" name="barley">barley</option>
            <option value="buckwheat" name="buckwheat">buckwheat</option>
            <option value="canola" name="canola">canola</option>
            <option value="chickpea" name="chickpea">chickpea</option>
            <option value="coloured beans" name="coloured beans">coloured beans</option>
            <option value="corn" name="corn">corn</option>
            <option value="flax" name="flax">flax</option>
            <option value="grain sorghum" name="grain sorghum">grain sorghum</option>
            <option value="hempseed" name="hempseed">hempseed</option>
            <option value="lentils" name="lentils">lentils</option>
            <option value="mustard" name="mustard">mustard</option>
            <option value="navy beans" name="navy beans">navy beans</option>
            <option value="oats" name="oats">oats</option>
            <option value="peas" name="peas">peas</option>
            <option value="rice" name="rice">rice</option>
            <option value="rye" name="rye">rye</option>
            <option value="soybeans" name="soybeans">soybeans</option>
            <option value="sunflowers" name="sunflowers">sunflowers</option>
            <option value="switchgrass" name="switchgrass">switchgrass</option>
            <option value="wheat" name="wheat">wheat</option> 
          </Form.Select>
        </Col>
        <Col sm={3} className='pt-2 pe-2'>
          <Form>
            <Form.Group  >
              <Form.Control type="text" placeholder={lat ? lat : "latitude"} disabled style={{ height: "50px" }} />
            </Form.Group>
          </Form>
        </Col>
        <Col sm={3} className='pt-2 pe-2'>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder={lang ? lang : "longitude"} disabled style={{ height: "50px" }} />
            </Form.Group>
          </Form>
        </Col>
        <Col sm={3} className='pt-2 '>
          <Button variant="secondary" type="submit" onClick={sendData} size="lg" style={{ width: "100%", backgroundColor: "#21c085", height: "50px" }} disabled={lat === ""} >
            {lat ? "submit" : <h6 className='mt-1'>
              click on your location on the map
            </h6>}
          </Button>
        </Col>
      </Row>
      <Row style={{backgroundColor:"#3c557a"}}>
        <Col sm={12}>
          <div id="map" style={{ height: "100vh", marginTop: "10px", width: "100%" }} className="border border-primary" ></div>
        </Col>
      </Row>
      <react-remove-scroll/>
    </>
  )
};
export default Maps;