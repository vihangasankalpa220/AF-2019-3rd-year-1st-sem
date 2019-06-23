import React, { Component } from 'react'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

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
                            <div style={{ height: 400 }}>
                                <img alt="JSOFT"
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvtbGUKvM91RHi_47JTU6prVVLVqy_-hMdmwumNiQ4N1ARTYz"
                                />

                            </div>
                            <div style={{ ...styles, backgroundColor: "aqua" }}>

                                <img alt="JSOFT"
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuW3kMHmSRbvVoWTsfZb6ah8AFS4l_0wEM41zZBINYtVcPyQLS"
                                />

                            </div>
                            <div style={{ height: 400, width: "100%", backgroundColor: "lightpink" }}>
                                <img alt="JSOFT"
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIuxhcwo4qlViqnccWHPnqqaD7YLpmOpIkzyYwZ2DnMz_GXQ2"
                                />

                            </div>
                            <div style={{ ...styles, backgroundColor: "lightblue" }}>


                            </div>
                            <div style={{ ...styles, backgroundColor: "lightblue" }}>
                                <div className="carousel-center">
                                    <img alt="JSOFT"
                                        style={{ width: "100%", height: "100%" }}
                                        src="https://www.w3schools.com/bootstrap/ny.jpg"
                                    />
                                </div>

                            </div>
                        </RBCarousel>
                    </Col>

                </Row>
            </div>


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