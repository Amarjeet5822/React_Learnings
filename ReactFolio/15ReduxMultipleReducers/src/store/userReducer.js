export const initialState = {
  name: "John Doe",
  email: "john@john.com",
  age: 25
}

export const userReducer = (state = initialState, action ) => {
  switch (action.type) {
    case "UpdateUser":
      return {
        ...state, 
        ...action.payload
      }
    case "ResetUser":
      return initialState;
    default:
      return state
  }
}