import handleCart from "./handleCart";
import handleFeedback from "./handleFeedback";
import handleCheckout from "./handleCheckout";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
    handleFeedback,
    handleCheckout,
});

export default rootReducers;
