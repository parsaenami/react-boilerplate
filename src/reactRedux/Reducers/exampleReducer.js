import { exampleActionTypes } from "../actionTypes";

const emptyState = {
  x: 0
}

export const reducer = (state = emptyState, {type, payload}) => {
  switch (type) {
    case exampleActionTypes.EXAMPLE_ACTION:
      return {
        ...state,
        x: state.x + 1
        // other stuff
      }

    default:
      return state
  }
}