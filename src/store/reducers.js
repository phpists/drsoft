import { combineReducers } from "redux";
import authorization from './authorization';
import nakladni from './nakladni';
//import skans from './skans';


const rootReducer = combineReducers({
  authorization,
  nakladni,
 // skans,
});


export default rootReducer;
