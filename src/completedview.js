
import React, { Children } from "react";
import './completedview.css';
function Completedview(props) {


function closehandle(e, k) {
    e.preventDefault();
    props.cmplviewmod(k);
}

return(
    <form>
       <div className="completedviewdata">
          <form>
              <div className="taskname">
                <label>
                    Name:
                </label>
                <div>{props.cvtask}</div>
              </div>
              <div className="taskDesc">
                <label>
                    Description:
                </label>
                <p>{props.cvdesc}</p>
              </div>
              <div className="taskstatus">
                <label>
                     Status:    
                </label>
                <p>{props.cvstatus}</p>
               </div> 
              <div className="taskstart">
                 <label>
                     Created on:
                 </label>
                 <div>{props.cvstartdt}</div>
              </div>   
              <div className="taskend">
                 <label>
                     Closed on:
                 </label>
                 <div>{props.cvenddt}</div>
              </div>
              <div className="cvclosebutton">  
                  <button  onClick={(e) => closehandle(e, props._key)}>close</button>
              </div>              
          </form>
       </div>
    </form>
)
}


export default Completedview;