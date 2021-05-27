
import React, { Children } from "react";
import './modal.css';
const options =  ["Inprogress","Completed"]
function Modal(props) {

function savehandle(e, k) {
    e.preventDefault();
    props.save(e, k);
}
function dsccschange(e, k) {
    props.chrlg(e, k);
}
function closehandle(e, k) {
    e.preventDefault();
    props.closemod(k);
}

function cardstateChange(e, k) {
    props.cardst(e.target.value, k);
}

return(
    <form>
       <div className="modeldata">
          <form>
              <div className="taskname">
                <label>
                    Name:
                </label>
                <div>{props.task}</div>
              </div>
              <div className="taskDesc">
                <label>
                    Description:
                </label>
                <div>
                <textarea
                    rows={6}
                    type="text"
                    maxLength="200"
                    value = {props.desc}
                    onChange={(e) => dsccschange(e, props._key)}
                />
                <label>Characters left:</label>
                <p>{props.lenght}</p>
                </div>
              </div>
              <div className="taskstatus">
                <label>
                     Status:    
                </label>
                 <select value={props.cpmstate} onChange={(e) => cardstateChange(e, props._key)}>
                     {options.map((option) => (
                     <option key={option} value={option}>
                     {option}
                    </option>
                     ))}
                 </select>
              </div>
              <div className="taskstart">
                 <label>
                     Created on:
                 </label>
                 <div>{props.startdt}</div>
              </div>   
              <div className="taskend">
                 <label>
                     Closed on:
                 </label>
                 <div>{props.enddt}</div>
              </div>
              <div className="savebutton">  
                  <button onClick={(e) => savehandle(e, props._key)}>save</button>
              </div> 
              <div className="closebutton">  
                  <button  onClick={(e) => closehandle(e, props._key)}>close</button>
              </div>              
          </form>
       </div>
    </form>
)
}


export default Modal;