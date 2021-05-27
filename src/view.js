
import React, { Children } from "react";
import './view.css';
function View(props) {


function closehandle(e, k) {
    e.preventDefault();
    props.viewmod(k);
}

return(
    <form>
       <div className="viewdata">
          <form>
              <div className="taskname">
                <label>
                    Name:
                </label>
                <div>{props.vtask}</div>
              </div>
              <div className="taskDesc">
                <label>
                    Description:
                </label>
                <p>{props.vdesc}</p>
              </div>
              <div className="taskstatus">
                <label>
                     Status:    
                </label>
                <p>{props.vstatus}</p>
               </div> 
              <div className="taskstart">
                 <label>
                     Created on:
                 </label>
                 <div>{props.vstartdt}</div>
              </div>   
              <div className="taskend">
                 <label>
                     Closed on:
                 </label>
                 <div>{props.venddt}</div>
              </div>
              <div className="vclosebutton">  
                  <button  onClick={(e) => closehandle(e, props._key)}>close</button>
              </div>              
          </form>
       </div>
    </form>
)
}


export default View;