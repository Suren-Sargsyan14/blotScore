import { combineReducers } from 'redux';

import main from './main';
import scoreOut from './scoreOut';

export default combineReducers({
  main,
  scoreOut,
});
