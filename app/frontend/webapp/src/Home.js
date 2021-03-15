import React, {useState} from "react";
import {ReactComponent as WelcomeImg} from "./Capture.svg";
import { useHistory } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import Comment2Modal from './modals/WelcomePopup'
import Axios from 'axios';
import axios from "axios";


const Home = () => {
  const history = useHistory();
  // const [showComment2Modal, setShowComment2Modal] = useState(true);
  const [showComment2Modal, setShowComment2Modal] = useState(Cookies.get('watched') || '');
  const [serviceTag, setServiceTag] = useState('')
  const [productType, setProductType] = useState('')
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [productDetail, setProductDetail] = useState()
  const [showPrice, setShowPrice] = useState(false)

  const getdetail = async ()=>{
    console.log(serviceTag)
    const data = await Axios.get('http://localhost:5555/getproductdet', {params: {'serviceid': serviceTag}})
    console.log("data", data.data)
    setProductDetail(data.data)
    setShowProductDetail(true)
  }

    return (
      <>
        <div>
            <div className="d-sm-flex vertical-center-container">
            <div className="col-0 col-sm-1"></div>
          <div className="col-12 col-sm-4 wel-img"><WelcomeImg />
          Total Recycled <b>7878979</b> MT</div>
          <div className="col-0 col-sm-1"></div>
          {!showProductDetail && <div className="col-12 col-sm-5 wel-header">
            {/* <h3 style={{ color: "#808080" }}>Welcome to Loci !!!</h3> */}
              <h4 style={{ color: "#444444" }}>Close The Loop</h4>
              <p>
              Wondering what to do with your old devices? We are pleased to offer you the opportunity to Sell/Recycle old devices.
        
              </p>
              <input type="radio" id="male" name="gender" value="dell"  onChange={(e) => setProductType(e.target.value)}/>
              <label className="pl-3" htmlFor="male"> Dell Product</label><br />
              <input type="radio" id="female" name="gender" value="not"  onChange={(e) => setProductType(e.target.value)}/>
              <label className="pl-3" htmlFor="female"> Not a Dell product</label><br />

              {productType === 'dell' && 
              <>
              <label htmlFor="serviceTag">Service Tag</label><br />
              <div className="d-flex justify-content-between">
              <input type='text' 
                      id="serviceTag" 
                      placeholder="Enter service tag no."
                      onChange={(e) => setServiceTag(e.target.value)} value={serviceTag} style={{width: 260}}></input>
                      <button
                        type="button"
                        id=""
                        className="btn w-25 btn-primary text-truncate"
                        onClick={()=>getdetail()}
                      >
                        submit
                      </button>
              </div>
              <br />
              </>}
              <div className="screening-buttons d-sm-block">
                    <div className="d-flex screening-buttons-width screening-button-mobile">
                      {/* <Link to={allConditionsNotAgree ? '/attestationSuccess' : '/attestationFailure'}> */}
                      
                    </div>
                  </div>
          </div>}
                    {showProductDetail && <div className="col-12 col-sm-5 wel-header">
            {/* <h3 style={{ color: "#808080" }}>Welcome to Loci !!!</h3> */}
              <h4 style={{ color: "#444444" }}>Product Detail</h4>
              <h6>Product Type:  {productDetail.product_type}</h6>
              <h6>Service Tag:  {productDetail.service_tag}</h6>
              <h6>Product Series:  {productDetail.product_series}</h6>
              <h6>processor:  {productDetail.processor}</h6>
              <h6>RAM:  {productDetail.ram}</h6>
              <h6>HDD:  {productDetail.hdd}</h6>
              <h6>Screen Size:  {productDetail.screen_size}</h6>
              <h6>Year of Purchase:  {productDetail.purchase_year}</h6>
              <h6>Graphic Card:  {productDetail.garphics_card}</h6>
              <h6>Customer Name:  {productDetail.name}</h6>
              <h6>Number of Serivce Request:  {productDetail.no_of_services}</h6>
              <h6>Warranty Expiry Date:  {productDetail.warranty_expiry_date}</h6>
              <button
                        type="button"
                        id=""
                        className="btn btn-primary text-truncate"
                        onClick={()=>history.push({
                          pathname: '/price',
                          state: {productDetail}
                        })}
                      >
                        Get Estimated price
                      </button>
          </div>}
          <div className="col-0 col-sm-1"></div>
            </div>
        </div>
        {console.log("jhkk",Cookies.get('watched') === '')}
        {Cookies.get('watched') === 'true' &&
          <Comment2Modal showModal={true} showModalCallback={(status) => {
          Cookies.set('watched',false)}}/>}
          </>
    );
};

export default Home;
