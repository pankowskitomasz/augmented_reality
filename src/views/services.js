import React,{Component} from "react";
import ServicesContent from "../components/services_content";

class Services extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-services">     
                <ServicesContent/>
            </main>
        );
    }
}

export default Services;