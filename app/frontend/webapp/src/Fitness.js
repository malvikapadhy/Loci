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

const Sports = (props) => {
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
            <div className="col-8">
                <h4>Does the product Switch ON?</h4>
            </div>
            <div className="col-4 d-flex align-items-center">

            <div className="pl-4">
                <input className="" type="radio" id="male" name="switch" value="yes"  onChange={(e) => setSwitchON(e.target.value)}/>
            </div>
              <label className="mb-0 pl-2" htmlFor="male">YES</label>
              <div className="pl-2">
                <input type="radio" id="female" name="switch" value="no"  onChange={(e) => setSwitchON(e.target.value)}/>
              </div>
              <label className="mb-0 pl-2" htmlFor="female">NO</label><br />
            </div>
            </div>
            <div className="d-flex align-items-center">
            <div className="col-8">
                <h4>Is your screen working?</h4>
            </div>
            <div className="col-4 d-flex align-items-center">

            <div className="pl-4">
                <input className="" type="radio" id="screenon" name="screen" value="yes"  onChange={(e) => setScreenON(e.target.value)}/>
            </div>
              <label className="mb-0 pl-2" htmlFor="male">YES</label>
              <div className="pl-2">
                <input type="radio" id="screenoff" name="screen" value="no"  onChange={(e) => setScreenON(e.target.value)}/>
              </div>
              <label className="mb-0 pl-2" htmlFor="female">NO</label><br />
            </div>
            </div>
            <div className="d-flex align-items-center">
            <div className="col-8">
                <h4>Is your keyboard working?</h4>
            </div>
            <div className="col-4 d-flex align-items-center">

            <div className="pl-4">
                <input className="" type="radio" id="keyboardon" name="keyboard" value="yes"  onChange={(e) => setKeyboardON(e.target.value)}/>
            </div>
              <label className="mb-0 pl-2" htmlFor="male">YES</label>
              <div className="pl-2">
                <input type="radio" id="keyboardoff" name="keyboard" value="no"  onChange={(e) => setKeyboardON(e.target.value)}/>
              </div>
              <label className="mb-0 pl-2" htmlFor="female">NO</label><br />
            </div>
            </div>
            <div className="d-flex align-items-center">
            <div className="col-8">
                <h4>Is your Touchpad working?</h4>
            </div>
            <div className="col-4 d-flex align-items-center">

            <div className="pl-4">
                <input className="" type="radio" id="tpon" name="touchpad" value="yes"  onChange={(e) => setTouchpadON(e.target.value)}/>
            </div>
              <label className="mb-0 pl-2" htmlFor="male">YES</label>
              <div className="pl-2">
                <input type="radio" id="tpoff" name="touchpad" value="no"  onChange={(e) => setTouchpadON(e.target.value)}/>
              </div>
              <label className="mb-0 pl-2" htmlFor="female">NO</label><br />
            </div>
            </div>
            <div className="d-flex align-items-center">
            <div className="col-8">
                <h4>Is your Battery Dead?</h4>
            </div>
            <div className="col-4 d-flex align-items-center">

            <div className="pl-4">
                <input className="" type="radio" id="batteryon" name="battery" value="yes"  onChange={(e) => setBatteryON(e.target.value)}/>
            </div>
              <label className="mb-0 pl-2" htmlFor="male">YES</label>
              <div className="pl-2">
                <input type="radio" id="batteryoff" name="battery" value="no"  onChange={(e) => setBatteryON(e.target.value)}/>
              </div>
              <label className="mb-0 pl-2" htmlFor="female">NO</label><br />
            </div>
            </div>
            <div className="d-flex align-items-center">
            <div className="col-8">
                <h4>Is your webcam working?</h4>
            </div>
            <div className="col-4 d-flex align-items-center">

            <div className="pl-4">
                <input className="" type="radio" id="webon" name="web" value="yes"  onChange={(e) => setWebON(e.target.value)}/>
            </div>
              <label className="mb-0 pl-2" htmlFor="male">YES</label>
              <div className="pl-2">
                <input type="radio" id="weboff" name="web" value="no"  onChange={(e) => setWebON(e.target.value)}/>
              </div>
              <label className="mb-0 pl-2" htmlFor="female">NO</label><br />
            </div>
            </div>
            
            <div className="col-12 d-flex pt-4 justify-content-center">

              <button
                        type="button"
                        id=""
                        className="btn btn-primary text-truncate"
                        onClick={()=>getprice()}
                      >
                        submit
                      </button>
            </div>
            {showPrice && <div>
                <h3>Estimated Price is {price}</h3>
                <a href="/res">Click here if you want to Request for recycle</a>
            </div>}
 </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setSport: (sport) => dispatch(setSport(sport))
})

export default connect(null, mapDispatchToProps)(Sports);