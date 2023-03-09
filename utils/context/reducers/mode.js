export function mode(state, action) {
  switch (action.type) {
    case "TOGGLE_DARK_MODE": {
      return {
        ...state,
        isDarkMode: true,
      };
    }
    case "TOGGLE_LIGHT_MODE": {
      return {
        ...state,
        isDarkMode: false,
      };
    }
    default:
      return state;
  }
}
