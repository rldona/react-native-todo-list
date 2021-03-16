import { ADD_NOTE, DELETE_NOTE } from "../actions/types/notes";

const initialState = [
  {
    id: 0,
    note: 'hello world'
  }
]

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      console.log(action)
      return [
        ...state,
        {
          id: action.id,
          note: action.note
        }
      ]

    case DELETE_NOTE:
      // const deletedNewArray = remove(state, obj => {
      //   return obj.id != action.payload
      // })
      // return deletedNewArray

      return [
        ...state,
      ]

    default:
      return state
  }
}

export default notesReducer