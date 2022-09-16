import React from 'react';
import ReactDOM from 'react-dom';

import Callcss from "./Call.module.css";

import { BiPhoneCall } from "react-icons/bi";

const Call=()=>{
return(
<>



<a href="tel:02636778250" className={Callcss.call}> <BiPhoneCall/></a>


</>

)
}

export default Call;