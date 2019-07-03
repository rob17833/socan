import { combineReducers } from 'redux';
import playlistReducer from './PlaylistReducer';
const rootReducer = combineReducers({
  form: playlistReducer,

})

export default rootReducer;