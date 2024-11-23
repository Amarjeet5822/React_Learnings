export const initialState = "light"

export const themeReducer = (state= initialState, action) => {
  switch (action.type) {
    case "light":
      return "light"
    case "dark":
      return "dark"
    default:
      return state;
  }
} 
