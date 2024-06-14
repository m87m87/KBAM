import React from "react";
import { Link } from 'react-router-dom';
import Readabout from './readabout.js';
import Carinfo from './car.js';



const Servicespage = () => {
  return (
      <div className="title">
          <h4>
            This page is for the professional services.
          </h4>
          <p>{Readabout}</p>
          <div>
            <pre style={{ whiteSpace: 'pre-wrap'}}>{Carinfo}</pre>
          </div>

          <div className="inline-links">
            <div className="ars">
              <Link to="ars" style={{textDecoration: 'none'}}>Auto Repair Services</Link>
            </div>
                    
          </div>
            
      </div>
      
  );
}
export default Servicespage;

