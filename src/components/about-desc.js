import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"about-desc p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-dark-red "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={7} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div className="w-75 mx-auto text-shadow">
                            <h2 className="mb-3 mt-5 fw-bold text-white">
                                Our story
                            </h2>
                            <p className="lead text-white">
                                As an independent technology developer focused on representing best quality 
                                in field of augmented technology research, we offer wide range of services 
                                and products. Our company was founded in 2011 and since then it has grown 
                                into a one of leading companies in augmented reality. We collaborate and partner 
                                with biggest technology brands on market.                                                
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about_desc_img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutDesc;