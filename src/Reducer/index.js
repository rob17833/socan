import { combineReducers } from 'redux';
import playlistReducer from './PlaylistReducer';
import selectedReducer from './SelectedReducer';
const rootReducer = combineReducers({
  form: playlistReducer,
  selected: selectedReducer

})

export default rootReducer;