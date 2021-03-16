import { combineReducers } from 'redux';

import notes from './notesReducer';

const rootReducer = combineReducers({
  notes,
  // otherReducer,
  // otherReducer,
});

export default rootReducer;
