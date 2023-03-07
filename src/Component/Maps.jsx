import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Maps = ({fetch}) => {
  const {  setFetch,crops,setCrops,getData,setLang,setLat} = useContext(MapContext)
  useEffect(() => {
    var map = L.map("map").setView([56.342330657261556, -99.30158029022198],5);
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
        radius: 10, // radius of each data point in pixels
        maxZoom: 1, // maximum zoom level at which the layer is displayed
        // Add more options here
        max :2,
        minOpacity :5,
        blur :10,
   cursor: 'default' 
      };
    let heatLayer = L.heatLayer(points,options).addTo(map);
points=""
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
      <Row>
        
        <Col sm={12}>
          <div id="map" style={{ height: "100vh", marginTop: "10px", width: "100%" }} className="border border-primary" ></div>
        </Col>
      </Row>
    </>
  )
};
export default Maps;