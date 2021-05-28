import React, { useState, useRef, useEffect} from 'react';
import './App.css';
import Modal from "./modal"
import View from "./view"
import Completedview from "./completedview"



function App() {
  const wrapperRef = useRef(null);  
  const [keycount, setKeycount] = useState(0);
  const [name, setName] = useState([]);
  const [ele, setEle] = useState('');
  const [clickstate, setClickstate] = useState([]);
  const [modelstate, setModelstate] = useState([]);
  const [charele, setCharele] = useState('');
  const [charleft, setCharleft] = useState([]);
  const [currentdate, setCurrentdate] = useState('');
  const [enddate, setEnddate] = useState([]);
  const [cardstate, setCardstate] = useState([]);
  const [descele, setDescele] = useState('');
  const [descstate, setDescstate] = useState([]);
  const [viewstate, setViewstate] = useState([]);
  const [completname, setCompletname] = useState([]);
  const [completclickstate, setCompletclickstate] = useState([]);
  const [completviewstate, setCompletviewstate] = useState([]);
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);


 const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      const rstst = [...clickstate]
      rstst.push(false);
      setClickstate(rstst);
      const resetst = [...completclickstate]
      resetst.push(false);
      setCompletclickstate(resetst);
    }
  };
  function keyChange(e) {
    setEle(e.target.value);
  }

  function handleChange(event) {
    if(ele === ""){
      event.preventDefault();
     console.log("Enter something");
    }
    else{
    event.preventDefault();
    const namelist= [...name];
    let input = { key: keycount, value: ele}
    var current = new Date();
    var isodate = current.toISOString();
    const ctdate = [...currentdate];
    ctdate[keycount] = isodate;
    setCurrentdate(ctdate);
    const ennddt = [...enddate];
    ennddt.push("Yet to Close");
    setEnddate(ennddt);
    setKeycount(keycount + 1);
    namelist.push(input);
    setName(namelist);
    setEle('');
    //const clkst= [...clickstate]
    //clkst.push(false);
    //setClickstate(clkst);
    const modst= [...modelstate]
    modst.push(false);
    setModelstate(modst); 
    const vwst = [...viewstate]
    vwst.push(false);
    setViewstate(vwst);
    const crdst = [...cardstate];
    crdst[keycount] = "Inprogress"
    setCardstate(crdst); 
    }
 }


function handlemenu(key){
  const newarr = [...clickstate]
  newarr[key] = !newarr[key];
  setClickstate(newarr);
}

function handledelete(key){
  let names = [...name];
  names = names.filter(el => el.key !== key);
  setName(names); 
  const delarr = [...clickstate]
  delarr[key] = !delarr[key];
  setClickstate(delarr);
}

function showmodal(key) {
  const modarr= [...modelstate]
  modarr[key] = !modarr[key];
  setModelstate(modarr);
  const shmdarr = [...clickstate]
  shmdarr[key] = !shmdarr[key];
  setClickstate(shmdarr);
  setCharleft(200);    
  const cdst = [...cardstate];
  cdst[key] = "Inprogress"
  setCardstate(cdst); 
  const  descload = [...descstate];
  setDescele(descload[key]);
  if(descstate[key] === undefined) {

    setCharele(200);
  }else{
    const rmglg = 200 - descstate[key].length;
    setCharele(rmglg);
  
    setCharleft(rmglg);
  }
}

function getcharlenght(e, k) {
  const charcount = e.target.value.length;
  const charlength = 200 - charcount;
  setCharleft(charlength);
  setDescele(e.target.value);
}

function closemodal(p) {
  const clmod = [...modelstate];
  clmod[p] = !clmod[p];
  setModelstate(clmod);
  const cdst = [...cardstate];
  cdst[p] = "Inprogress"
  setCardstate(cdst); 
  setDescele('');
}

function statecard(e, k) {
  const cdst = [...cardstate];
  cdst[k] = e;
  setCardstate(cdst);

}

function savemodal(e, k) {
 if (cardstate[k] === "Inprogress"){
  const  descstt = [...descstate];
  descstt[k] = descele;
  setDescstate(descstt);
  const svmod = [...modelstate];
  svmod[k] = !svmod[k];
  setModelstate(svmod);
 } else {
  const  descste = [...descstate];
  descste[k] = descele;
  setDescstate(descste);
   const cmpnm = [ ...completname];
   const mvnm = [...name]
   var result = mvnm.find( ({ key }) => key === k);
   let inpcom = { key: k, value: result.value}
   cmpnm.push(inpcom);
   setCompletname(cmpnm);
   let nmsbm = [...name];
   nmsbm = nmsbm.filter(el => el.key !== k);
   setName(nmsbm);
   var current = new Date();
   var isodates = current.toISOString();
   const cmenddate = [...enddate];
   cmenddate[k] = isodates;
   setEnddate(cmenddate);
   const svmod = [...modelstate];
   svmod[k] = !svmod[k];
   setModelstate(svmod);
   const cmpvwst = [...completviewstate]
   cmpvwst.push(false);
   setCompletviewstate(cmpvwst);
 }
}

function viewmodal(k) {
  const viewarr= [...viewstate]
  viewarr[k] = !viewarr[k];
  setViewstate(viewarr);
  const vdarr = [...clickstate]
  vdarr[k] = !vdarr[k];
  setClickstate(vdarr);
}

function closeview(p) {
  const clvw = [...viewstate];
  clvw[p] = !clvw[p];
  setViewstate(clvw);
}

function handlecomplettmenu(k) {
  const cmclk = [...completclickstate]
  cmclk[k] = !cmclk[k];
  setCompletclickstate(cmclk);
}

function viewcmpmodal(k) {
  const cviewarr= [...completviewstate]
  cviewarr[k] = !cviewarr[k];
  setCompletviewstate(cviewarr);
  const cvdarr = [...completclickstate]
  cvdarr[k] = !cvdarr[k];
  setCompletclickstate(cvdarr);
}

function closecmplview(k) {
  const cvwarr= [...completviewstate]
  cvwarr[k] = !cvwarr[k];
  setCompletviewstate(cvwarr);
}

function completdelete(k){
  let cmpnames = [...completname];
  cmpnames = cmpnames.filter(el => el.key !== k);
  setCompletname(cmpnames); 
  const cmpdelarr = [...completclickstate]
  cmpdelarr[k] = !cmpdelarr[k];
  setCompletclickstate(cmpdelarr);
}
  return (
    <div className="Tasklist" ref={wrapperRef}>
       <form>
                <div className="header" >
                    <h3>ToDo list</h3>
                    <form>
                    <input type="text"
                           placeholder="Your Tasks"
                           value={ele}
                           onChange={keyChange}
                           />
                     <button type="submit" onClick={handleChange}>Add</button>
                     </form>
                 </div> 
                 <h6 className="heading_pending">InProgress:</h6>
                 <form className="Pendingform">
                 <div className="body">
                      {
                          name.slice(0).reverse().map((_el, i) => {
                            return <div>
                                    <ul className="card_pending">
                                      <div>{_el.value}</div>
                                      <button type="button" className="button" onClick={() => handlemenu(_el.key)}>
                                      ☰
                                      </button>
                                    </ul>
                                     {clickstate[_el.key] === true && modelstate[_el.key] === false &&
                                      <div className="dropdown">
                                        <ul>
                                        <li onClick={() => viewmodal(_el.key)}>View</li>
                                          <li onClick={() => showmodal(_el.key)}>Edit</li>
                                          <li onClick={() => handledelete(_el.key)}>Delete</li>
                                        </ul>
                                      </div>
                                      }
                                      {modelstate[_el.key] === true &&
                                      <Modal className="modpop" 
                                             task={_el.value} 
                                             chrlg={getcharlenght} 
                                             lenght={charleft} 
                                             startdt={currentdate[_el.key]} 
                                             enddt={enddate[_el.key]} 
                                             _key={_el.key} 
                                             closemod={closemodal} 
                                             cardst={statecard} 
                                             cpmstate={cardstate[_el.key]} 
                                             desc={descele} 
                                             save={savemodal}/>
                                      }
                                      {viewstate[_el.key] === true &&
                                      <View className="viewpop" 
                 
                                      vtask={_el.value} 
                                             _key={_el.key} 
                                             vstartdt={currentdate[_el.key]}  
											                       venddt={enddate[_el.key]} 
                                             vstatus={cardstate[_el.key]} 
                                             vdesc={descstate[_el.key]} 
											                       viewmod={closeview}/>
                                        }
                                      
                                      </div>
                          })
                        }
                 </div>
                </form>
                  <h6 className="heading_Completed">Completed:</h6>
                    <form className="Completedform">
                      <div className="body">
                      {
                          completname.slice(0).reverse().map((_elem, i) => {
                            return <div>
                                    <ul className="card_Complete">
                                      <div>{_elem.value}</div>
                                      <button type="button" className="Completebutton" onClick={() => handlecomplettmenu(_elem.key)}>
                                      ☰
                                      </button>  
                                    </ul>
                                    {completclickstate[_elem.key] === true &&   
                                    <div className="completdropdown">                            
                                        <ul>
                                          <li onClick={() => viewcmpmodal(_elem.key)}>View</li>
                                          <li onClick={() => completdelete(_elem.key)}>Delete</li>
                                        </ul>
                                      </div>
                                      }
                                      {completviewstate[_elem.key] === true &&
                                          <Completedview className="completpop" 
                                                cvtask={_elem.value} 
                                                _key={_elem.key} 
                                                cvstartdt={currentdate[_elem.key]}  
	                                              cvenddt={enddate[_elem.key]} 
                                                cvstatus={cardstate[_elem.key]} 
                                                cvdesc={descstate[_elem.key]} 
                                                cmplviewmod={closecmplview}/>
                                       }
                                    </div>
                            })
                          }  
                      </div>
                    </form>
        </form>
      

    </div>
    

  );
  
  
  
}





export default App;
