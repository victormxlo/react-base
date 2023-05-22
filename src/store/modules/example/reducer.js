const initialState = {
  buttonClicked: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }

    default: {
      return state;
    }
  }
}
