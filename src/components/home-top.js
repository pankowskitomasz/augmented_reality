import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-dark-red text-dark-red">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center py-3 d-flex h-50vh maxh-600 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 py-5">
                    <Col xs={12} lg={5} className="mx-auto text-dark p-0 d-flex align-items-end text-end order-2 order-lg-1">
                        <img alt="about"
                            className="img-fluid mx-auto ms-md-start w-75"
                            src="img/home/home-img.png"/>
                    </Col>
                    <Col xs={12} lg={7} className="mx-auto p-0 d-flex align-items-center order-1 order-lg-2">
                        <div className="p-5 text-lg-start text-center">
                            <h1 className="display-6 text-white fw-bold text-uppercase text-shadow">
                                Augmented Reality
                            </h1>
                            <h1 className="lead text-violet text-shadow fw-bold text-uppercase">
                                Different look on future
                            </h1>
                            <p className="text-white text-shadow pe-lg-5">
                                Our world is changing everyday, new technologies, new solutions, 
                                new daily life. Don't stay behind, touch the future now!
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;