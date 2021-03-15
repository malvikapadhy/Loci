import {Card, Container, Row} from "react-bootstrap";
import React from "react";
import gymImg from './amazon.png'
import sportImg from './dell-products.svg'
import {Link} from "react-router-dom";

const Rewards = () => {
    return (
        <div className="container py-1">
            <Container className={"d-flex justify-content-center flex-column"}>
                <h3 style={{marginTop: 20}}>My rewards</h3>
                <span style={{marginTop: 20, marginBottom: 20, backgroundColor: "#0076ce", color: "white", fontSize: 20}}>You have earned <b>2100</b> points. Below are the ways to redeem your rewards.</span>
                <span>To earn more points, Refer your friends</span>
            </Container>
            <div className="container py-1 my-3">
                <Row>
                    <div className="col-md-4 p-2 ">
                        <Card>
                            <Card.Header><h3>Dell products</h3></Card.Header>
                            <a href="https://www.dell.com/en-in/shop/scc/sc/laptops?~ck=mn">
                                <Card.Img src={sportImg} />
                            </a>
                        </Card>
                    </div>
                    <div className="col-md-4 p-2 ml-4">
                        <Card>
                            <Card.Header><h3>Coupons & Tickets</h3></Card.Header>
                            <Link to="/coupons">
                                <Card.Img src={gymImg}></Card.Img>
                            </Link>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Rewards;