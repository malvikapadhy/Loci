import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Button, Card, Row} from "react-bootstrap";
import bicycleImg from './rec/yoga.jpg'
import {setSport} from "./store/actions";
import {connect} from "react-redux";
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'one', 'two', 'three'
  ];

const Res = (props) => {
  console.log("pr", props)
    const [switchON, setSwitchON] = useState();
    const [screenON, setScreenON] = useState();
    const [keyboardON, setKeyboardON] = useState();
    const [touchpadON, setTouchpadON] = useState();
    const [batteryON, setBatteryON] = useState();
    const [chargerON, setChargerON] = useState();
    const [webON, setWebON] = useState();
    const [price, setPrice] = useState('');
    const [showPrice, setShowPrice] = useState(false);

    const defaultOption = options[0];
    const getprice = async ()=>{
        console.log(switchON, screenON)
        const data = await Axios.get('http://localhost:5555/getprice', {params: {'switchOn': switchON,
         'screenOn': screenON, 'keyboardOn': keyboardON, 'touchpadOn': touchpadON, 'batteryOn': batteryON,'webOn': webON}})
        console.log("data", data.data)
        setPrice(data.data.price)
        setShowPrice(true)
        // setProductDetail(data.data)
        // setShowProductDetail(true)
      }

    return (
        <div className="container py-1">
         
        <div className="d-flex align-items-center">
          <h4>
            Your Resale Request has been placed with Request ID SR2134H, our representative will verify the item
          </h4>
        </div>
 </div>
    );
};


export default Res;