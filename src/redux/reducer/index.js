import handleCart from "./handleCart";
import handleFeedback from "./handleFeedback";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
    handleFeedback,
});

export default rootReducers;
