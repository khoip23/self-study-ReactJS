import { 
    TYPE_LOG
 } from "./constains";

function logger(log,type = TYPE_LOG){
    console[type](log);
}

export default logger 