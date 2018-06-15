import { combineReducers } from "redux";
import MessagesReducer from "./reducers_messages";
import { reducer as reduxForm } from 'redux-form';
import ActiveMessage from "./activemessage";


const rootReducer = combineReducers({
  messages: MessagesReducer,
  form: reduxForm,
  activeMessage: ActiveMessage
});

export default rootReducer;
