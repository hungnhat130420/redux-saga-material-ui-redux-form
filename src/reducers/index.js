import { combineReducers } from "redux";
import taskReducer from '../reducers/task';
import uiReducer from '../reducers/ui';

const rootReducer = combineReducers({
    tasks : taskReducer,
    ui: uiReducer
});

export default rootReducer;
