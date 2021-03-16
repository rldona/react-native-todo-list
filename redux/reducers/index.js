import { combineReducers } from 'redux';

import notes from './notesReducer';

const rootReducer = combineReducers({
  notes,
  // reducer2,
  // reducer3,
});

export default rootReducer;
