import React, { Component } from 'react'
import img1 from '../img/tabimg/IT.png';
import img2 from '../img/tabimg/bm.png';
import img3 from '../img/tabimg/eng.png';
import img4 from '../img/tabimg/Science-Education.png';
import img5 from '../img/tabimg/Science-Education.png';
import img6 from '../img/tabimg/Science-Education.png';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import slide1 from '../img/slide/0.jpg';
import slide2 from '../img/slide/2.jpg';
import slide3 from '../img/slide/3.jpg';
import slide4 from '../img/slide/DSC_6184_1-1.jpg'
import slide5 from '../img/slide/5.jpg'



class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        };
    }



   render () {
       let { leftIcon, rightIcon } = this.state;
        return (


            <div data-spy="scroll" data-target="#navbar-example">


            <div className="container-fluid">
                <Row>

                    <Col span={12} style={{ paddingTop: "20px" }}>
                        <RBCarousel
                            animation={true}
                            autoplay={this.state.autoplay}
                            slideshowSpeed={2000}
                            leftIcon={leftIcon}
                            rightIcon={rightIcon}
                            onSelect={this.onSelect}
                            ref={r => (this.slider = r)}
                            version={4}
                        >
                            <div style={{ height: 500 }}>
                                <img alt="JSOFT"
                                    style={{ width: "100%", height: "100%" }}
                                    src={slide1}
                                />

                            </div>
                            <div style={{ height: 500 }}>

                                <img alt="JSOFT"
                                    style={{ width: "100%", height: "100%" }}
                                    src={slide2}
                                />

                            </div>
                            <div style={{ height: 500 }}>
                                <img alt="JSOFT"
                                    style={{ width: "100%", height: "100%" }}
                                    src={slide3}
                                />

                            </div>
                            <div style={{ height: 500 }}>
                                <img alt="ALT"
                                     style={{ width: "100%", height: "100%" }}
                                     src={slide4}
                                />

                            </div>
                            <div style={{ height: 500 }}>
                                    <img alt="JSOFT"
                                        style={{ width: "100%", height: "100%" }}
                                        src={slide5}
                                    />
                            </div>
                        </RBCarousel>
                    </Col>


                </Row>
            </div>

<div>
    <hr/>
    <h1 className="text-center">Faculties</h1>
</div>



<div>


            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src={img1} className="card-img-top"
                                 alt="..."/>
                                <div className="card-body text-center">
                                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                                        Faculty Of Computing
                                    </button>
                                </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src={img2} className="card-img-top"
                                 alt="..."/>
                                <div className="card-body text-center">

                                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                                        Faculty Of BM
                                    </button>
                                </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src={img3} className="card-img-top"
                                 alt="..."/>
                                <div className="card-body text-center">
                                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                                        Faculty Of DS
                                    </button>
                                </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src={img4} className="card-img-top"
                                 alt="..."/>
                                <div className="card-body text-center">
                                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                                        Faculty Of Bio Chemistry
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


</div>






        <footer>
            <div class="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="footer-content">
                                <div class="footer-head">
                                    <div class="footer-logo">
                                        <h2><span>Code</span>Vita</h2>
                                    </div>

                                    <p>Connect With Social Networks.</p>
                                    <div class="footer-icons">
                                        <ul>
                                            <li>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href=""><i class="fa fa-google"></i></a>
                                            </li>
                                            <li>
                                                <a href=""><i class="fa fa-pinterest"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="footer-content">
                                <div class="footer-head">
                                    <h4>information</h4>
                                    <p>
                                        Connect Or Send An Email To Student Affair Devision Using Below Helpers!!!!
                                    </p>
                                    <div class="footer-contacts">
                                        <p><span>Tel:</span> +94478904555</p>
                                        <p><span>Email:</span> vihangasankalpa220@example.com</p>
                                        <p><span>Upload Any Inquiries:</span> blogerzzz@dropbox.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="footer-content">
                                <div class="footer-head">
                                    <h4>Events</h4>
                                    <div class="flicker-img">
                                        <a href=""><img src={img1} alt=""/></a>
                                        <a href=""><img src={img2} alt=""/></a>
                                        <a href=""><img src={img3} alt=""/></a>
                                        <a href=""><img src={img4} alt=""/></a>
                                        <a href=""><img src={img5} alt=""/></a>
                                        <a href=""><img src={img6} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-area-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="copyright text-center">
                                <p>
                                    &copy; Copyright <strong>CodeVita</strong>. All Rights Reserved
                                </p>
                            </div>
                            <div class="credits">

                                Designed by <a href="">CodeVita</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <a href="" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

            </div>

    )
    }
}
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
    <div className={`col-${props.span}`} style={props.style}>
        {props.children}
    </div>
);


export default Landing;