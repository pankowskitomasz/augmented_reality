import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext p-0 minh-50vh d-flex align-items-center pt-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={6} className="text-center me-auto order-2 order-md-1 d-flex align-items-end justify-items-start">
                        <img alt="about"
                            className="img-fluid w-75 me-auto"
                            src="img/about/about_ext_img.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2">
                        <div className="text-shadow">
                            <h2 className="mb-3 mt-5 text-white">
                                Why to choose us?
                            </h2>
                            <p className="lead text-white">
                                We offer a huge selection of services and products, including: 3d scanning,
                                developing augmented reality content and delivery of hardware. We are 
                                passionate about our goal of bringing our products to the daily life use. 
                                We pride ourselves on not only carrying a large selection of officially 
                                licensed products and services from our partners.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default AboutExt;